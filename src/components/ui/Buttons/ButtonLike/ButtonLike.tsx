import React, { MouseEventHandler } from "react";
import style from "./ButtonLike.module.css";
import ThumbsUp from "assets/thumbs-up.svg";
import ThumbsDown from "assets/thumbs-down.svg";

interface IButtonLike {
  like?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const ButtonLike = ({
  like = false,
  onClick,
  disabled = false,
  className = "",
}: IButtonLike) => {
  return (
    <button className={`${style.button__like} ${className}`} onClick={onClick}>
      <img
        className={`${like ? style.like__up : style.like__down} ${
          disabled && style["button__like--disabled"]
        } `}
        src={like ? ThumbsUp : ThumbsDown}
        alt={like ? "Like Up" : "Like down"}
      />
    </button>
  );
};

export default ButtonLike;
