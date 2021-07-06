import { Injectable } from '@nestjs/common';
import HashidsService from 'services/hashid/hashid.service';

@Injectable()
export default class HashReceipt {
	constructor(private hashidsService: HashidsService) {}

	code(property, direction) {
		const hashid = this.hashidsService;
		let type: string;
		let newProperty: string | number;
		if (direction === 'decode') {
			type = 'string';
		}
		if (direction === 'encode') {
			type = 'number';
		}
		if (typeof property === type) {
			newProperty = hashid[direction](property);
		}
		return newProperty;
	}

	hash(someReceipt, direction) {
		const receipt = { ...someReceipt };
		if ('id' in receipt) {
			receipt.id = this.code(receipt.id, direction);
		}
		if ('store' in receipt) {
			receipt.store.id = this.code(receipt.store.id, direction);
		}
		if ('category' in receipt) {
			receipt.category.id = this.code(receipt.category.id, direction);
		}
		if ('user' in receipt) {
			receipt.user.id = this.code(receipt.user.id, direction);
		}
		return receipt;
	}
}
