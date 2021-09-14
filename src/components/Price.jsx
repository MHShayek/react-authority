import React from 'react';
import styled from "styled-components";
import PriceCard from './PriceCard';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Price = () => {
  return (
    <Container>
      <PriceCard price="8" type="Basic" />
      <PriceCard price="15" type="Premium"/>
      <PriceCard price="25" type="Advanced"/>
    </Container>
  );
};

export default Price;