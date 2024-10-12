import { HttpException, HttpStatus } from '@nestjs/common';

export default class SearchSpotifyApi {
  private spotifyURL: string;
  constructor() {
    this.spotifyURL = process.env.SPOTIFY_URL || '';
  }
  async search(query: string, type: string, authToken: string, limit: number) {
    console.log(limit);
    if (limit < 1 || limit > 50) {
      throw new HttpException(
        'O limite deve ser um número entre 1 e 50.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const resp = await fetch(
      `${this.spotifyURL}/v1/search?q=${query}&type=${type}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const respjs = await resp.json();
    console.log(respjs);
    if (resp.ok) {
      return respjs;
    }

    throw new HttpException(`Erro ao buscar ${type}`, HttpStatus.BAD_REQUEST);
  }
}
