import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPLay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago </p>
        <div>
          <span>
            <img src={like} />
            125
          </span>
          <span>
            <img src={dislike} />2
          </span>
          <span>
            <img src={share} />
            Share
          </span>

          <span>
            <img src={save} />
            Save
          </span>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} />
          <div>
            <p>Jesus Vazquez</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
