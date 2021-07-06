import * as dotenv from 'dotenv';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt = require('jsonwebtoken');

dotenv.config();

const { SECRET_KEY } = process.env;

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		try {
			const cookie = req.cookies;
			if (cookie.userId) {
				res.locals.userId = jwt.verify(cookie.userId, SECRET_KEY).userId;
			} else if (cookie.storeId) {
				res.locals.storeId = jwt.verify(cookie.storeId, SECRET_KEY).storeId;
			}
			res.locals.message = 'Success!';
			next();
		} catch (error) {
			res.send('You are not logged in!');
		}
		// next();
	}
}
