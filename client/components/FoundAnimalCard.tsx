import { FoundAnimal, ContactDetail } from '../../models/animals'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { getContactDetails } from '../apis/animals'
import React, { useState } from 'react'
interface Props {
  foundAnimal: FoundAnimal
}

function FoundAnimalCard(props: Props) {
  const foundAnimal = props.foundAnimal
  const { getAccessTokenSilently } = useAuth0()
  const [contact, setContact] = useState<ContactDetail | null>(null)

  async function showContactDetails(id: number) {
    const token = getAccessTokenSilently()
    const contact = await getContactDetails(id, token)
    setContact(contact)
  }

  function handleShowForm(id: number) {
    console.log(`someone wants to send contact for ${id}`)
  }

  return (
    <>
      <div className="foundAnimal" key={foundAnimal.id}>
        <img src={foundAnimal.photo} alt={foundAnimal.species} />
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
              <button onClick={() => handleShowForm(foundAnimal.id)}>
                This is my pet
              </button>
            </div>
          )}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <p>Login for more details</p>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default FoundAnimalCard
