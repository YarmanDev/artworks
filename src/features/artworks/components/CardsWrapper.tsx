import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { ArtworksService } from "../api/ArtworksService";
import { GET_ARTWORKS_QUERY } from "../api/constants";
import { ArtworksCard } from "./ArtworksCard";
import { StyledInfo } from "./StyledInfo";

interface IProps {
  inputValue?: string;
  isShowImage: boolean;
}

const RequestedFields = [
  "primaryimageurl",
  "department",
  "classification",
  "period",
  "title",
  "images",
];

export const CardsWrapper = ({ inputValue, isShowImage }: IProps) => {
  const params = {
    size: 8,
    fields: RequestedFields.join(","),
    q: inputValue ?? "",
    hasimage: +isShowImage,
  };

  const {
    data: artworksData,
    isLoading,
    isError,
  } = useQuery([GET_ARTWORKS_QUERY, inputValue, isShowImage], () =>
    ArtworksService.getArtworks({ params })
  );

  if (isError) return <StyledInfo text="Ooops, something went wrong" />;
  if (isLoading) return <StyledInfo text="Loading..." />;

  return artworksData?.records.length ? (
    <>
      <StyledRoot>
        {artworksData.records.map((item) => (
          <ArtworksCard
            key={item.id}
            artwork={item}
            isShowImage={isShowImage}
          />
        ))}
      </StyledRoot>
      <GeneralInfo>
        <div>Total amount of record: {artworksData.info.totalrecords}</div>
        <div>Total amount of pages: {artworksData.info.pages}</div>
      </GeneralInfo>
    </>
  ) : (
    <StyledInfo text="No results found" />
  );
};

const StyledRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 95%;
  gap: 20px;
  padding-top: 35px;
`;

const GeneralInfo = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 20px;
`;
