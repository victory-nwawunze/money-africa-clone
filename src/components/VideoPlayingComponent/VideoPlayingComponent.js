/** @format */

import React from "react";
import HomeIconImage from "../../images/HomeIconImage.png";
import CheveronRightIcon from "../../images/ChevronRightImageIcon.png";
import SmallPlayIconImage from "../../images/SmallPlayIconImage.png";
import SmallLineImage from "../../images/SmallLine.png";
import NextPlayIcon from "../../images/NextPlayIcon.png";
import SmallShareIcon from "../../images/SmallShareIconImage.png";
import SmallThreeDotedLine from "../../images/SmallThreeDotedIcon.png";
import BlackMenuImage from "../../images/BlackMenuImage.png";
const VideoPlayingComponent = () => {
  return (
    <React.Fragment>
      <div className="BreadCrumbStyles p-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex">
                <div>
                  <div className="HomeIconImageStyle mx-2">
                    <img src={HomeIconImage} />
                  </div>
                </div>
                <div>
                  <div className="HomeIconImageStyle mx-2">
                    <img src={CheveronRightIcon} />
                  </div>
                </div>
                <div>
                  <p className="VideosTextFont mx-2 mt-1">Videos</p>
                </div>
                <div>
                  <p className="VideosTextFont mx-2 mt-1">
                    The Best Crypto Wallets for Binance Smart Chain (BSC)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <div className="mx-2 mt-1">
                  <img src={SmallPlayIconImage} />
                </div>
                <div className="mx-1 PreviousTextFontStyle mt-1">
                  <p>Previous</p>
                </div>
                <div className="mx-2">
                  <img src={SmallLineImage} />
                </div>
                <div className="mx-1 NextTextFontStyle mt-1">
                  <p>Next</p>
                </div>
                <div className="mx-1">
                  <img src={NextPlayIcon} />
                </div>
                <div className="mx-2">
                  <img src={SmallShareIcon} />
                </div>
                <div className="mx-1 ShareTextFontStyle mt-1">
                  <p>Share</p>
                </div>
                <div className="mx-4">
                  <img src={SmallThreeDotedLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BackgroundBannerVideoImage">
        <div className="container-fluid">
          <div className="BlackMenuImage">
            <img src={BlackMenuImage} />
          </div>
        </div>
        <div className="PositionPlayVideosFunctionalities MarginTopVideoPlayersFunctionality">
          <div className="d-flex justify-content-between bC p-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoPlayingComponent;
