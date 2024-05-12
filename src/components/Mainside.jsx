import React, { useState } from "react";
import userSvg from "../../public/images/user.svg";
import conn from "../../public/images/event-icon.svg";
import photo from "/images/photo-icon.svg";
import video from "../../public/images/video-icon.svg";
import art from "../../public/images/article-icon.svg";
import post from "../../public/images/m10.jpg";
import { connect } from "react-redux";
import like from "../../public/images/like-icon.svg";
import Com from "../../public/images/comment-icon.svg";
import Shere from "../../public/images/share-icon.svg";
import Send from "../../public/images/send-icon.svg";
import Postmoadel from "./Postmoadel";

function Mainside(props) {
  const [showMoadel, setshowMoadel] = useState(false);
  const handelpost = () => {
    setshowMoadel(!showMoadel);
  };

  return (
    <div className="main-side">
      {/* MAKE POST */}
      <div className="per">
        <div className="d-flex p-3">
          {props.user && props.user.photoURL ? (
            <img
              src={props.user.photoURL}
              width="50px"
              height="40px"
              className="rounded"
              alt="img"
            />
          ) : (
            <img src={userSvg} width="50px" height="40px" className="rounded" />
          )}

          <button
            className="w-100 rounded px-3 text-start border-0"
            onClick={handelpost}
            disabled={props.loading ? true : false}
          >
            Post
          </button>
        </div>
        <div className="d-flex px-3 py-2 w-100 justify-content-around ">
          <div>
            <img src={photo} height="25px" width="25px" />
            <span>Photo</span>
          </div>
          <div>
            <img src={video} height="25px" width="25px" />
            <span>Video</span>
          </div>
          <div>
            <img src={conn} height="25px" width="25px" />
            <span>event</span>
          </div>
          <div>
            <img src={art} height="25px" width="25px" />
            <span>Write artical</span>
          </div>
        </div>
      </div>
      {/* MAKE POST */}

      {/* Postes */}
      <div className="per mt-2 px-3 py-2 ">
        {/* Header-Post */}
        <div className="d-flex ">
          <img src={userSvg} width="50px" height="40px" className="rounded" />
          <div>
            <p>Ahmed kamal</p>
            <small>ahmed@ahmed.com</small>
            <small>2/2/2033</small>
          </div>
        </div>
        {/* Header-Post */}

        {/* POST-INFO */}
        <div>
          <p>Hi iam Caming world!</p>
        </div>
        <img src={post} className="w-100" />
        <div className="d-flex  w-100  mt-3 border-top ">
          <div className="action">
            <img src={like} height="25px" width="25px" />
            <span>Like</span>
          </div>
          <div className="action">
            <img src={Com} height="25px" width="25px" />
            <span>Comment</span>
          </div>
          <div className="action">
            <img src={Shere} height="25px" width="25px" />
            <span>Shere</span>
          </div>
          <div className="action">
            <img src={Send} height="25px" width="25px" />
            <span>Send</span>
          </div>
        </div>
        {/* POST-INFO */}
      </div>
      {/* Postes */}

      <Postmoadel showMoadel={showMoadel} handelpost={handelpost} />
    </div>
  );
}

const mapStatToprops = (state) => {
  return {
    loading: state.articalState.loading,
    user: state.userState.user,
  };
};

export default connect(mapStatToprops)(Mainside);
