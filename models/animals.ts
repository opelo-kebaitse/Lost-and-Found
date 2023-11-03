//LostAnimal - returned from database

export interface LostAnimal {
  id: number
  name: string
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}
//NewLostAnimal --input from form to be posted to db

export interface NewLostAnimal {
  name: string
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}
//FoundAnimal -returned from database
export interface FoundAnimal {
  id: number
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}

//NewFoundAnimal -- input from form

export interface NewFoundAnimal {
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}
