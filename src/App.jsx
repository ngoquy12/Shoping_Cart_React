import React from "react";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import GlobalState from "./providers/GlobalState";

export default function App() {
  return (
    <>
      <GlobalState />
    </>
  );
}
