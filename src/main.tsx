import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

if ( !navigator.geolocation ) {
    alert( 'Your browser does not have access to geolocation' );
    throw new Error("Your browser does not have access to geolocation");
    
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
