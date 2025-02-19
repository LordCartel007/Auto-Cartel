import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
