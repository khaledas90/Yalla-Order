"use client";

import useMainContext from "@/app/context/MainContext";
import React from "react";

export default function Page() {
  const { theme, setTheme } = useMainContext();

  return (
    <div>
      <h1>Home Page</h1>
      {theme === "restaurant" ? (
        <>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
          <h2>restaurant</h2>
        </>
      ) : (
        <>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
          <h2>clinic</h2>
        </>
      )}

      <div
        className="text-3xl bg-red-500 cursor-pointer"
        onClick={() => setTheme("click")}
      >
        Go to the click page
      </div>

      <div
        className="text-3xl mt-3 bg-red-500 cursor-pointer"
        onClick={() => setTheme("restaurant")}
      >
        Go to the restaurant page
      </div>
    </div>
  );
}
