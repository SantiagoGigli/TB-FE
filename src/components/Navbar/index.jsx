import React from "react";
import { Container, Navbar as RBNavbar } from "react-bootstrap";

const Navbar = () => {
  return (
      <RBNavbar expand="lg" variant="light" bg="danger">
        <Container>
          <span style={{ color: "white", fontWeight: "bold" }}>
            React Test App
          </span>
        </Container>
      </RBNavbar>
  );
};

export default Navbar;
