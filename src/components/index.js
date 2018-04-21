import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: yellow;
`;

export const SlotWrapper = styled.div`
  box-sizing: border-box; 
  width: 12%;
  height: 12%;
  border-radius: 50%;
  background-color: ${props => props.color || '#ffffff'};
  margin: 5px;
`;

export const Title = styled.h3`
  font-family: 'Gaegu', cursive;
  font-size: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin: 5px;
`;

export const Msg = styled.p`
  margin: 0;
  font-size: 32px;
  font-family: 'Gaegu', cursive;
  color: ${props => props.color || 'black'}
`;
