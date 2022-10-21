import { instance } from "../../../api/axios/instance";
import { constructURL } from "../helpers/constructURL";
import { ArtworkDetails, GetArtworksProps, IArtworks } from "./types";

export const ArtworksService = {
  async getArtworks({ params }: GetArtworksProps): Promise<IArtworks> {
    try {
      const data = await instance.get<IArtworks>(constructURL(), { params });

      return data?.data || [];
    } catch (e) {
      throw e;
    }
  },
  async getArtworkById(id?: string): Promise<ArtworkDetails> {
    try {
      const data = await instance.get<ArtworkDetails>(constructURL(id));

      return data?.data || [];
    } catch (e) {
      throw e;
    }
  },
};
