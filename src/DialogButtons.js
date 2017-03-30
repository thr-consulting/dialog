import React, {Component, PropTypes} from 'react';
import TPropTypes from 'tproptypes';
import {Divider, Button, Container} from 'semantic-ui-react';
import styles from './dialog.css';

/**
 * Standard set of buttons for use with Dialog.
 * @class
 * @memberOf module:addons/dialog
 * @property {module:addons/TPropTypes~reactElements} children - Override with custom buttons if needed.
 * @property {function} onApprove - Called when the dialog is approved.
 * @property {function} onReject - Called when the dialog is canceled.
 * @property {function} onRemove - Called when the delete action is clicked.
 * @property {bool} [container=true] - If true, applies the Semantic UI container class to the buttons.
 */
export default class DialogButtons extends Component {
	static propTypes = {
		children: TPropTypes.reactElements,
		onApprove: PropTypes.func,
		onReject: PropTypes.func,
		onRemove: PropTypes.func,
		container: PropTypes.bool,
	};

	static defaultProps = {
		container: true,
	};

	render() {
		const deleteButton = this.props.onRemove ? <Button onClick={this.props.onRemove}>Delete</Button> : null;
		const approveButton = this.props.onApprove ? <Button positive floated="right" onClick={this.props.onApprove}>Save</Button> : null;
		const rejectButton = this.props.onReject ? <Button color="black" onClick={this.props.onReject}>Cancel</Button> : null;
		const Wrapper = this.props.container ? Container : 'div';

		const buttonContainer = this.props.children ? (
			<Wrapper className={styles.buttonWrapper}>
				{this.props.children}
			</Wrapper>
		) : (
			<Wrapper className={styles.buttonWrapper}>
				{deleteButton}
				<div className={styles.rightButtons}>
					{approveButton}
					{rejectButton}
				</div>
			</Wrapper>
		);

		return (
			<div>
				<Divider/>
				{buttonContainer}
			</div>
		);
	}
}
