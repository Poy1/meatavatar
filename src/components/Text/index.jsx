import React from "react";

const sizeClasses = {
  txtInterSemiBold24WhiteA700: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold40Black900: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtAlikeAngularRegular40: "font-alikeangular font-normal",
  txtAlikeAngularRegular21: "font-alikeangular font-normal",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium40: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold40Gray600: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
