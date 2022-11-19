import React from 'react'

import { Container, UserPicture, NameText, Progress } from "./styles";
import { IUser } from './types';

export default function UserInfo ({image, name, percentual}:IUser) {
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
