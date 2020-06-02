import React, { ReactNode } from "react";
import { Header } from "../Header";

interface IProps {
  children?: ReactNode;
}

export const Layout: React.FC<IProps> = (props) => (
  <div className="container">
    <Header />
    <div className="row">{props.children}</div>
  </div>
);
