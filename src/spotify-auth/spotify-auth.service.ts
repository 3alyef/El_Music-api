import { Injectable } from '@nestjs/common';
import { AuthSpotifyApi } from './services/auth-spotify-api.service';
@Injectable()
export class SpotifyAuthService {
  constructor(private readonly authSpotifyApiService: AuthSpotifyApi) {}
  async generate() {
    return await this.authSpotifyApiService.auth();
  }
}
