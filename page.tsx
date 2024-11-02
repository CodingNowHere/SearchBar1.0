"use client";
import React from "react";
import { SearchSection } from "@/components/searchBar";

const itemsMain = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Indianapolis",
  "Columbus",
];

export default function Home() {
  const [item, setItem] = React.useState<string>();

  function settingItem(item: string) {
    setItem(item);
  }

  return (
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-green-50 to-red-50">
      <div className=" w-2/3 h-2/3 p-2 flex items-center justify-center">
        <SearchSection
          settingItem={settingItem}
          items={itemsMain}
          type="string"
        />
      </div>
      {item && (
        <div className=" fixed top-10 right-10 text-3xl p-2 text-slate-500 rounded-md border-2">
          {item}
        </div>
      )}
    </div>
  );
}
