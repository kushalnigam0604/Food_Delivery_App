import React, { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "../../constants";
import Card from "../Card/Card";
import Shimmer from "../Shimmer/Shimmer";
import "./CardContainer.css";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  async function getAllRestaurantData() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }
  function filterSearchData(searchText, restaurantData) {
    const data = restaurantData.filter((val) =>
      val?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setSearchText("");
    return data;
  }
  function filterButtonData(booleanValue, restaurantData) {
    const data = restaurantData.filter(
      (val) => val?.data?.veg === booleanValue
    );
    return data;
  }

  useEffect(() => {
    getAllRestaurantData();
  }, []);

  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filterDiv">
        <div className="searchDiv">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurant"
          />
          <button
            onClick={() => {
              const data = filterSearchData(searchText, restaurantData);
              setFilteredRestaurantData(data);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="filterButtonDiv">
          <button
            className="vegButton"
            onClick={() => {
              const data = filterButtonData(true, restaurantData);
              setFilteredRestaurantData(data);
            }}
          >
            Veg
          </button>
          <button
            className="nonvegButton"
            onClick={() => {
              const data = filterButtonData(false, restaurantData);
              setFilteredRestaurantData(data);
            }}
          >
            Non-Veg
          </button>
        </div>
      </div>
      <div className="cardContainer">
        {filteredRestaurantData?.map((value) => (
            <Card key={value.data.id} {...value.data} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
