import React from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import { Container, Column, Title, TitleHighlight } from './styles'

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1} >
          <TitleHighlight>#RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={83} name="Nascimento" image={"https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4"} />
          <UserInfo percentual={7} name="Namento" image={"https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4"} />
          <UserInfo percentual={39} name="Nasento" image={"https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4"} />
          <UserInfo percentual={55} name="Nato" image={"https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4"} />
          <UserInfo percentual={35} name="Cimento" image={"https://media-exp1.licdn.com/dms/image/D4D35AQElLTXYaBxMSA/profile-framedphoto-shrink_200_200/0/1658952806798?e=1669154400&v=beta&t=G5y1soXTRVo_JJfSMp3-Lo5YANS_KGt9VX_6jM8YcK4"} />
        </Column>
      </Container>
    </>
  )
}
