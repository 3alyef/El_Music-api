import { Injectable } from '@nestjs/common';
import AuthSpotifyApi from './services/auth-spotify-api.service';

@Injectable()
export class AuthSpotifyService {
  constructor(private readonly authSpotifyApiService: AuthSpotifyApi) {}
  async login() {
    return await this.authSpotifyApiService.auth();
  }
}
