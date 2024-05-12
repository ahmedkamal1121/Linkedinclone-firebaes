import React from "react";
import conn from "../../public/images/widget-icon.svg";
import bookmark from "../../public/images/item-icon.svg";
import plus from "../../public/images/plus-icon.svg";

export default function Leftside() {
  return (
    <div className="left-side">
      <div className="per">
        <div className="background"></div>
        <div className="photo"></div>
        <div className="pt-5 border-bottom">
          <p>Welcome</p>
          <p>Add a photo</p>
        </div>

        <div className="d-flex justify-content-between border-bottom p-2">
          <div>
            <small>Connections</small>
            <h6>Grow oure network</h6>
          </div>
          <img src={conn} width={"20px"} height={"20px"} />
        </div>

        <div>
          <img src={bookmark} width={"20px"} height={"15px"} />
          <small>My item</small>
        </div>
      </div>
      <div className="per mt-2 p-3 ">
        <div className="d-flex justify-content-between border-bottom">
          <div>
            <p>Groups</p>
            <p>Events</p>
            <p>Followes Hashtags</p>
          </div>
          <img src={plus} width={"20px"} height={"20px"} />
        </div>

        <div>
          <small>Discoverd more</small>
        </div>
      </div>
    </div>
  );
}
