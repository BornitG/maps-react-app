import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { LoadingPlaces } from "./";
import { Feature } from "../interfaces/places";




export const SearchResults = () => {

    const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );
    const { map, getRouteBetweenPoints } = useContext( MapContext );

    const [activeId, setActiveId] = useState('')

    const onPlaceClick = ( place: Feature ) => {
        const [ lng, lat ] = place.center;
        setActiveId( place.id )
        map?.flyTo({
            zoom: 14,
            center: [ lng, lat ]
        })
    }

    if ( isLoadingPlaces ) {
        return <LoadingPlaces />
    }

    if ( places.length === 0 ) {
        return <></>;
    }

    const getRoute = ( place: Feature ) => {
        if ( !userLocation ) return;
        const [ lng, lat ] = place.center;


        getRouteBetweenPoints( userLocation, [ lng, lat ] );
    }

  return (
    <ul className="list-group mt-2">

        {
            places.map( place => (
                <li
                    key={ place.id }
                    className={`list-group-item list-group-item-action ${ (activeId === place.id) ? 'list-group-item-primary' : '' } pointer`}
                    onClick={ () => onPlaceClick( place ) }
                >
                    <h6>{ place.text }</h6>
                    <p 
                        className="text-muted"
                        style={{ fontSize: '12px' }}
                    >
                        { place.place_name }
                    </p>
                    
                    <button
                        onClick={ () => getRoute( place ) }
                        className="btn btn-outline-primary btn-sm"
                    >Directions</button>
                </li>
            ))            
        }

    </ul>
  )
}