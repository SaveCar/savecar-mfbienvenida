import styled from "styled-components";
import { rem } from "polished";
import Header from "../componentes/header/Header.js";
import * as singleSpa from "single-spa";

const minWidth1 = rem("600px");
const minWidth2 = rem("750px");
const maxWidth = rem("1200px");

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${minWidth1}) {
    padding: 0px 10%;
  }
  @media (min-width: ${maxWidth}) {
    padding: 0px 15%;
  }
`;


const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-family: rubik;
  margin-top: 70px;
  @media (min-width: ${minWidth1}) {
    font-size: 35px;
    margin-top: 80px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 41px;
  }
  @media (min-width: ${maxWidth}) {
    margin-top: 50px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 300;
  font-family: rubik;
  margin-top: 30px;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    margin-top: 40px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    margin-top: 30px;
  }
  @media (min-width: ${maxWidth}) {
    margin-top: 20px;
  }
`;

const Link = styled.p`
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 300;
  font-family: rubik;
  margin: 0px;
  padding-top: 5px;
  font-style: oblique;
  margin-top: 5%;
  cursor: pointer;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    padding-top: 0px;
  }
`;

const Button = styled.button`
  border-radius: 100px;
  font-weight: 600;
  font-family: rubik;
  height: auto;
  font-size: 16px;
  width: auto;
  background: #F8F5F0;
  color: rgba(0, 0, 0, 1);
  border: 1px solid #F8F5F0;
  margin-top: 20%;
  cursor: pointer;
  padding: 2% 10%;
  @media (min-width: ${minWidth1}) {
    font-size: 18px;
    height: auto;
    width: auto;
    padding: 2% 10%;
    margin-top: 15%;
  }
  @media (min-width: ${minWidth2}) {
    font-size: 20px;
    margin-top: 10%;
    padding: 1.6% 10%;
  }
  @media (min-width: ${maxWidth}) {
    margin-top: 10%;
    padding: 1.4% 10%;
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
