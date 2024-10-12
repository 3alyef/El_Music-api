import { Module } from '@nestjs/common';
import { SpotifyArtistNameResolver } from './spotify-artist-name.resolver';
import { SpotifyArtistNameService } from './spotify-artist-name.service';
import SearchSpotifyApi from './services/search-spotify-api.service';

@Module({
  providers: [
    SpotifyArtistNameResolver,
    SpotifyArtistNameService,
    SearchSpotifyApi,
  ],
})
export class SpotifyArtistNameModule {}
