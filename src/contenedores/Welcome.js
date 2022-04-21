import styled from "styled-components";
import { rem } from "polished";
import Header from "../componentes/header/Header.js";
import * as singleSpa from "single-spa";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  padding: 16px;
  background: #304562;
  height: 100vh;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 0px 10%;
    height: 100vh;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
    height: 100vh;
  }
`;


const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #FFF9D5;
  font-weight: 600;
  font-family: rubik;
  @media (min-width: ${minWidth}) {
    font-size: 45px;
    margin-left: 10px;
    margin-top: 24px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 53px;
    margin-left: 14px;
    margin-top: 10px;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 64px;
  margin-bottom: 24px;
  @media (min-width: ${minWidth}) {
    width: 130px;
    margin-top: 60px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: #FFF9D5;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  @media (min-width: ${minWidth}) {
    font-size: 20px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 25px;
  }
`;

const Link = styled.p`
  font-size: 16px;
  text-align: center;
  color: #FFF9D5;
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  font-style: oblique;
  margin-top: 5%;
  cursor: pointer;
  @media (min-width: ${minWidth}) {
    font-size: 20px;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  border:none;
  height: 50px;
  font-size: 18px;
  width: 70%;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  cursor: pointer;
  @media (min-width: ${minWidth}) {
    font-size: 25px;
    height: 60px;
    margin-top: 10%;
    padding: 4%;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 30px;
    height: 68px;
    margin-top: 13%;
  }
`;


const Welcome = () => {

  localStorage.removeItem('userData');

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfbienvenida").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = (redirectTo) => {
   if (redirectTo === 'login') unmountApplication("mfiniciosesion");
   if (redirectTo === 'register') console.log('proximamente se podrá registrar')
        
  }

  return (
    <>
      <Wrapper>
        <Header/>
        <Title>
          Bienvenido
        </Title>
        <Text>
          Juntos podemos liberar las calles y dar uso a tus espacios
        </Text>
        <Button
          onClick={() => onContinue('login')}
        >
          INGRESAR
        </Button>
        <Link
          onClick={() => onContinue('register')}
        >
          Registrarme
        </Link>
      </Wrapper>
    </>
  );
};

export default Welcome;
