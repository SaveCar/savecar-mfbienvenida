import styled from "styled-components";
import { rem } from "polished";
import icon_save_car from "./../../icon/logo.svg";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  margin-top: 30%;
  margin-bottom: 15%;
  @media (min-width: ${minWidth}) {
    width: 100%;
    margin-top: 20%;
    margin-bottom: 10%;
  }
  @media (min-width: ${maxWidth}) {
    width: 100%;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

const LogoSaveCar = styled.img`
  background: #FFF9D5;
  border-radius: 100%;
  padding: 10px;
  width: 25px;
  @media (min-width: ${minWidth}) {
    width: 40px;
  }
  @media (min-width: ${maxWidth}) {
    width: 50px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  color: #FFF9D5;
  font-weight: 700;
  font-family: rubik;
  margin-left: 7px;
  @media (min-width: ${minWidth}) {
    font-size: 40px;
    margin-left: 10px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 47px;
    margin-left: 14px;
  }
`;

const WrapperTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <WrapperTitle>
          <LogoSaveCar src={icon_save_car}/>
          <Title>SaveCar</Title>
        </WrapperTitle>
      </Wrapper>
    </>
  );
};

export default Header;
