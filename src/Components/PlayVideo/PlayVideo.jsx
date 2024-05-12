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
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Watch my channel for more amazing videos</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              James Rider <span>1 day ago</span>{" "}
            </h3>
            <p>
              Wow, this video totally changed my life! I was skeptical at first,
              but after watching it, I feel like I can conquer anything. Thanks
              for sharing.
            </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              James Rider <span>1 day ago</span>{" "}
            </h3>
            <p>
              Wow, this video totally changed my life! I was skeptical at first,
              but after watching it, I feel like I can conquer anything. Thanks
              for sharing.
            </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              James Rider <span>1 day ago</span>{" "}
            </h3>
            <p>
              Wow, this video totally changed my life! I was skeptical at first,
              but after watching it, I feel like I can conquer anything. Thanks
              for sharing.
            </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              James Rider <span>1 day ago</span>{" "}
            </h3>
            <p>
              Wow, this video totally changed my life! I was skeptical at first,
              but after watching it, I feel like I can conquer anything. Thanks
              for sharing.
            </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              James Rider <span>1 day ago</span>{" "}
            </h3>
            <p>
              Wow, this video totally changed my life! I was skeptical at first,
              but after watching it, I feel like I can conquer anything. Thanks
              for sharing.
            </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
