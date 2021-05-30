import React, { PureComponent } from 'react';
import styles from './BigForm.module.css';

class BigForm extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = () => {
		//this.props.children - I can access all the inputs that are nested in the form as props.
		this.props.children.map((child) => {});
	};

	render() {
		console.log(this.props.children);
		return (
			<form className={styles.form} autoComplete="off">
				<div className={styles.form__header}>
					<h1>Sign Up</h1>
				</div>
				<div className={styles.form__body}>
					{this.props.children.map((child) => ({
						...child,
						props: {
							...child.props,
							handleChange: this.handleChange,
							value: this.state[child.props.name]
						}
					}))}
				</div>

				<div className={styles.form__actions}>
					<button>Submit</button>
					<button>Reset</button>
				</div>
			</form>
		);
	}
}

export default BigForm;
