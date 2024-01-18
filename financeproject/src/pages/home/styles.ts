import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  margin: 3rem auto;
  padding: 0 1.5rem;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;

  }
`;

export const HomeTitle = styled.h1`
  @media (max-width: 390px) {
    font-size: 32px;
  }
`;

export const TagSpan = styled.span`
  color: ${(props) => props.theme["gray-200"]};
  font-size: 18px;

`;

export const FilterTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-top: -2.5rem;
  margin-right: 3.5rem;
  gap: 0.5rem;

  @media (max-width: 390px) {
    margin-top: 2.5rem;
    flex-direction: column;
    
    align-items: flex-start;

  }
`
export const FilterTagContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 3.5rem;
  gap: 0.5rem;
  
`;

export const MainContainer = styled.div`
  margin-top: 3rem;
  margin-left: 0;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 390px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
