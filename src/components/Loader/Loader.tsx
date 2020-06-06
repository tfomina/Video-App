import React from "react";

export const Loader: React.FC = () => (
  <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
    <div
      className="spinner-border text-success"
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="sr-only">Загрузка...</span>
    </div>
  </div>
);
