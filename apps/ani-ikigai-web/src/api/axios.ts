import axiosPackage, { AxiosResponse } from 'axios';

export const axios = axiosPackage.create({
  baseURL: 'http://localhost:3000', // Replace with your API's base URL
});

export interface RecentReleaseResponse {
  animeId: string;
  episodeId: string;
  animeTitle: string;
  episodeNum: string;
  subOrDub: string;
}

export async function fetchRecentRelease(
  page: number,
  type: string
): Promise<RecentReleaseResponse> {
  try {
    const response: AxiosResponse<RecentReleaseResponse> = await axios.get(
      '/recent-release',
      {
        params: {
          page,
          type,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchResponse {
  // Define the structure of your response data here
}

export async function fetchSearchResults(
  keyw: string,
  page: number
): Promise<SearchResponse> {
  try {
    const response: AxiosResponse<SearchResponse> = await axios.get('/search', {
      params: {
        keyw,
        page,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NewSeasonResponse {
  // Define the structure of your response data here
}

export async function fetchNewSeason(page: number): Promise<NewSeasonResponse> {
  try {
    const response: AxiosResponse<NewSeasonResponse> = await axios.get(
      '/new-season',
      {
        params: {
          page,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PopularAnimeResponse {
  // Adjust according to the actual data structure
}

export async function fetchPopularAnime(
  page: number
): Promise<PopularAnimeResponse> {
  try {
    const response: AxiosResponse<PopularAnimeResponse> = await axios.get(
      '/popular',
      {
        params: {
          page,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error);
    throw error;
  }
}

export async function fetchAnimeMovies(
  page: number,
  aph: string
): Promise<AnimeMoviesResponse> {
  try {
    const response: AxiosResponse<AnimeMoviesResponse> = await axios.get(
      '/anime-movies',
      {
        params: {
          page,
          aph,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TopAiringAnimeResponse {
  // Define the structure based on your expected response
}

export async function fetchTopAiringAnime(
  page: number
): Promise<TopAiringAnimeResponse> {
  try {
    const response: AxiosResponse<TopAiringAnimeResponse> = await axios.get(
      '/top-airing',
      {
        params: {
          page,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SeasonDataResponse {
  // Define the structure of the data you expect to receive
}

export async function fetchSeasonData(
  season: string,
  page: number
): Promise<SeasonDataResponse> {
  try {
    const response: AxiosResponse<SeasonDataResponse> = await axios.get(
      `/season/${season}`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GenreDataResponse {
  // Adapt this interface to the data structure you expect to receive
}

export async function fetchGenreData(
  genre: string,
  page: number
): Promise<GenreDataResponse> {
  try {
    const response: AxiosResponse<GenreDataResponse> = await axios.get(
      `/genre/${genre}`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnimeDetailsResponse {
  // Define the expected structure of the response data here
}

export async function fetchAnimeDetails(
  id: string
): Promise<AnimeDetailsResponse> {
  try {
    const response: AxiosResponse<AnimeDetailsResponse> = await axios.get(
      `/anime-details/${id}`
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// Define the expected structure of your data
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface M3U8Response {
  // Adjust based on actual data structure returned by your scrapeM3U8 function
}

export async function fetchM3U8(id: string): Promise<M3U8Response> {
  try {
    const response: AxiosResponse<M3U8Response> = await axios.get(
      `/vidcdn/watch/${id}`
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StreamSBResponse {
  // Define the structure based on the data you expect to receive
}

export async function fetchStreamSB(id: string): Promise<StreamSBResponse> {
  try {
    const response: AxiosResponse<StreamSBResponse> = await axios.get(
      `/streamsb/watch/${id}`
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThreadResponse {
  // Adapt to actual response structure
}

export async function fetchThread(
  episodeId: string,
  page?: number
): Promise<ThreadResponse> {
  try {
    const response: AxiosResponse<ThreadResponse> = await axios.get(
      `/thread/${episodeId}`,
      { params: { page } }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error fetching thread data:', error.response);
    throw error;
  }
}

export interface DownloadLinksResponse {
  message: string;
}

export async function fetchDownloadLinks(
  episodeId: string
): Promise<DownloadLinksResponse> {
  try {
    const response: AxiosResponse<DownloadLinksResponse> = await axios.get(
      `/download-links/${episodeId}`
    );
    return response.data;
  } catch (error: any) {
    console.error('Axios error:', error.response);
    throw error;
  }
}
