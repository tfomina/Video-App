import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import { sortTimestampsAction } from "./../../redux/actions/timestamps";
import { Item } from "./Item";
import { ArrowUp } from "./../ArrowUp";
import { ArrowDown } from "./../ArrowDown";

export const List: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const { timestamps, sort } = useSelector((state) => {
    const {
      timestamps: { timestamps, sort },
    } = state;
    return { timestamps, sort };
  });

  const sortTimestamps = () => {
    dispatch(sortTimestampsAction());
  };

  return (
    <div className="col-4">
      {timestamps && timestamps.length ? (
        <>
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-success"
              onClick={sortTimestamps}
            >
              {sort === "asc" ? <ArrowDown /> : <ArrowUp />} Сортировать
            </button>
          </div>
          <ul className="list-unstyled">
            {timestamps.map((timestamp: any) => (
              <Item item={timestamp} key={timestamp.id} />
            ))}
          </ul>
        </>
      ) : (
        "Нет данных"
      )}
    </div>
  );
});
