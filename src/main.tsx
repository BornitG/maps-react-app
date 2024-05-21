import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import './styles.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm9ybml0IiwiYSI6ImNsNDZjc3VnbzA3YXkzaXBpdDlnNnl5eWoifQ.OnjiWZ7EWyBp3x_8knT0IA';

if ( !navigator.geolocation ) {
    alert( 'Your browser does not have access to geolocation' );
    throw new Error("Your browser does not have access to geolocation");
    
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
