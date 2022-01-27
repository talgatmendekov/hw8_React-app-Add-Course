import { useState } from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const UserList = (props) => {
	const [userModal, setUserModal] = useState(null)
	const [data, setData] = useState([])

	const showModalHandler = (event) => {
		setData(props.users.filter((el) => el.id !== event.target.id))
		setUserModal({
			title: 'Removing a user !',
			message: 'Do you really want to remove?',
		}
			
		)
	}

	const closeModalHandler = () => {
		setUserModal(null)
	}

	const removeInput = (event) => {
	if (event.target.type === 'button'){
		props.onGet(data)
		setUserModal(null)
	}
		
	}

	let usersContent = <h3 style={{color: 'red'}}>No users found</h3>

	if (props.users.length > 0) {
		usersContent = props.users.map((user) => {
			return (
				<li key={user.id}>
					{user.name} ({user.age} years old)
					<Button onClick={showModalHandler} id={user.id}>
						delete
					</Button>
				</li>
			)
		})
	}
	return (
		<>
			{userModal && (
				<ErrorModal
					title={userModal.title}
					message={userModal.message}
					onConfirm={removeInput}
				>
					<Button onClick={closeModalHandler}>Cancel</Button>
				</ErrorModal>
			)}
			<Card className={styles.users}>
				<ul>{usersContent}</ul>
			</Card>
		</>
	)
}

export default UserList
