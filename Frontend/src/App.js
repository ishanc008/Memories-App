import React from "react"
import { Container } from '@material-ui/core';

import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
