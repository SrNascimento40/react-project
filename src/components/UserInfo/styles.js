import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #FFF;
  margin-right: 12px;
`

export const NameText = styled.div`
  font-weight:'Open Sans';
  font-family: normal;
  font-style: 700;
  font-size:25px;
  color: #FFF;
`

export const Progress = styled.div`
  width: 180px;
  height: 6px;
  background-color: #FFF;
  border-radius: 3px;
  position: relative;

  &::after {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual }%;
    height: 6px;
    border-radius: 3px;
    background-color: #23DD7A;
  }
`