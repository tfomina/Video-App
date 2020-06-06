import React from "react";

export const Loader: React.FC = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Загрузка...</span>
    </div>
  </div>
);
