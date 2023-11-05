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

  async function showContactDetails(id: number) {
    const token = getAccessTokenSilently()
    const contact = await getContactDetails(id, token)
    console.log(contact)
    setContact(contact)
  }

  return (
    <>
      <div className="foundAnimal" key={foundAnimal.id}>
        <img src={foundAnimal.photo} alt={foundAnimal.species} />
        <p>Species: {foundAnimal.species}</p>

        <IfAuthenticated>
          {!contact ? (
            <button
              value={foundAnimal.id as number}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                showContactDetails(e.target.value)
              }
            >
              See Contact Details
            </button>
          ) : (
            <div>
              <p>Name: {contact.userName}</p>
              <p>Email: {contact.userContact}</p>
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
