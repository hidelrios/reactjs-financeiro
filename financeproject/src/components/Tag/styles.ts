import styled from "styled-components";

export interface TagProps {
  variant?: string;
}

export const TagContainer = styled.div<TagProps>`
  width: 6.0rem;
  padding: 5px 5px;
  background-color: ${(props) =>
    props.variant === "blue"
      ? props.theme["blue-100"]
      : props.theme["gray-100"]};
  border-radius: 4rem;
  display: flex;
  justify-content: center;
`;

export const TagContent = styled.span<TagProps>`
  font-size: 0.7rem;
  color: ${(props) => props.variant === "blue"? props.theme["white"]: props.theme["gray-200"]};
`;
