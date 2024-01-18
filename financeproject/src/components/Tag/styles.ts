import styled from "styled-components";

export interface TagProps {
  variant?: string;
}

export const TagContainer = styled.button<TagProps>`
  width: 6.0rem;
  padding: 5px 5px;
  background-color: ${(props) =>
    props.variant === "blue"
      ? props.theme["blue-100"]
      : props.theme["gray-100"]};
  border-radius: 4rem;
  border-style: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media (max-width: 390px) {
    width: 150px;
    padding: 6px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100px;
    padding: 6px;
  }
`;

export const TagContent = styled.span<TagProps>`
  font-size: 0.7rem;
  color: ${(props) => props.variant === "blue"? props.theme["white"]: props.theme["gray-200"]};

  @media (max-width: 390px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

`;
