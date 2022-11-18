import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input/index'
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'

import { api } from "../../services/api";


const schema = yup.object({
  email: yup.string().email('E-mail inválido').required("Campo obrigatório"),
  password: yup.string().min(3, 'no mínimo 3 caracteres').required("Campo obrigatório"),
}).required();

export default function Login() {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(schema),
    //valida a cada caractere digitado
    mode: 'onChange'
  });

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1) {
        navigate('/feed')
      } else {
        alert('email ou senha inválido!')
      }
    }
    catch{
      alert('Houve um erro, tente novamente!')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" control={control} placeholder="E-mail" errorMessage={errors?.email?.message} leftIcon={<MdEmail />}/>
              <Input name="password" control={control} placeholder="Senha" errorMessage={errors?.password?.message} type="password" leftIcon={<MdLock />}/>
              <Button title="entrar" variant="secondary" /* onClick={() => handleClickSignIn() } */ type='submit' />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
