import React, {Children} from 'react';
import {Segment, Container} from 'semantic-ui-react';
import TPropTypes from 'tproptypes';

/**
 * A container component for custom slide up dialogs.
 * @class
 * @memberOf module:addons/dialog
 * @property {module:addons/TPropTypes~reactElements} children - Dialog internal components
 */
export default function Dialog(props) {
	if (Children.count(props.children) === 1) {
		return (
			<Segment basic>
				<Container>
					{props.children}
				</Container>
			</Segment>
		);
	}

	const children = Children.toArray(props.children);
	let buttons;
	if (children[children.length - 1].type.name === 'DialogButtons') {
		buttons = children.pop();
	}

	return (
		<Segment basic>
			<Container>
				{children}
			</Container>
			{buttons}
		</Segment>
	);
}

Dialog.propTypes = {
	children: TPropTypes.reactElements,
};
