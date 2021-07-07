import * as dotenv from 'dotenv';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt = require('jsonwebtoken');

dotenv.config();

const { SECRET_KEY } = process.env;

interface Payload {
	userId: string;
	iat: number;
	exp: number;
}

interface StorePayload {
	storeId: string;
	iat: number;
	exp: number;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		try {
			const cookie = req.cookies;
			if (cookie.userId) {
				const payload = <Payload>jwt.verify(cookie.userId, SECRET_KEY);
				res.locals.userId = payload.userId;
			} else if (cookie.storeId) {
				const payload = <StorePayload>jwt.verify(cookie.storeId, SECRET_KEY);
				res.locals.storeId = payload.storeId;
			}
			res.locals.message = 'Success!';
			next();
		} catch (error) {
			res.status(400);
			res.send('You are not logged in!');
		}
		// next();
	}
}
