import React from "react";
import { IItem } from "../../../types";

interface IProps {
  item: IItem;
  onClick: () => void;
}

export const Item: React.FC<IProps> = React.memo(({ item, onClick }) => (
  <li className="py-1" onClick={onClick}>
    <a href="">{item.timestamp}</a>
  </li>
));
