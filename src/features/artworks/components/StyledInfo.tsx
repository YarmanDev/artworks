import styled from "styled-components";

export const StyledInfo = ({ text }: { text: string }) => {
  return <StyledRoot>{text}</StyledRoot>;
};

const StyledRoot = styled.div`
  margin-top: 100px;
  font-size: 30px;
  color: #cccccc;
`;
