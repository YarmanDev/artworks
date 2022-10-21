import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IArtwork } from "../api/types";

interface IProps {
  artwork: IArtwork;
  isShowImage: boolean;
}

export const ArtworksCard = ({ artwork, isShowImage }: IProps) => {
  const navigate = useNavigate();

  const hasImage = !!artwork?.primaryimageurl;

  const handleCardClick = () => navigate(`artwork/${artwork.id}`);

  /* such a dumb condition here for handling server error, because there are some cases when hasimage equals to 1,
  but we still getting object without images*/
  return !hasImage && isShowImage ? null : (
    <StyledRoot onClick={handleCardClick}>
      {hasImage ? (
        <StyledImg src={artwork?.primaryimageurl} placeholder="blur" />
      ) : (
        <NoImageDiv>There is no image for this item :(</NoImageDiv>
      )}
      <MainContent>
        <Title>{artwork?.title}</Title>
        <div style={{ marginTop: 10 }}>{artwork?.department}</div>
      </MainContent>
      <AdditionalData>
        <div>
          {artwork?.classification && (
            <>
              <WeightDiv>Classification:</WeightDiv> {artwork?.classification}
            </>
          )}
        </div>
        <div>
          {artwork?.period && (
            <>
              <WeightDiv>Period:</WeightDiv> {artwork.period}
            </>
          )}
        </div>
      </AdditionalData>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  background-color: #cccccc;
  border-radius: 40px;
  overflow: hidden;
  color: #141723;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 0px 0px 13px -1px rgba(150, 168, 242, 1);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const NoImageDiv = styled.div`
  width: 100%;
  height: 250px;
  background-color: #297e9a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  color: #cccccc;
`;
const Title = styled.h5`
  font-size: 18px;
  margin: 0;
`;
const MainContent = styled.div`
  flex: 1 0 auto;
  padding: 10px 2px;
  text-align: center;
`;
const AdditionalData = styled.div`
  display: flex;
  flex: 0 0 30px;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const WeightDiv = styled.div`
  font-weight: 600;
  display: inline-flex;
`;
