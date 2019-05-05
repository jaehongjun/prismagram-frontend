import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import FatText from "../Components/FatText";

const Wrapper = styled.div`
  height: 50vh;
`;

export default withRouter(({ location: { search } }) => {
  const searchTerm = search.split("=")[1];
  if (searchTerm === undefined) {
    console.log("no serarhc");
  }
  return (
    <Wrapper>
      {searchTerm === undefined && <FatText text={"search for something"} />}
    </Wrapper>
  );
});
