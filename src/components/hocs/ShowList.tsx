import React, { useState } from "react";
import { data } from "api";
import { DataPerson } from "interfaces/interfaces";

const ShowList = (Component: React.FC<{ data: DataPerson, makeVote: any }>): React.FC => (props: any) => {
  let profiles = data.data

  const makeVote = (name: string, vote: 'positive' | 'negative') => {
    console.log(profiles)
    const profileFound = profiles.find(option => option.name === name)
    if (profileFound) {
      const newData = profiles.map(option => ({ ...option, selected: false }))
      const index = profiles.indexOf(profileFound)
      newData[index].votes[vote]++
      profiles = [...newData]
      console.log(newData)
    }

  }

  return <>
    {profiles.map((item, key) => (
      <Component data={item} key={key} makeVote={makeVote} {...props} />
    ))}
  </>
}


export default ShowList;
