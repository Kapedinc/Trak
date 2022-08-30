import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder17: "rounded-radius175",
  RoundedBorder21: "rounded-radius215",
  RoundedBorder8: "rounded-radius8",
};
const variants = {
  icbOutlineBlack90019: "bg-blue_500 shadow-bs1",
  icbOutlineBlack900191_2: "bg-teal_A400 shadow-bs1",
  OutlineBlue500: "bg-gradient2  shadow-bs2 text-white_A700",
  OutlineBlack9003f: "bg-gradient  shadow-bs text-white_A700",
  OutlineBlack9003f1_2: "bg-gradient1  shadow-bs text-white_A700",
};
const sizes = {
  smIcn: "lg:p-[6px] p-[7px] 3xl:p-[9px]",
  sm: "p-[4px]",
  md: "lg:p-[11px] p-[13px] 2xl:p-[14px] 3xl:p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder17",
    "RoundedBorder21",
    "RoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineBlack90019",
    "icbOutlineBlack900191_2",
    "OutlineBlue500",
    "OutlineBlack9003f",
    "OutlineBlack9003f1_2",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder17",
  variant: "OutlineBlue500",
  size: "smIcn",
};

export { Button };
