import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../FatText";

const Wrapper = styled.div`
  height: 40vh;
`;

const SearchPresenter = ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"데이터가 없습니다."} />}
  </Wrapper>
);

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;
