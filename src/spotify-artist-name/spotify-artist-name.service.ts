import { Injectable } from '@nestjs/common';
import SearchSpotifyApi from './services/search-spotify-api.service';

@Injectable()
export class SpotifyArtistNameService {
  constructor(private readonly searchSpotifyApi: SearchSpotifyApi) {}
  async getArtistByName(name: string, authToken: string, limit?: number) {
    return await this.searchSpotifyApi.search(
      name,
      'artist',
      authToken,
      limit || 50,
    );
  }
}
