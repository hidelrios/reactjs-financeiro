import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  margin: 3rem auto;
  padding: 0 1.5rem;

`;

export const TagSpan = styled.span`
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.7rem;
`
export const FilterTag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    margin-top: -2.5rem;
    margin-right: 3.5rem;
    gap: 0.5rem;
`;

export const TransactionsContainer = styled.div`    

    margin-top: 3rem;
    margin-left: 0;
    margin-right: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;

`