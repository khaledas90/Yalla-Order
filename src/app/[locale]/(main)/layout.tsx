import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div><Header /></div>
      <main className="pt-20">{children} </main>
      <Footer />
      <h1 className="bg-white">Magdy</h1>
    </>
  );
}
