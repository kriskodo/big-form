import React from "react";
import './App.css';
import BigForm from './components/BigForm/BigForm';
import InputField from './components/InputField/InputField';

function App() {
	return (
		<div>
			<BigForm>
				<InputField
					inputType={'text'}
					displayName='First Name'
					name='firstName'
					rules={{ required: true, maxLength: 50 }}
				/>
				<InputField
					inputType={'text'}
					displayName='Last Name'
					name='lastName'
					rules={{ required: true, maxLength: 50 }}
				/>
				<InputField
					inputType={'number'}
					displayName='Age'
					name='age'
					rules={{ required: true, maxLength: 50 }}
				/>
				<InputField
					inputType={'tel'}
					displayName='Phone number'
					name='phoneNumber'
					rules={{ required: true, maxLength: 50 }}
				/>
				<InputField
					inputType={'email'}
					displayName='Email'
					name='email'
					rules={{ required: true, maxLength: 50 }}
				/>
				<InputField
					inputType={'date'}
					displayName='Date of Birth'
					name='dateOfBirth'
					rules={{ required: true, maxLength: 50 }}
				/>
			</BigForm>
		</div>
	);
}

export default App;
