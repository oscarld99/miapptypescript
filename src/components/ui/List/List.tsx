import React from "react";
import ShowList from "components/hocs";
import { DataPerson } from "interfaces/interfaces";
import style from "./List.module.css";
import { resolvePercent, resolveProfilePicture } from "helpers/utils";
import { ButtonLike } from "..";

const List = ({ data }: { data: DataPerson }) => {
  return (
    <div className={style.list}>
      {/* button like */}
      <ButtonLike
        disabled
        like={data.votes.positive > data.votes.negative}
        className={style.like}
      />
      {/* image */}
      <div className={style.list__image}>
        <img src={resolveProfilePicture(data.picture)} alt={data.name} />
      </div>

      <main className={style.list__container}>
        {/*} <section className={style.card__body}>
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
              <ButtonLike like />
              <ButtonLike />
              <Button >Vote Now</Button>
            </div>
          </div>
  </section>*/}
        {/* FOOTER */}

        {data.name}
        <footer className={style.list__footer}>
          <div
            className={style["list__footer--up"]}
            style={{
              width: `${resolvePercent(data.votes, data.votes.positive)}%`,
            }}
          >
            {`${resolvePercent(data.votes, data.votes.positive)} %`}
          </div>
          <div
            className={style["list__footer--down"]}
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

export default ShowList(List);
