import React, { useState, useEffect } from "react";
import { useSelector } from "../../redux/useSelector";
import axios from "axios";

import { Layout } from "../Layout";
import { List } from "../List";
import { Video } from "../Video";

import { IItem } from "../../types";

export const App: React.FC = () => {
  const items = useSelector((state) => {
    const {
      items: { items },
    } = state;
    return items || [];
  });

  /*const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await axios(
          "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd"
        );
        const items = result.data || [];
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);*/

  return (
    <Layout>
      <Video />
      <List items={items} onItemClick={() => {}} />
    </Layout>
  );
};
