import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphqlModule } from './graphql/graphql.module';
import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { SpotifyArtistNameModule } from './spotify-artist-name/spotify-artist-name.module';

@Module({
  imports: [
    GraphqlModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development.local', '.env.example'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL || ''),
    SpotifyAuthModule,
    SpotifyArtistNameModule,
  ],
})
export class AppModule {}
