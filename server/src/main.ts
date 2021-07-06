import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import AppModule from './app.module';

const { NEST_PORT, REACT_PORT } = process.env;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: `http://localhost:${REACT_PORT}`,
		credentials: true,
	});
	app.use(cookieParser());
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(NEST_PORT);
}
bootstrap();
