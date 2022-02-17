import React, { MouseEventHandler } from 'react'
import style from "./Button.module.css";

interface IButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode
}

const Button = ({ onClick, children }: IButton) => {
    return (
        <button className={style.button}>{children}</button>

    )
}

export default Button