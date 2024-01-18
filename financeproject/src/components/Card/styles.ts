import styled from "styled-components";

export const CardContainer = styled.div`
  width: 15rem;
  height: 15rem;
  padding: 1.8rem;
  border: 1px solid ${(props) => props.theme["gray-200"]};
  //overflow: hidden;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 390px) {
    width: 350px;
    height: 300px;
    padding: 5rem;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 300px;
    padding: 5rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme["gray-200"]};

  @media (max-width: 390px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const TitleSpan = styled.span`
  font-size: 0.9rem;
  
  @media (max-width: 390px) {
      font-size: 14px;
    }
  
  @media (max-width: 768px) {
      font-size: 14px;
    }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CardPrice = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme["green-100"]};
`;

export const CardLogo = styled.img`
  width: 20px;
  height: 20px;
`