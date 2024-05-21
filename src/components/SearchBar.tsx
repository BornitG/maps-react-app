import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";


export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext( PlacesContext );

    const debounceRef = useRef<number>();

    const onQueryChanged = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        if ( debounceRef.current ) 
            clearTimeout( debounceRef.current );

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm( target.value );
        }, 350 );
    }


  return (
    <div className="search-container">
        <input
            type="text"
            className="form-control"
            placeholder="Search place..."
            onChange={ onQueryChanged }
        />

        <SearchResults />
    </div>
  )
}