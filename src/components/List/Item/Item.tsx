import React from "react";
import { msToTime } from "../../../utils";
import { IItem } from "../../../types";

interface IProps {
  item: IItem;
  onClick: () => void;
}

export const Item: React.FC<IProps> = React.memo(({ item, onClick }) => (
  <li className="py-1" onClick={onClick}>
    <a href="">{msToTime(item.timestamp)}</a>
  </li>
));
