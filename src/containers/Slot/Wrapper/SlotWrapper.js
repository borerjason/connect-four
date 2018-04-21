import styled, { css } from 'styled-components';

const SlotWrapper = styled.div`
  box-sizing: border-box; 
  width: 12%;
  height: 12%;
  border-radius: 50%;
  background-color: ${props => props.color || '#ffffff'};
  margin: 5px;
`;

export default SlotWrapper;
