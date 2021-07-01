import { Injectable } from '@nestjs/common';
import Hashids = require('hashids');
import { ObjNumberId, ObjStringId } from './hashid.interface';

const { HASHID_SALT } = process.env;
@Injectable()
export default class HashidsService {
	private readonly hashids = new Hashids(HASHID_SALT, 5);

	encode(objNumberId: ObjNumberId): ObjStringId {
		return { ...objNumberId, id: this.hashids.encode(objNumberId.id) };
	}

	decode(id: string): number {
		return Number(this.hashids.decode(id));
	}
}
