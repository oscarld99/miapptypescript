import React from "react";
import ThumbsUpIcon from "assets/thumbs-up.svg";

interface IThumbsUp {
  className?: string;
}
const ThumbsUp = (props: IThumbsUp) => (
  <img {...props} height="20" width="20" src={ThumbsUpIcon} alt={"Like up"} />
);

export default ThumbsUp;
