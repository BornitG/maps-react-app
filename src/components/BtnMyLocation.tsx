import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"


export const BtnMyLocation = () => {

    const { map, isMapReady} = useContext( MapContext )
    const { userLocation } = useContext( PlacesContext )

    const onClick = () => {
        
        if ( !isMapReady ) throw new Error("Map is not ready");
        if ( !userLocation ) throw new Error("User location not available");

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })   

    }

  return (
    <button 
        className="btn btn-light btn-lg btnLocation"
        disabled={ !isMapReady }
        onClick={ onClick }
    >
        <i className="fa-solid fa-location-crosshairs fa-xl" style={{color: '#1AD0FE'}}></i>
    </button>
  )
}

26208254