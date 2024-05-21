import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_MAPBOX_ACCESS_TOKEN } = getEnvVariables();


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: VITE_MAPBOX_ACCESS_TOKEN,
    }
})


export default directionsApi;