import { Votes } from "interfaces/interfaces";
import KanyePicture from 'assets/img/profile/kanye.png'
import CristinaPicture from 'assets/img/profile/cristina.png'
import ElonPicture from 'assets/img/profile/elon.png'
import GretaPicture from 'assets/img/profile/greta.png'
import MalalaPicture from 'assets/img/profile/malala.png'
import MarkPicture from 'assets/img/profile/mark.png'


export const resolvePercent = (votes: Votes, value: number) =>
  ((value / (votes.positive + votes.negative)) * 100).toFixed(1);

export const resolveProfilePicture = (picture: string) => {
  const profilesPictures = {
    'kanye.png': KanyePicture,
    'cristina.png': CristinaPicture,
    'elon.png': ElonPicture,
    'greta.png': GretaPicture,
    'malala.png': MalalaPicture,
    'mark.png': MarkPicture,
  } as any
  return profilesPictures[picture]
}


export const timesAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getDate() - new Date(date).getDate()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";

}