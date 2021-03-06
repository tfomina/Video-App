import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/useSelector";
import { loadTimestamps } from "./../../redux/actions/timestamps";

import { Layout } from "../Layout";
import { List } from "../List";
import { Video } from "../Video";
import { Loader } from "../Loader";

const useApp = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(loadTimestamps());
  }, []);

  return loading;
};

export const App: React.FC = () => {
  const loading = useApp();

  if (loading) return <Loader />;

  return (
    <Layout>
      <Video />
      <List />
    </Layout>
  );
};
