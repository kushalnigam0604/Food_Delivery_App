import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      RESTAURANT_MENU_URL + resId + "&submitAction=ENTER"
    );
    const json = await data.json();
    setRestauraunt(json.data);
  }
  return restaurant;
};

export default useRestaurantMenu;