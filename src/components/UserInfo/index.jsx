import React from 'react'

import { Container, UserPicture, NameText, Progress } from "./styles";

export default function UserInfo ({image, name, percentual}) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
