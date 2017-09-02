import * as React from 'react';
import { MySettings } from './App';

interface Props {
  mySettings: MySettings;
}

const Frontpage = ({ mySettings }: Props) => (
  <main>
    <h1>Frontpage</h1>
    <p>{mySettings.someProperty}</p>
  </main>
);

export default Frontpage;
