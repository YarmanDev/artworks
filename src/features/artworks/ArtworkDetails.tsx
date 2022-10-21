import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArtworksService } from "./api/ArtworksService";
import { GET_ARTWORK_BY_ID_QUERY } from "./api/constants";
import { StyledInfo } from "./components/StyledInfo";
import { typedObjectEntries } from "./helpers/typedObjectEntries";

const FieldsTitles = {
  department: "Department",
  classification: "Classification",
  culture: "Culture",
  technique: "Technique",
  period: "Period",
  creditline: "Credit Line",
  division: "Division",
};

const checkIfHasProperty = (property?: string | number) =>
  property ?? "Unknown";

const ArtworkDetails = () => {
  const { id } = useParams();
  const {
    data: artwork,
    isLoading,
    isError,
  } = useQuery([GET_ARTWORK_BY_ID_QUERY, id], () =>
    ArtworksService.getArtworkById(id)
  );

  if (isError)
    return (
      <StyledRoot>
        <StyledInfo text="Ooops, something went wrong" />
      </StyledRoot>
    );

  const fields = {
    department: artwork?.department,
    classification: artwork?.classification,
    culture: artwork?.culture,
    technique: artwork?.technique,
    period: artwork?.period,
    creditline: artwork?.creditline,
    division: artwork?.division,
  };

  return (
    <StyledRoot>
      <CenteredFlex>
        {isLoading && !isError ? (
          <StyledInfo text="Loading..." />
        ) : (
          <>
            <h1>{artwork?.title}</h1>
            <StyledContent>
              {artwork?.primaryimageurl && (
                <ImageWrapper>
                  <StyledImg
                    src={artwork?.primaryimageurl}
                    placeholder="blur"
                  />
                </ImageWrapper>
              )}
              <StyledDetails>
                <CenteredFlex>
                  <h3>Artwork Details: </h3>
                  <DetailsFields>
                    {typedObjectEntries(fields).map(([key, value]) => (
                      <div key={key}>
                        {FieldsTitles[key]}:{" "}
                        <FieldValue>{checkIfHasProperty(value)}</FieldValue>
                      </div>
                    ))}
                  </DetailsFields>
                </CenteredFlex>
              </StyledDetails>
            </StyledContent>
          </>
        )}
      </CenteredFlex>
    </StyledRoot>
  );
};

export default ArtworkDetails;

const StyledRoot = styled.div`
  max-width: 100%;
  padding: 15px 50px;
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex: 1 1 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  height: 550px;
  max-width: 100%;
  object-fit: fill;
`;
const StyledDetails = styled.div`
  flex: 1 1 40%;
`;
const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #cccccc;
`;
const DetailsFields = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  font-size: 22px;
  font-weight: 600;

  > div {
    margin: 7px;
  }
`;
const FieldValue = styled.div`
  font-size: 20px;
  font-weight: 400;
  display: inline-flex;
`;
