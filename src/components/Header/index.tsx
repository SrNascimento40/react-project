import React from 'react'
import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  BuscarInput
} from "./styles";
import Button from "../Button";
import { IHeader } from './types';

export default function Header({autenticado}:IHeader) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/DIO_%28band%29_logo.svg"} alt='Logo da Dio' height={45} />
          {autenticado ? (
            <>
              <BuscarInput>
                <Input placeholder='buscando!!!!!' />
              </BuscarInput>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4'/> ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}
