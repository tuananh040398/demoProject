import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Table from "../Components/Table";

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      setList(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  console.log(list);
  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <Table></Table>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
