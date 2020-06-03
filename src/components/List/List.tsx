import React from "react";
import { Item } from "./Item";
import { IItem } from "../../types";

interface IProps {
  items: IItem[];
  onItemClick: () => void;
}

export const List: React.FC<IProps> = React.memo((props) => {
  const { items, onItemClick } = props;
  return (
    <div className="col-2">
      {items && items.length ? (
        <ul className="list-unstyled">
          {items.map((item) => (
            <Item item={item} key={item.id} onClick={onItemClick} />
          ))}
        </ul>
      ) : (
        "Нет данных"
      )}
    </div>
  );
});
