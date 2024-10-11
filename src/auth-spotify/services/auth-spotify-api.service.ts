import { HttpException, HttpStatus } from '@nestjs/common';

export default class AuthSpotifyApi {
  private client_id: string;
  private client_secret: string;
  constructor() {
    this.client_id = process.env.CLIENT_ID || '';
    this.client_secret = process.env.CLIENT_SECRET || '';
  }
  async auth() {
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');

    const buffer = Buffer.from(
      `${this.client_id}:${this.client_secret}`,
    ).toString('base64');

    const resp = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${buffer}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const respjs = await resp.json();

    if (resp.ok) {
      return respjs;
    }

    throw new HttpException(
      'Erro ao fazer login',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
