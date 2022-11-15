import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import {Container, TextContent, Title, TitleHighlight} from './styles'

export default function Home() {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }

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
          <Button title="Começar agora" variant="secondary" onclick={() => handleClickSignIn()} />
        </div>
        <div>
          <img src={"https://vetores.org/d/corinthians.svg"} alt="imagem principal" height={200} />
        </div>
      </Container>
    </>
  )
}
