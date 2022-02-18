import React from "react";
import ThumbsDownIcon from "assets/thumbs-down.svg";

interface IThumbsDown {
  className?: string;
}
const ThumbsDown = (props: IThumbsDown) => (
  <img
    className={props.className}
    height="20"
    width="20"
    {...props}
    src={ThumbsDownIcon}
    alt={"Like down"}
  />
);

export default ThumbsDown;
