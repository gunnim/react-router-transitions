/* ===============
 *  React Routing
 * =============== */
import * as React from 'react';
import { 
    Route,
    Switch,
} from 'react-router';
import { 
  BrowserRouter as Router, 
  Link 
} from 'react-router-dom';
import * as CSSTransition from 'react-transition-group/CSSTransition';
import * as TransitionGroup from 'react-transition-group/TransitionGroup';

import Frontpage from './frontpage';
import About from './about';
import FAQ from './faq';

import './App.css';

const Status = props => (
  <Route 
    render={({ staticContext }) => {
      if (staticContext)
        staticContext.status = props.code;
      return props.children;
    }}
  />
);

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
);

const renderMergedProps = (Component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    <Component {...finalProps} />
  );
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={routeProps =>
        <CSSTransition 
          classNames="fade"
          timeout={150}
          {...rest}
        >
            {renderMergedProps(component, routeProps, rest)}
        </CSSTransition>
      }
    />
  );
};

const SwitchWrapper = ({ render, ...rest }) =>
  render(rest);

const App = props => (
  <Router>
    <div>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </header>
      <Route render={({ location }) => (
        <TransitionGroup>
          <SwitchWrapper render={transitionProps => (
            <Switch key={location.key} location={location}>
              <PropsRoute exact {...props} path="/"         {...transitionProps} component={Frontpage} />
              <PropsRoute exact {...props} path="/about"    {...transitionProps} component={About}  />
              <PropsRoute exact {...props} path="/faq"      {...transitionProps} component={FAQ} />
              <PropsRoute       {...props}                  {...transitionProps} component={NotFound} />
            </Switch>
          )}
          />
        </TransitionGroup>
      )}/>
    </div>
  </Router>
);

export class MySettings {
  someProperty = 'withSomeData';
}

export default App;