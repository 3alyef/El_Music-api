import { Controller, Post } from '@nestjs/common';
import { AuthSpotifyService } from './auth-spotify.service';

@Controller('auth-spotify')
export class AuthSpotifyController {
  constructor(private readonly authSpotifyService: AuthSpotifyService) {}

  @Post('auth')
  login() {
    return this.authSpotifyService.login();
  }
}
