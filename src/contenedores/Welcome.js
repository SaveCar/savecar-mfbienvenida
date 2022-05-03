import styled from "styled-components";
import { rem } from "polished";
import Header from "../componentes/header/Header.js";
import * as singleSpa from "single-spa";

const minWidth = rem("640px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth}) {
    padding: 0px 10%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
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
  height: 50px;
  font-size: 18px;
  width: 80%;
  background: #F6EBCF;
  color: #304562;
  border: 1px solid #CBBBA1;
  margin-top: 20%;
  cursor: pointer;
  @media (min-width: ${minWidth}) {
    font-size: 25px;
    height: 60px;
    width: 70%;
  }
  @media (min-width: ${maxWidth}) {
    font-size: 30px;
    margin-top: 15%;
    height: 68px;
    width: 60%;
  }
`;


const Welcome = () => {

  localStorage.removeItem('userData');
  localStorage.removeItem('credenciales');
  localStorage.removeItem('userRol');
  localStorage.removeItem('datosPersonales');
  localStorage.removeItem('checkBox');
  localStorage.removeItem('guardarUsuario');
  localStorage.removeItem('Data');
  localStorage.removeItem('ListaVehiculos');
  localStorage.removeItem('ListaTipoVehiculos');
  localStorage.removeItem('ListaServicios');
  localStorage.removeItem('ListaComunas');
  localStorage.removeItem('ListaTipoCobros');
  localStorage.removeItem('ListaTipoSuelos');
  localStorage.removeItem('direccionEspacio');
  //eliminar claves del localStorage
  localStorage.removeItem('servicioEspacio');
  localStorage.removeItem('respuestaSave');
  localStorage.removeItem('Data');
  localStorage.removeItem('imagen');
  localStorage.removeItem('direccionEspacio');
  localStorage.removeItem('espacioGuardar');
  localStorage.removeItem('dimensionesEspacio');

  const unmountApplication = (toMf) => {
    localStorage.setItem("toMf", toMf);
    singleSpa.unregisterApplication("@savecar/mfbienvenida").then(() => {
      console.log("redireccionando");
    });
  };

  const onContinue = (redirectTo) => {
    if (redirectTo === 'login') unmountApplication("mfiniciosesion");
    if (redirectTo === 'register') unmountApplication("mfregusuario");
        
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
