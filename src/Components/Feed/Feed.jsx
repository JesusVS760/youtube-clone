import React from "react";
import "./Feed.css";
import tumbnail1 from "../../assets/thumbnail1.png";
import tumbnail2 from "../../assets/thumbnail2.png";
import tumbnail3 from "../../assets/thumbnail3.png";
import tumbnail4 from "../../assets/thumbnail4.png";
import tumbnail5 from "../../assets/thumbnail5.png";
import tumbnail6 from "../../assets/thumbnail6.png";
import tumbnail7 from "../../assets/thumbnail7.png";
import tumbnail8 from "../../assets/thumbnail8.png";

const Feed = () => {
  return (
    <div className="card">
      <img src={tumbnail1} alt="" />
      <h2>Best channel to learn coding that help you be a web delveloper</h2>
      <h3>Greatstack</h3>
      <p>15k views &bull; 2 days ago</p>
    </div>
  );
};

export default Feed;
