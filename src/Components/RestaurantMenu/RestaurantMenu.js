import React from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/CustomHooks/useRestaurantMenu.js";
import { IMG_CDN_URL } from "../../constants";
import { MdLocationPin } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";

const RestaurantMenu = () => {
  const params = useParams();
  const restaurantMenu = useRestaurantMenu(params.id);
  console.log(restaurantMenu);

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
      {restaurantMenu &&
        restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (value) => (
            <div key={value?.card?.info?.id} className="itemList">
              <img
                src={
                  value?.card?.info?.imageId
                    ? IMG_CDN_URL + value?.card?.info?.imageId
                    : IMG_CDN_URL +
                      restaurantMenu?.cards[0]?.card?.card?.info
                        ?.cloudinaryImageId
                }
                alt=""
              />
              <div className="listCardContentDiv">
                <h2>{value?.card?.info?.name}</h2>
                <span>{value?.card?.info?.price} Rs/-</span>
                <button className="addToCartButton">Add To Cart</button>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default RestaurantMenu;
