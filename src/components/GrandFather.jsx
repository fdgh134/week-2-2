import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

function GrandFather() {
  const houseName = "윰쮸";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
);
}

export default GrandFather;