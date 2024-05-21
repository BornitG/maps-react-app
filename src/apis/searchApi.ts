import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_MAPBOX_ACCESS_TOKEN } = getEnvVariables();

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: VITE_MAPBOX_ACCESS_TOKEN,
    }
})


export default searchApi;