import React from 'react'
import { 
  Column, 
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

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/DIO_%28band%29_logo.svg"} alt='Logo da Dio' height={45}/>
          <BuscarInput>
            <Input placeholder='buscando!!!!!' />
          </BuscarInput>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
        <MenuRight href='#'>Home</MenuRight>
        <Button title="Entrar" />
        <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  )
}
