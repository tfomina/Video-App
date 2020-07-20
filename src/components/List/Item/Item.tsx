import React from "react";
import { useSelector } from "../../../redux/useSelector";
import clsx from "clsx";
import { msToTime } from "../../../utils";
import { Timestamp } from "../../../types";

interface IProps {
  item: Timestamp;
  selectTimestamp: (item: Timestamp) => void;
}

export const Item: React.FC<IProps> = React.memo(
  ({ item, selectTimestamp }) => {
    const selectedTimestamp = useSelector((state) => {
      const {
        timestamps: { selectedTimestamp },
      } = state;
      return selectedTimestamp || null;
    });

    const onClick = (e: React.MouseEvent<HTMLElement>, item: Timestamp) => {
      e.preventDefault();
      selectTimestamp(item);
    };

    const isSelected = selectedTimestamp && item.id === selectedTimestamp.id;

    return (
      <li
        className={clsx(
          "my-1 bg-secondary",
          isSelected && "bg-success"
        )}
      >
        <a
          href="#"
          className={clsx(
            "d-block text-white text-decoration-none p-2",
            isSelected && "font-weight-bold"
          )}
          onClick={(e) => onClick(e, item)}
        >
          {msToTime(item.timestamp)}
        </a>
      </li>
    );
  }
);
