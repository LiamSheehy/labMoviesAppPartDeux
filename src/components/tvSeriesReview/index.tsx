import React from "react";
import { TVSeriesReview } from "../../types/interfaces";

const TVReview: React.FC<TVSeriesReview> = (props) => {
  return (
    <>
      <p>Review By: {props.author} </p>
      <p>{props.content} </p>
    </>
  );
};

export default TVReview;
