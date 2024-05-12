import "./moadel.css";
import x from "../../public/images/close-icon.svg";
import userSvg from "../../public/images/user.svg";
import { connect } from "react-redux";
import imgq from "../../public/images/banner-image.jpg";
import album from "../../public/images/photo-icon.svg";
import videosvg from "../../public/images/video-icon.svg";
import comm from "../../public/images/share-comment.svg";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Timestamp } from "firebase/firestore";

function Postmoadel(props) {
  const [edittext, setedittext] = useState("");
  const [assArea, setArea] = useState("");
  const [shearimg, setshearimg] = useState("");
  const [videosh, setVideosh] = useState("");

  const handelreset = (e) => {
    setedittext("");
    setArea("");
    setshearimg("");
    setVideosh("");
    props.handelpost(e);
  };

  const handelChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert("noo");
    } else {
      setshearimg(image);
    }
  };

  const handelPostartical = (e) => {
    e.preventDefault();
    if (e.target !== e.target.currentTarget) {
      return;
    }
    const payload = {
      timestamp: Timestamp.now(),
      img: shearimg,
      user: props.user,
      des: edittext,
      vidio: videosh,
    };
    props.postArtical(payload);
    handelreset(e);
  };
  return (
    <>
      {props.showMoadel && (
        <div className=" moadel-bg">
          <div className="per moadel-body p-3">
            <div className="moadel-h d-flex justify-content-between border-bottom">
              <h4>Creat Post </h4>
              <img
                src={x}
                onClick={(e) => handelreset(e)}
                className="close-btn"
              />
            </div>
            <div className="moadel-m my-2">
              <div className="d-flex gap-2">
                {props.user && props.user.photoURL ? (
                  <img
                    src={props.user.photoURL}
                    width="50px"
                    height="40px"
                    className="rounded"
                    alt="img"
                  />
                ) : (
                  <img
                    src={userSvg}
                    width="50px"
                    height="40px"
                    className="rounded"
                  />
                )}
                <p>{props.user && props.user.displayName}</p>
              </div>
              <textarea
                autoFocus={true}
                placeholder="talk about about"
                className="text-a m-2 p-2"
                onChange={(e) => setedittext(e.target.value)}
              />
            </div>
            <div className="moadel-airea m-2">
              {assArea === "photo" ? (
                <div className="photo-area">
                  <input
                    type="file"
                    id="filear"
                    onChange={handelChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="filear" className="border w-100 p-2">
                    Enter photo
                  </label>
                  {shearimg && (
                    <img
                      src={URL.createObjectURL(shearimg)}
                      alt="img"
                      width="100%"
                      height="200px"
                    />
                  )}
                </div>
              ) : (
                assArea === "video" && (
                  <div className="viedo-area">
                    <input
                      type="text"
                      className="w-100 p-2"
                      placeholder="Enter video link .. "
                      onChange={(e) => setVideosh(e.target.value)}
                    />
                    {videosh && (
                      <ReactPlayer width="100%" height="200px" url={videosh} />
                    )}
                  </div>
                )
              )}
            </div>
            <div className="moadel-ations p-2">
              <div className="d-flex gap-1">
                <div className="album" onClick={() => setArea("photo")}>
                  <img src={album} />
                </div>
                <div className="video" onClick={() => setArea("video")}>
                  <img src={videosvg} />
                </div>
                <div className="comment">
                  <img src={comm} />
                  Anyone
                </div>
                <Button
                  style={{ backgroundColor: edittext ? "" : "gray" }}
                  disabled={edittext ? false : true}
                  onClick={(e) => handelPostartical(e)}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStatToprops = (state) => {
  return {
    loading: state.articalState.loading,
    user: state.userState.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    postArtical: (payload) => dispatch(postArticalAPI),
  };
};

export default connect(mapStatToprops, mapDispatchToprops)(Postmoadel);
