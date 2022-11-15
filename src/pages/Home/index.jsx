import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import {Container, TextContent, Title, TitleHighlight} from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
            Implemente
            <br/>
            </TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunicade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onclick={() => null} />
        </div>
        <div>
          <img src={"https://vetores.org/d/corinthians.svg"} alt="imagem principal" height={200} />
        </div>
      </Container>
      <Link to={"/login"} >Vá para a tela de login</Link>
    </>
  )
}
