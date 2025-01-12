/** @format */

import React from "react";
import MoneyAfricaMySettingTextWithLines from "../MoneyAfricaMySettingTextWithLines/MoneyAfricaMySettingTextWithLines";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";
import SmallRedUserIcon from "../../images/SmallRedUserIcon.png";
import MobileSubscriptionIcon from "../../images/MobileSubscription.png";
import GiftBagIcon from "../../images/GiftBag.png";
import ChangePasswordIcon from "../../images/ChangePasswordIcon.png";
import LogoutIcon from "../../images/LogoutIcon.png";

import WalletImageWithBC from "../../images/WalletImageWithBC.png";
import SmallCheckIcon from "../../images/SmallCheckIcon.png";
import SmallPieChartImage from "../../images/SmallPieChartImage.png";
import MoneyAfricaGiftBagsComponent from "../MoneyAfricaGiftBagsComponent/MoneyAfricaGiftBagsComponent";
const MoneyAfricaSubscriptionSettingsPage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaSettingsNavbarComponent />
      <MoneyAfricaMySettingTextWithLines />
      <div className="creatingSubscriptionSetting mt-3 p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-3">
                <div>
                  <div className=" PositioningTheSubscriptionIcon ">
                    <div className="d-flex">
                      <div className="PaddingForRedUserIconAndText">
                        <img src={SmallRedUserIcon} />
                      </div>
                      <div className=" SubscriptionTextWithIcon  text-font mx-1">
                        <p>My Profile</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ProfileTextBgColor mt-2">
                      <div className="d-flex">
                        <div className="PaddingForMobileSubscriptionIconAndText">
                          <img src={MobileSubscriptionIcon} />
                        </div>
                        <div className="PaddingForProfileAndText text-font mx-2">
                          <p>Subscriptions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={GiftBagIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Refer a friend</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={ChangePasswordIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Change password</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={LogoutIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Log out</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MoneyAfricaGiftBagsComponent />
                </div>
              </div>
              <div className="col-md-3">
                <div className="ProfileTextDescription">
                  <p className="TextDescriptionForActivePlan">
                    You have an active <br /> plan
                  </p>
                  <p className="TextDiscriptionTexts">
                    You currently have an active plan on
                    <br /> our platform. You are free to switch your plan
                    anytime.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="TextDescriptionCards">
                  <div className="d-flex justify-content-between">
                    <div className="  NoMarginForLine">
                      <p className="ActivePlanText PaddingForActivePlan">
                        Active Plan
                      </p>
                    </div>
                    <div className=" px-3">
                      <p className="CancelTextStyle PaddingForActivePlan">
                        Cancel subscription
                      </p>
                    </div>
                  </div>
                  <hr className="LineToTheTop" />
                  <div className="TextDiscriptionWithImageForSettings p-2">
                    <div className="d-flex">
                      <div>
                        <div className="d-flex align-items-center">
                          <div className="px-3">
                            <img src={WalletImageWithBC} />
                          </div>
                          <div>
                            <p className="TextForCurrency">
                              ₦10,000
                              <p className="TextDate">/ 6 months</p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="MarginLeftForTextWithIcon">
                        <div className="d-flex">
                          <div>
                            <img src={SmallCheckIcon} />
                          </div>
                          <div>
                            <p className="AutorenewsStyles">
                              Autorenews every 6 months.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div>
                            <img src={SmallCheckIcon} />
                          </div>
                          <div>
                            <p className="AccessStyles">
                              Access to everything - video & article courses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="SwitchToStyle mb-4">Switch to:</p>

                <div className="grid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="TwoCards">
                        <div className="d-flex">
                          <div>
                            <img src={SmallPieChartImage} />
                          </div>
                          <div className="TextForNaira">
                            <p className="TextFontForText">
                              ₦20,000{" "}
                              <p className="SmallTextStyle">/ One year</p>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="PaddingTopForIconAndText">
                            <img src={SmallCheckIcon} />
                          </div>
                          <div className="SmallTextStyle PaddingTopForIconAndText">
                            <p>Autorenews every year.</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="PaddingTopForIconAndText">
                            <img src={SmallCheckIcon} />
                          </div>
                          <div className="SmallTextStyle PaddingTopForIconAndText">
                            <p>
                              Access to everything - video &<br /> article
                              courses.
                            </p>
                          </div>
                        </div>
                        <input
                          type="button"
                          value="Subscribe to this plan"
                          className="StyleSubscribeButton text-font"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="TwoCards">
                        <div className="d-flex">
                          <div>
                            <img src={SmallPieChartImage} />
                          </div>
                          <div className="TextForNaira">
                            <p className="TextFontForText">
                              ₦5,000{" "}
                              <p className="SmallTextStyle">/ 3 months</p>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="PaddingTopForIconAndText">
                            <img src={SmallCheckIcon} />
                          </div>
                          <div className="SmallTextStyle PaddingTopForIconAndText">
                            <p>Autorenews every year.</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="PaddingTopForIconAndText">
                            <img src={SmallCheckIcon} />
                          </div>
                          <div className="SmallTextStyle PaddingTopForIconAndText">
                            <p>
                              Access to everything - video &<br /> article
                              courses.
                            </p>
                          </div>
                        </div>
                        <input
                          type="button"
                          value="Subscribe to this plan"
                          className="StyleSubscribeButton text-font"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSubscriptionSettingsPage;
