import React, {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'
import axios from "axios";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)
    useEffect(() => {
        setLoading(true)

        async function getCocktail() {
            try {
                const {data} = await axios.get(`${url}${id}`)
                const {drinks} = data;
                console.log(drinks)
                if (drinks) {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strInstructions,
                        strCategory,
                        strAlcoholic,
                        strGlass
                    } = drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                    ]
                    const newCocktail =  {
                        id: idDrink,
                        name: strDrink,
                        category: strCategory,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        instructions: strInstructions,
                        ingredients
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getCocktail()
    }, [id]);
   if(loading){
       return <Loading/>
   }
   if(!cocktail){
       return <h2 className="section-title">no cocktail to display  </h2>
   }
   const {name, image, category, info, glass, instructions, ingredients} = cocktail
    return (
        <section className="section  cocktail-section">
            <Link to="/">back home</Link>
            <h2 className="section-title">{name} </h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name: </span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category: </span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info: </span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass: </span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions: </span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients: </span>
                        {ingredients.map((item, index)=>{
                            return item? <span key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail
