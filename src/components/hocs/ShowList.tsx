import React from "react";
import { data } from "api";
import { DataPerson } from "interfaces/interfaces";

const ShowList = (Component: React.FC<{ data: DataPerson }>) => (props: any) =>
  (
    <>
      {data.data.map((item, key) => (
        <Component data={item} key={key} {...props} />
      ))}
    </>
  );

export default ShowList;
