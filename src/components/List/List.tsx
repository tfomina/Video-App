import React from "react";
import { useSelector } from "../../redux/useSelector";
import { Item } from "./Item";

export const List: React.FC = React.memo(() => {
  const timestamps = useSelector((state) => {
    const {
      timestamps: { timestamps },
    } = state;
    return timestamps || [];
  });

  return (
    <div className="col-2">
      {timestamps && timestamps.length ? (
        <ul className="list-unstyled">
          {timestamps.map((timestamp: any) => (
            <Item item={timestamp} key={timestamp.id} />
          ))}
        </ul>
      ) : (
        "Нет данных"
      )}
    </div>
  );
});
