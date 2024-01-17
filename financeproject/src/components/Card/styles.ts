import styled from "styled-components";

export const CardContainer = styled.div`
  width: 15rem;
  height: 15rem;
  padding: 1.8rem;
  border: 1px solid ${(props) => props.theme["gray-200"]};
  //overflow: hidden;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardTitle = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme["gray-200"]};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
export const CardPrice = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme["green-100"]};
`;
