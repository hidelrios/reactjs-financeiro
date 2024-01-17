import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["black-100"]};
  padding: 1rem 0 1rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-left: 1.5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;