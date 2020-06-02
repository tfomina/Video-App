import React from "react";

import { Layout } from "../Layout";
import { List } from "../List";
import { Video } from "../Video";

export const App: React.FC = () => (
  <Layout>
    <Video />
    <List />
  </Layout>
);
