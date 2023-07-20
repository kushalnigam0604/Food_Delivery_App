import React from "react";
import "./RestaurantMenu.css";
import { RESTAURANT_MENU_DATA } from "../../restaurantMenuData";
import { MdLocationPin } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";
import main_logo from "../../assets/main_logo.jpg";

const RestaurantMenu = () => {
  return (
    <div className="restaurantMenu">
      <div className="firstItemDiv">
        <img src={main_logo} alt="" />
        <div className="firstDivItemContent">
          <h1>Welcome to Food Delivery App</h1>
          <span>
            <MdLocationPin className="locationValueIcon" />
            INDIA
          </span>
          <div className="subFirstDivItemContent">
            <span className="ratingValueSpan">
              <BiSolidStar className="starIcon" />
              4.5
            </span>
            |<span className="costValueSpan">400 per person</span>|
            <span>
              <span className="deliciousValueSpan">Delicious Food </span>
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
