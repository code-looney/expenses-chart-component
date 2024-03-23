import MyBalance from "./components/MyBalance";
import Container from "./components/Container";

export default function App() {
  return (
    <Container className="bg-main h-screen grid place-content-center">
      <MyBalance />
    </Container>
  )
}