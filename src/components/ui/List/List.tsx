import React from "react";
import ShowList from "components/hocs";
import { DataPerson } from "interfaces/interfaces";

const List = ({ data }: { data: DataPerson }) => {
  return <div>{data.name}</div>;
};

export default ShowList(List);
