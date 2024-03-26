import React, {useState, useContext, useEffect} from 'react'
import {useCallback} from 'react'
import axios from "axios";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);


    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const {data} = await axios.get(`${url}${searchTerm}`)
            const {drinks} = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass} = item
                    return {
                        id: idDrink,
                        name: strDrink,
                        category: strCategory,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return <AppContext.Provider value={{loading, searchTerm, setSearchTerm, cocktails}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
