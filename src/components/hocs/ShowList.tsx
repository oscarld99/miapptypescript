/* eslint-disable react-hooks/rules-of-hooks */
import React, { ComponentType, useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import { DataPerson, IHoc } from "interfaces/interfaces";
import { getVotes } from "helpers/votes";
import Spinner from "components/ui/Spinner";
import { data as store } from "api";

export function ShowList<T>(Component: ComponentType<IHoc>) {
  return (hocProps: T) => {
    const [data, setData] = useState<DataPerson[]>([] as DataPerson[]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
      const q = query(collection(getFirestore(), "dataProfiles"));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const result = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(result as unknown as DataPerson[]);
        },
        (error) => {
          console.log(error);
          setData(store.data as unknown as DataPerson[]);
        },
        () => setLoader(false)
      );
      return () => unsubscribe();
    }, []);

    const updateByid = async (id: string, vote: "positive" | "negative") => {
      const profileFound = data.find((option) => option.id === id);
      if (profileFound) {
        profileFound[vote] = profileFound[vote] + 1;
        const ref = doc(getFirestore(), "dataProfiles", id);
        await updateDoc(ref, profileFound as any);
      }
    };

    return (
      <>
        {loader ? (
          <Spinner />
        ) : (
          data.map((item: DataPerson, key: number) => (
            <Component
              data={item}
              key={key}
              updateByid={updateByid}
              {...hocProps}
            />
          ))
        )}
      </>
    );
  };
}
/*
const ShowList =
  (Component: React.FC<{ data: DataPerson; makeVote: any }>): React.FC =>
  (props: any) => {
    /*  const makeVote = (name: string, vote: "positive" | "negative") => {
      const profileFound = data.data.find((option) => option.name === name);
      if (profileFound) {
        const newData = data.data.map((option) => ({
          ...option,
          selected: false,
        }));
        const index = data.data.indexOf(profileFound);
        newData[index].votes[vote]++;
      }
    };  };*/

export default ShowList;
