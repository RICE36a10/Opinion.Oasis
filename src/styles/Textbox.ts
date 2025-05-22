import styled from "styled-components";
import { CommonInputStyle } from "./CommonInput";
export const Textbox = styled.textarea<{ $isError: boolean }>`
  ${CommonInputStyle}
  min-height: 80px;
  border: ${({ $isError }) =>
    $isError ? `1px solid var(--error-color)` : `none`};

  padding: 16px 24px;
  flex: 1;
  resize: none;
  &::placeholder {
    color: #8c92b3;
  }
  &:focus {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? `var(--error-color)` : `var(--link-color)`};
  }
  @media (max-width: 767.98px) {
    padding: 16px;
  }
`;
