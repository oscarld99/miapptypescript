import React from "react";
import ShowList from "components/hocs";
import { DataPerson } from "interfaces/interfaces";
import style from "./Card.module.css";
import { ButtonLike } from "..";
import { resolvePercent } from "helpers/utils";
const ProfileImage = "assets/img/profile/";

const Card: React.FC<{ data: DataPerson }> = ({
  data,
}: {
  data: DataPerson;
}) => {
  return (
    <div className={style.card}>
      <img
        src={`${ProfileImage}${data.picture}`}
        alt={data.name}
        className={style.card__image}
      />
      <main className={style.card__container}>
        <section className={style.card__body}>
          <div className={style.card__name}>
            <ButtonLike
              like={data.votes.positive > data.votes.negative}
              disabled
            />
            <p>{data.name}</p>
          </div>
          <div className={style.card__description}>
            <p>{data.description}</p>
            <span>1 month ago in Emnaiunfoas</span>
            <div className={style.buttons}>
              <ButtonLike like />
              <ButtonLike />
              <button className={style.button}>Vote Now</button>
            </div>
          </div>
        </section>
        <footer className={style.card__footer}>
          <div
            className={style["card__footer--up"]}
            style={{
              width: `${resolvePercent(data.votes, data.votes.positive)}%`,
            }}
          >
            {`${resolvePercent(data.votes, data.votes.positive)} %`}
          </div>
          <div
            className={style["card__footer--down"]}
            style={{
              width: `${resolvePercent(data.votes, data.votes.negative)}%`,
            }}
          >
            {`${resolvePercent(data.votes, data.votes.negative)} %`}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ShowList(Card);
