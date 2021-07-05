import { Injectable } from '@nestjs/common';
import Hashids = require('hashids');

const { HASHID_SALT } = process.env;
@Injectable()
export default class HashidsService {
	private readonly hashids = new Hashids(HASHID_SALT, 5);

	encode(id: number): string {
		return this.hashids.encode(id);
	}

	decode(id: string): number {
		return Number(this.hashids.decode(id));
	}
}
