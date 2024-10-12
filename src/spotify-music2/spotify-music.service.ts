import { Injectable } from '@nestjs/common';
import AuthSpotifyApi from './services/auth-spotify-api.service';
import SearchSpotifyApi from './services/search-spotify-api.service';

@Injectable()
export class SpotifyMusicService {
  constructor(
    private readonly authSpotifyApiService: AuthSpotifyApi,
    private readonly searchSpotifyApi: SearchSpotifyApi,
  ) {}
  async login() {
    return await this.authSpotifyApiService.auth();
  }
  async getArtistByName(name: string, authToken: string, limit?: number) {
    return await this.searchSpotifyApi.search(
      name,
      'artist',
      authToken,
      limit || 50,
    );
  }
}
