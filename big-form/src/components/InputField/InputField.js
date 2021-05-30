import React, { Component, Fragment } from 'react';
import withValidations from '../../HOC/withValidations';
import styles from './InputField.module.css';

export class InputField extends Component {
	render() {
		const { displayName, name, inputType, value, onChange, onBlur, onFocus } = this.props;
		return (
			<Fragment>
				<label className={styles.form__label}>
					<span>{displayName}</span>
					<input
						type={inputType}
						name={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						className={styles.form__input}
						autoComplete="off"
					/>
				</label>
			</Fragment>
		);
	}
}

export default withValidations(InputField);
