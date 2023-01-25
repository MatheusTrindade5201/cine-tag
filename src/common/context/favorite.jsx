import { createContext, useContext, useEffect, useState } from "react";

export const FavoriteContext = createContext()

FavoriteContext.displayName = 'Favorites'

export const FavoriteProvider = ({children}) => {

    const [ favorites, setFavorites ] = useState([])

    return (
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavoriteContext = () => {

    const { favorites, setFavorites } = useContext(FavoriteContext);

    const favorite = (NewMovie) => {
        const movie = favorites?.some(favoriteMovie => favoriteMovie.id === NewMovie.id)
            if(!movie){
                setFavorites([...favorites, NewMovie])
                return
            }
            
                setFavorites(favorites.filter(favorite => favorite.id !== NewMovie.id))
            

    }

    return {
        favorites,
        setFavorites,
        favorite
    }

}