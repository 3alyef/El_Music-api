import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { Request } from 'express';
@Controller('spotify-music')
export class SpotifyMusicController {
  constructor(private readonly spotifyMusicService: SpotifyMusicService) {}

  @Post('auth')
  login() {
    return this.spotifyMusicService.login();
  }

  @Get('get-artist-by-name')
  getArtistByName(
    @Req() request: Request,
    @Query('name') name: string,
    @Query('limit') limit?: string,
  ) {
    const authToken = request.headers.authorization;
    if (!name || !authToken) {
      throw new HttpException(
        'name ou authToken incompletos',
        HttpStatus.BAD_REQUEST,
      );
    }

    // buscar artista
    return this.spotifyMusicService.getArtistByName(
      name,
      authToken,
      Number(limit),
    );
  }
}
