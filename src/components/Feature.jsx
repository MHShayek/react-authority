import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 5px 20px;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
 width: 60%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: #FF6347;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;


const Feature = () => {
  return (
    <Container>
      <Left><Image src={App} /></Left>
      <Right>
        <Title>
          <b>creative</b> design
          <br />
          <b>creative</b> business
        </Title>
        <SubTitle>Quality full design is the first law of successful business.</SubTitle>
        <Desc>
          Our team members are provides quality full services to client. Good communications, great experiences, highly skilled branding helps our client succeed.
        </Desc>
        <Desc>
          We ensure you to achieve companies goals and guarantee to success.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;