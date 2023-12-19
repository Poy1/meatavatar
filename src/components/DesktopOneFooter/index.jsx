import React from "react";

import { Img, Text } from "components";

const DesktopOneFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[92px] justify-start mt-[3px] w-[98%] md:w-full">
          <Img
            className="h-[100px] md:h-auto md:ml-[0] ml-[7px] object-cover w-[15%]"
            src="images/img_meatavatarlogo.png"
            alt="meatavatarlogo_One"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="md:mt-0 mt-[58px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtInterRegular24"
            >
              {props?.copyrighttext}
            </Text>
            <div className="flex flex-col items-center justify-start mb-[5px]">
              <div className="flex flex-col gap-2.5 justify-start w-full">
                <Text
                  className="text-gray-900 text-xl"
                  size="txtInterRegular20"
                >
                  {props?.contactfollowtext}
                </Text>
                <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] w-[97%] md:w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_socialicons.svg"
                    alt="socialicons"
                  />
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_821061.png"
                    alt="821061"
                  />
                  <Img
                    className="h-12 w-12"
                    src="images/img_socialicons_gray_900.svg"
                    alt="socialicons_One"
                  />
                  <Img
                    className="h-12 w-12"
                    src="images/img_socialicons_gray_900_48x48.svg"
                    alt="socialicons_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneFooter.defaultProps = {
  copyrighttext: "Copyright © 2023 Meat Avatar | Powered by Meat Avatar",
  contactfollowtext: "Contact / Follow us",
};

export default DesktopOneFooter;
