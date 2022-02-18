import React from "react";
import ShowList from "components/hocs";
import { DataPerson } from "interfaces/interfaces";
import style from "./Card.module.css";
import { Button, ButtonLike } from "..";
import { resolvePercent, resolveProfilePicture, timesAgo } from "helpers/utils";

const Card: React.FC<{ data: DataPerson, makeVote: any }> = ({
  data,
  makeVote
}: {
  data: DataPerson;
  makeVote: any
}) => {
  return (
    <div className={style.card}>
      <img
        src={resolveProfilePicture(data.picture)}
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
            <span>{timesAgo(data.lastUpdated)}</span>
            <div className={style.card__buttons}>
              <ButtonLike like onClick={() => makeVote(data.name, 'positive')} />
              <ButtonLike onClick={() => makeVote(data.name, 'negative')} />
              <Button >Vote Now</Button>
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
