import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import * as actions from "./../../redux/actions/timestamps";
import { Item } from "./Item";
import { ArrowUp } from "./../ArrowUp";
import { ArrowDown } from "./../ArrowDown";
import { Timestamp } from "src/types";

const useList = () => {
  const dispatch = useDispatch();

  const { timestamps, sort } = useSelector((state) => {
    const {
      timestamps: { timestamps, sort },
    } = state;
    return { timestamps, sort };
  });

  const changeSortDirection = () => {
    dispatch(actions.sortTimestamps());
  };

  const selectTimestamp = (item: Timestamp) => {
    dispatch(actions.selectTimestamp({ selectedTimestamp: item }));
  };

  return { timestamps, sort, changeSortDirection, selectTimestamp };
};

export const List: React.FC = React.memo(() => {
  const { timestamps, sort, changeSortDirection, selectTimestamp } = useList();

  const onSort = () => changeSortDirection();

  const onSelectTimestamp = (item: Timestamp) => selectTimestamp(item);

  return (
    <div className="col-2">
      {timestamps && timestamps.length ? (
        <>
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={onSort}
          >
            {sort === "asc" ? <ArrowDown /> : <ArrowUp />} Сортировать
          </button>

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
