import styled, { css } from 'styled-components';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';

const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`;
const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
z-index:-1;
`;
const IntoShape = styled.div`
  ${Shape}
   clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
   background-color: #FFC0CB;
`;
const FeatureShape = styled.div`
  ${Shape}
   clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
   background-color: #ADD8E6;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 15% 0, 35% 50%, 15% 100%, 0% 100%);
  background-color: #9370DB;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(40% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: #CD5C5C;
`;


const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;