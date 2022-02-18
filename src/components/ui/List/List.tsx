import React from "react";
import ShowList from "components/hocs";
import { DataPerson, IHoc } from "interfaces/interfaces";
import style from "./List.module.css";
import {
  resolvePercent,
  resolveProfilePicture,
  resolveProfilePictureWebp,
  timesAgo,
} from "helpers/utils";
import { Button, ButtonLike } from "..";
import { ThumbsDown, ThumbsUp } from "components/icons";

const List = ({ data = {} as DataPerson }: IHoc) => {
  const totalVotes = data.positive + data.negative;
  return (
    <div className={style.list}>
      {/* button like */}
      <ButtonLike
        disabled
        like={data.positive > data.negative}
        className={style.like}
      />
      {/* image */}
      <div className={style.list__image}>
        <picture>
          <source
            srcSet={resolveProfilePictureWebp(data.picture)}
            type="image/webp"
          />
          <img
            src={resolveProfilePicture(data.picture)}
            alt={data.name}
            loading="lazy"
          />
        </picture>
      </div>

      <main className={style.list__container}>
        <section className={style.list__description}>
          <div className={style.list__name}>
            <p>{data.name}</p>
            <span>{`${data.description}`}</span>
          </div>
          <div className={style.list__buttons}>
            <span>{`${timesAgo(data.lastUpdated)} in ${data.category}`}</span>
            <div className={style["list__container-btn"]}>
              <ButtonLike like />
              <ButtonLike />
              <Button>Vote Now</Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={style.list__footer}>
          <div
            className={style["list__footer--up"]}
            style={{
              width: `${resolvePercent(totalVotes, data.positive)}%`,
            }}
          >
            <ThumbsUp className={style["list__footer-like"]} />
            {`${resolvePercent(totalVotes, data.positive)} %`}
          </div>
          <div
            className={style["list__footer--down"]}
            style={{
              width: `${resolvePercent(totalVotes, data.negative)}%`,
            }}
          >
            {`${resolvePercent(totalVotes, data.negative)} %`}
            <ThumbsDown className={style["list__footer-like"]} />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ShowList(List);
