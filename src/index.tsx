import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CurrentPositionSelect from './CurrentPositionSelect';
import {FederalDistrictProvider} from './context/FederalDistrictsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FederalDistrictProvider>
      <CurrentPositionSelect />
    </FederalDistrictProvider>
  </React.StrictMode>
);
