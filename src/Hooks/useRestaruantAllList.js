import { useState, useEffect } from "react";
import { RES_DATA_API } from "../utils/config";


const useRestaruantAllList = () => {

    const [allRestaruant, setAllRestaruant] = useState([])

    useEffect(() => {
        getAllRestaruantList()
    }, [])
    
    const getAllRestaruantList = async () => {
        const data = await fetch(RES_DATA_API);
        const json = await data.json()
        setAllRestaruant(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    return allRestaruant;

}
export default useRestaruantAllList;