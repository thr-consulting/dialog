import React from 'react';
import {DialogSystem} from '../dist';

before(() => {
	sinon.stub(console, 'error').callsFake(warning => {
		throw new Error(warning);
	})
});
after(() => {
	console.error.restore()
});

describe('DialogSystem', () => {
	it('renders without error', () => {
		shallow(<DialogSystem/>);
	});
});
