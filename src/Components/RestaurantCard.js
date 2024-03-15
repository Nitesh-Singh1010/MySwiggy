import { CDN_LINK } from "../utils/Constants";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="res-card">
        <img
          src={
            CDN_LINK +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
    
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        
      </div>
    );
  };

  export default RestaurantCard