import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
// import head component

import Header from "@/components/Header";
import Screen from "@/components/Screen";
import KeyPad from "@/components/KeyPad";

export default function Home() {
  const styles = useSelector((state) => state.styles);
  const [bg, setBg] = useState(styles.bg);
  console.log(styles.bg);
  return (
    <Fragment>
      <div className={`sm:w-full min-h-screen p-4 flex flex-col`}>
        <Header></Header>
        <Screen />
        <KeyPad />
      </div>
    </Fragment>
  );
}
