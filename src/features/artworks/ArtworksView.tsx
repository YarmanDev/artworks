import React, { useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../../hooks";
import { CardsWrapper } from "./components/CardsWrapper";

const ArtworksView = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const debouncedInputValue = useDebounce(inputValue, 300);

  return (
    <StyledRoot>
      <ContentWrapper>
        <InputWrapper>
          <StyledInput
            type={"text"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            type={"checkbox"}
            name="showImage"
            id="showImage"
            onChange={() => {
              setIsChecked((state) => !state);
            }}
          />
          <label htmlFor="showImage" style={{ whiteSpace: "nowrap" }}>
            Show Image
          </label>
        </InputWrapper>
        <CardsWrapper
          inputValue={debouncedInputValue}
          isShowImage={isChecked}
        />
      </ContentWrapper>
    </StyledRoot>
  );
};

export default ArtworksView;

const StyledRoot = styled.div`
  padding: 70px 0;
  color: #cccccc;
`;

const InputWrapper = styled.div`
  width: 55%;
  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (min-width: 480px) {
    & {
      width: 85%;
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  color: #141723;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
