export interface IArtworks {
  info: IInfo;
  records: IArtwork[];
}

interface IInfo {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
  next: string;
}

export interface IArtwork {
  id: number;
  primaryimageurl: string;
  title: string;
  department: string;
  classification: string;
  period: number;
}

export interface GetArtworksProps {
  params: ArtworksParams;
}

interface ArtworksParams {
  fields: string;
  q: string;
  hasimage: number;
}

export interface ArtworkDetails extends IArtwork {
  accessionyear: number;
  technique: string;
  culture: string;
  dimensions: string;
  creditline: string;
  department: string;
  division: string;
  accessionmethod: string;
  places: ArtworkPlaces[];
}
interface ArtworkPlaces {
  displayname: string;
  type: string;
}
