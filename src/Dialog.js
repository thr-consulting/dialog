import React, {Children} from 'react';
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
			<div className="ui basic segment">
				<div className="ui container">
					{props.children}
				</div>
			</div>
		);
	}

	const children = Children.toArray(props.children);
	let buttons;
	if (children[children.length - 1].type.name === 'DialogButtons') {
		buttons = children.pop();
	}

	return (
		<div className="ui basic segment">
			<div className="ui container">
				{children}
			</div>
			{buttons}
		</div>
	);
}

Dialog.propTypes = {
	children: TPropTypes.reactElements,
};
