import { FoundAnimal } from '../../models/animals'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { getContactDetails } from '../apis/animals'

interface Props {
  foundAnimal: FoundAnimal
}

function FoundAnimalCard(props: Props) {
  const foundAnimal = props.foundAnimal
  const { getAccessTokenSilently } = useAuth0()

  async function showContactDetails(id: number) {
    const token = getAccessTokenSilently()
    const contact = await getContactDetails(id, token)
    console.log(contact)
  }

  return (
    <>
      <div className="foundAnimal" key={foundAnimal.id}>
        <img src={foundAnimal.photo} alt={foundAnimal.species} />
        <p>Species: {foundAnimal.species}</p>

        <IfAuthenticated>
          <button
            value={foundAnimal.id as number}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              showContactDetails(e.target.value)
            }
          >
            See Contact Details
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <p>Login for more details</p>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default FoundAnimalCard
