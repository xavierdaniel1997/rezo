import { useEffect, useState } from "react";
import { MENU_API } from "../utils/config";

const useRestaurant = (resId) => {

    const [restaruant, setRestaurant] = useState(null)

    // get restaruant data


    useEffect(() => {
        getRestaurantInfoData()
    }, [])

    const getRestaurantInfoData = async () => {
        const data = await fetch (MENU_API + resId);
        const json = await data.json();
        setRestaurant(json?.data);
    };

    // return restarunt data
    return restaruant;
 
}
export default useRestaurant;