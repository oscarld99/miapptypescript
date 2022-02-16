import React, { MouseEventHandler } from "react";
import style from "./ButtonLike.module.css";
import ThumbsUp from "assets/img/thumbs-up.svg";
import ThumbsDown from "assets/img/thumbs-down.svg";

interface IButtonLike {
  like?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const ButtonLike = ({
  like = false,
  onClick,
  disabled = false,
}: IButtonLike) => {
  return (
    <button className={style.button__like} onClick={onClick}>
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
