import React from "react";

import { Zone } from "../../../types";

interface IProps extends Zone {}

export const Rectangle: React.FC<IProps> = React.memo(
  ({ width, height, top, left }) => (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: width,
        height: height,
        border: "5px solid #dc3545",
      }}
    ></div>
  )
);
