import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import {
  sortTimestamps,
  selectTimestamp,
} from "./../../redux/actions/timestamps";
import { Item } from "./Item";
import { ArrowUp } from "./../ArrowUp";
import { ArrowDown } from "./../ArrowDown";
import { Timestamp } from "src/types";

export const List: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const { timestamps, sort } = useSelector((state) => {
    const {
      timestamps: { timestamps, sort },
    } = state;
    return { timestamps, sort };
  });

  const onSortClick = () => {
    dispatch(sortTimestamps());
  };

  const onSelectTimestamp = (item: Timestamp) => {
    dispatch(selectTimestamp({ selectedTimestamp: item }));
  };

  return (
    <div className="col-2">
      {timestamps && timestamps.length ? (
        <>
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={onSortClick}
            >
              {sort === "asc" ? <ArrowDown /> : <ArrowUp />} Сортировать
            </button>
          </div>
          <ul className="list-unstyled">
            {timestamps.map((timestamp) => (
              <Item
                item={timestamp}
                key={timestamp.id}
                selectTimestamp={onSelectTimestamp}
              />
            ))}
          </ul>
        </>
      ) : (
        "Нет данных"
      )}
    </div>
  );
});
