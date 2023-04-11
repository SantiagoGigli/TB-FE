import React from "react";
import { Container } from "react-bootstrap";
import FileList from "./components/FilesList";
import Navbar from "./components/Navbar";

const columns = ["First Name", "Text", "Number", "Hex"];

function App() {
  return (
    <Container>
      <Navbar />
      <FileList columns={columns} />
    </Container>
  );
}

export default App;
