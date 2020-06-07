import React from "react";
import { useSelector } from "../../../redux/useSelector";
import { Rectangle } from "../Rectangle";

export const Overlay: React.FC = React.memo(() => {
  const { timestamps, currentTime } = useSelector((state) => {
    const {
      timestamps: { timestamps },
      video: { currentTime },
    } = state;
    return { timestamps, currentTime };
  });

  const rectangles = (timestamps || [])
    .filter(
      (t) =>
        currentTime >= t.timestamp && currentTime <= t.timestamp + t.duration
    )
    .map((t) => (
      <Rectangle
        top={t.zone.top}
        left={t.zone.left}
        width={t.zone.width}
        height={t.zone.height}
        key={t.id}
      />
    ));

  return <>{rectangles}</>;
});
