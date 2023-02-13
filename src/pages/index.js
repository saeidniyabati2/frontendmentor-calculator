import { Fragment } from "react";
// import head component
import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Fragment>
      <div className="sm:w-full min-h-screen p-4">
        <Header></Header>
      </div>
    </Fragment>
  );
}
