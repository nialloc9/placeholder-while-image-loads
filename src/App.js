import React from 'react';
import styled from "@emotion/styled";
import ImageWithPlaceholder from "./image-with-placeholder";

const Container = styled.div`
  width: 500px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <h1>Image With Placeholder</h1>
      <ImageWithPlaceholder src="https://www.shutterbug.com/images/styles/600_wide/public/Aspect-ratio-3x2.jpg" aspectRatio="3:2" backgroundColor="lightgrey" />
    </Container>
  );
}

export default App;
