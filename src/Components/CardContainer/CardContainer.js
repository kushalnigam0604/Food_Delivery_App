import React, {useEffect} from 'react'
import { RESTAURANT_LIST_URL } from '../../constants'
import Card from '../Card/Card'

const CardContainer = () => {
    async function getAllRestaurantData(){
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards);
    } 

    useEffect(() => {
        getAllRestaurantData();
    },[])
  return (
    <div>
      <Card/>
    </div>
  )
}

export default CardContainer
