/** @format */

import React from "react";
import MoneyAfricaLogo from "../../images/Group 8162.png";
import MoneyAfricaSubscribePagePrice from "../../images/Group 8164.png";
import DescriptionAmount from "../../images/IllustrationAmount.png";
import MarkedCircle from "../../images/MarkedCircle.png";
import TimesIcon from "../../images/Times.png";
import ChartImages from "../../images/ChartImage.png";
import PieChartImage from "../../images/PieChart.png";
const SubscribeNowOrLater = () => {
  return (
    <React.Fragment>
      <div className="SubscriptionSelectAPlan p-3">
        <div className="ChooseAPreferredPlayAndATimesIcon  p-3">
          <p className="text-font text-center h2 ChoosePreferredTextFontSize fw-bold">
            Choose your preferred plan
          </p>
          <p className="text-font text-center mt-3 ChoosePreferredPlanDescriptionTextFontSizeAndColor">
            Choose a plan to procees and have access to all the
            <br /> video and article courses on our platform.
          </p>
          <div className="PositionTimesIcon">
            <img src={TimesIcon} className="img-fluid hover" />
          </div>
        </div>
        <div className="SelectASubcriptionPlanCards mt-4 p-3">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div>
                <div className="SelectCardOneBackgroundColor p-2 mt-5">
                  <img src={MoneyAfricaSubscribePagePrice} className="px-2" />
                  <div className="container">
                    <div className="d-flex">
                      <div className="mt-3">
                        <img src={MarkedCircle} />
                      </div>
                      <div className="mt-3 mx-2">
                        <p className="text-font">Autorenews every 3 months.</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-4">
                        <img src={MarkedCircle} />
                      </div>
                      <div className="mt-3 mx-2">
                        <p className="text-font">
                          Access to everything - video &<br /> article courses.
                        </p>
                      </div>
                    </div>
                    <input
                      type="button"
                      value="Subscribe to this plan"
                      className="mx-4 my-2 py-2 px-4 SubscribeButtonTextSizeAndRadius text-font fw-bold"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="SelectCardSPlanTwo mx-3">
                  <div className="RecomemendTextBcakgroundColorAndFontContainer ReconmendedCardBackgroundColor ">
                    <p className="text-center text-font ReconmendedCardBackgroundColorText">
                      Recommended
                    </p>
                    <div className="ReconmendedCardBackgroundColorChild px-3 pt-1">
                      <img src={ChartImages} />
                      <div className="container">
                        <div className="d-flex">
                          <div className="mt-3">
                            <img src={MarkedCircle} />
                          </div>
                          <div className="mt-3 mx-2">
                            <p className="text-font  text-white">
                              Autorenews every 6 months.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="mt-4">
                            <img src={MarkedCircle} />
                          </div>
                          <div className="mt-3 mx-2">
                            <p className="text-font  text-white">
                              Access to everything - video &<br /> article
                              courses.
                            </p>
                          </div>
                        </div>
                        <input
                          type="button"
                          value="Subscribe to this plan"
                          className="mx-4 py-2 my-3  px-4 ReconmendedCardBackgroundColorButton text-font fw-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="SelectCardOneBackgroundColor p-2 mt-5">
                  <img src={PieChartImage} className="px-2" />
                  <div className="container">
                    <div className="d-flex">
                      <div className="mt-3">
                        <img src={MarkedCircle} />
                      </div>
                      <div className="mt-3 mx-2">
                        <p className="text-font">Autorenews every 3 months.</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-4">
                        <img src={MarkedCircle} />
                      </div>
                      <div className="mt-3 mx-2">
                        <p className="text-font">
                          Access to everything - video &<br /> article courses.
                        </p>
                      </div>
                    </div>
                    <input
                      type="button"
                      value="Subscribe to this plan"
                      className="mx-4 my-2 py-2 px-4 SubscribeButtonTextSizeAndRadius text-font fw-bold"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-font mt-3 IWillDoThisLaterFontColor hover">
          I’ll do this later
        </p>
      </div>
    </React.Fragment>
  );
};

export default SubscribeNowOrLater;
