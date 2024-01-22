import { useState, useEffect } from "react";
import axios from "axios";

const MealAPI = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                // console.log(res.data);
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
        }, []);

    const itemsList = items.map(({strMeal, strMealThumb, idMeal})=> {
        return(
            <section key={idMeal}  className="grid grid-cols-2 gap-4 border-2 border-slate-800 m-5 p-5 text-slate-800">
                <img src={strMealThumb} className="object-cover max-h-40"/>
                <section className=" w-1/2">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

    return <>
        <h1 className="m-5 scroll-m-20 text-lg font-bold tracking-tight lg:text-3xl">Meal API</h1>
        <div className="border-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-4xl mx-auto border-slate-800 m-5 p-5 text-slate-800 justify-center">
            {itemsList}
        </div>
    </>
}

export default MealAPI;