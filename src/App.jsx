import { useEffect, useState } from "react";
import MyBalance from "./components/MyBalance";
import Container from "./components/Container";
import Chart from "./components/Chart";

export default function App() {

  return (
    <Container className="bg-main h-screen grid place-content-center gap-5">
      <MyBalance />
      <Chart />
    </Container>
  )
}