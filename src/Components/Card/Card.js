import React from "react";
import { IMG_CDN_URL } from "../../constants";
import "./Card.css";
import { MdLocationPin } from "react-icons/md";
import { BiSolidStar } from "react-icons/bi";

const Card = ({
  name,
  slugs,
  area,
  veg,
  cloudinaryImageId,
  avgRating,
  aggregatedDiscountInfoV3,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        {!aggregatedDiscountInfoV3 ? (
          <span>NO OFFER</span>
        ) : (
          <span>
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </span>
        )}
      </div>
      <div className="content">
        <div className="firstContentDiv">
          <h3>{name}</h3>
          <span className="citySpan">
            <MdLocationPin className="locationIcon" />
            <span>
              {area}, {slugs.city}
            </span>
          </span>
        </div>
        <div className="secondContentDiv">
          {avgRating > 4 ? (
            <span className="ratingSpanRed">
              <BiSolidStar className="starIcon" />
              <span>{avgRating}</span>
            </span>
          ) : (
            <span className="ratingSpan">
              <BiSolidStar className="starIcon" />
              <span>{avgRating}</span>
            </span>
          )}
          {veg ? <span className="vegSpan">Veg</span> : <span className="nonvegSpan">Non-veg</span>}
        </div>
        <div className="thirdContentDiv">
          <span>{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
