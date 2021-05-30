import React, { Fragment } from 'react';
import validateField from '../utils/validateField';

const withValidations = (WrappedComponent) => {
	class WithValidations extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				errorMessage: ''
			};
		}

		handleBlur = (e) => {
			this.setState({
				errorMessage: validateField(this.props.value, e.target.type, this.props.rules, this.props.displayName)
			});
		};

		onFocus = (e) => {
			// ...
		};

		render() {
			return (
				<Fragment>
					{this.state.errorMessage && <p className={''}>{this.state.errorMessage}</p>}
					<WrappedComponent
						{...this.props}
						value={this.props.value || ''}
						onChange={this.props.handleChange}
						onBlur={this.handleBlur}
						onFocus={this.handleFocus}
					/>
				</Fragment>
			);
		}
	}

	return WithValidations;
};

export default withValidations;
