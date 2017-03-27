import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import TPropTypes from 'tproptypes';
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
		const deleteButton = this.props.onRemove ? <button className="ui button" onClick={this.props.onRemove}>Delete</button> : null;
		const approveButton = this.props.onApprove ? <button className="ui positive right button" onClick={this.props.onApprove}>Save</button> : null;
		const rejectButton = this.props.onReject ? <button className="ui black deny button" onClick={this.props.onReject}>Cancel</button> : null;

		const buttons = this.props.children ? (
			<div className={cn('ui', {container: this.props.container}, styles.buttonWrapper)}>
				{this.props.children}
			</div>
		) : (
			<div className={cn('ui', {container: this.props.container}, styles.buttonWrapper)}>
				{deleteButton}
				<div className={styles.rightButtons}>
					{approveButton}
					{rejectButton}
				</div>
			</div>
		);

		return (
			<div>
				<div className="ui divider"/>
				{buttons}
			</div>
		);
	}
}
