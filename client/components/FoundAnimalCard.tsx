import { FoundAnimal, ContactDetail } from '../../models/animals'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { getContactDetails } from '../apis/animals'
import { useState } from 'react'

interface Props {
  foundAnimal: FoundAnimal
}

function FoundAnimalCard(props: Props) {
  const foundAnimal = props.foundAnimal
  const { getAccessTokenSilently } = useAuth0()
  const [contact, setContact] = useState<ContactDetail | null>(null)
  const [editing, setEditing] = useState(false)

  const initialFormData = {
    ownerName: '',
    ownerContact: '',
  }
  const [form, setForm] = useState(initialFormData)

  async function showContactDetails(id: number) {
    const token = getAccessTokenSilently()
    const contact = await getContactDetails(id, token)
    setContact(contact)
  }

  function handleShowForm() {
    setEditing(!editing)
  }

  function handleEdit(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleClose() {
    setEditing(!editing)
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(
      `someone wants to send ${form.ownerContact} to finder of ${foundAnimal.id}`
    )
  }

  return (
    <>
      <div className="foundAnimal" key={foundAnimal.id}>
        <img src={foundAnimal.photo} alt={`Lost ${foundAnimal.species}`} />
        <p>Species: {foundAnimal.species}</p>

        <IfAuthenticated>
          {!contact ? (
            <button onClick={() => showContactDetails(foundAnimal.id)}>
              See Contact Details
            </button>
          ) : (
            <div>
              <p>
                <strong>Contact Details</strong>
              </p>
              <p>Name: {contact.userName}</p>
              <p>Email: {contact.userContact}</p>
              <button onClick={() => handleShowForm()}>This is my pet</button>
            </div>
          )}
          {editing ? (
            <form>
              <p>
                <strong>Confirm your details:</strong>
              </p>
              <label htmlFor="ownerName">Name:</label>
              <input
                id="ownerName"
                name="ownerName"
                type="text"
                value={form.ownerName}
                onChange={handleEdit}
              />
              <label htmlFor="ownerContact">Email:</label>
              <input
                id="ownerContact"
                name="ownerContact"
                type="text"
                value={form.ownerContact}
                onChange={handleEdit}
              />
              <button
                onClick={handleSubmit}
                disabled={form.ownerName === '' || form.ownerContact === ''}
              >
                Send Details
              </button>
              <button onClick={handleClose}>Close</button>
            </form>
          ) : null}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <p>Login for more details</p>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default FoundAnimalCard
