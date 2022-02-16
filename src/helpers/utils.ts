import { Votes } from "interfaces/interfaces";

export const resolvePercent = (votes: Votes, value: number) =>
  ((value / (votes.positive + votes.negative)) * 100).toFixed(1);
