import React from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/CustomHooks/useRestaurantMenu.js";
import { IMG_CDN_URL } from "../../constants";
import { MdLocationPin } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import { RESTAURANT_MENU_DATA } from "../../restaurantMenuData";

const RestaurantMenu = () => {
  const params = useParams();
  const restaurantMenu = useRestaurantMenu(params.id);
  return (
    <div className="restaurantMenu">
      <div className="firstItemDiv">
        <img
          src={
            IMG_CDN_URL +
            restaurantMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
        />
        <div className="firstDivItemContent">
          <h1>{restaurantMenu?.cards[0]?.card?.card?.info?.name}</h1>
          <span>
            <MdLocationPin className="locationValueIcon" />
            {restaurantMenu?.cards[0]?.card?.card?.info?.areaName}
          </span>
          <div className="subFirstDivItemContent">
            <span className="ratingValueSpan">
              <BiSolidStar className="starIcon" />
              {restaurantMenu?.cards[0]?.card?.card?.info?.avgRating}
            </span>
            |
            <span className="costValueSpan">
              {restaurantMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}
            </span>
            |
            <span>
              {restaurantMenu?.cards[0]?.card?.card?.info?.veg ? (
                <span className="vegValueSpan">VEG</span>
              ) : (
                <span className="nonVegValueSpan">NON-VEG</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="secondHeadingDiv">-Recommended Items-</div>
      {RESTAURANT_MENU_DATA &&
        RESTAURANT_MENU_DATA?.map((value) => (
          <div key={value?.id} className="itemList">
            <img src={Object.values(value.image)} alt="" />
            <div className="listCardContentDiv">
              <h2>{value?.itemName}</h2>
              <span>{value?.price} Rs/-</span>
              <button className="addToCartButton">Add To Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
