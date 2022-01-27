import { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers'

const AddUser = (props) => {
	const [userName, setuserName] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState(null)

	const userNameChangeHandler = (event) => {
		setuserName(event.target.value)
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value)
	};

	const addUserHandler = (event) => {
		event.preventDefault()
		if (userName.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			})
			return
		}

		if (+age < 1) {
			setError({
				title: 'invalid input',
				message: 'Please enter a valid age (More than zero)',
			})
			return
		}

		props.onAddUser(userName, age)

		setuserName('')
		setAge('')
	};  

	const errorHandler = () => {
		setError(null)
	}

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirms={errorHandler}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={userName}
						onChange={userNameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='number'
						value={age}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	)
}

export default AddUser
