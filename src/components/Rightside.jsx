import React from "react";
import right from "../../public/images/right-icon.svg";
import banner from "../../public/images/banner-image.jpg";
export default function Rightside() {
  return (
    <div className="right-side">
      <div className="per p-2">
        <b>Add to your feed</b>
        <div className="d-flex align-items-center gap-3 mt-2">
          <div className="hash">#</div>
          <div>
            <p>#Linkedin</p>
            <button className="follow">Follow</button>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 mt-2 pb-1">
          <div className="hash">#</div>
          <div>
            <p>#Videos</p>
            <button className="follow">Follow</button>
          </div>
        </div>
        <a href="#">View all recommendations</a>
        <img src={right} />
      </div>
      <div className="per p-2 mt-2">
        <img src={banner} width="100%" />
      </div>
    </div>
  );
}
