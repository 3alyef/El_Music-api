import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;

  const PORT = Number(process.env.PORT) || 4000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ALLOW_ORIGIN || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // cookies ou sessões
  });

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minute
      max: 50, // Limit each IP to 50 requests per `window` (here, per 1 minute)
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
      handler: (_r, res, _n, options) => {
        res.status(options.statusCode).json({
          message: 'Too many requests. Wait a minute.',
        });
      },
    }),
  );

  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
