import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import FoundAnimalList from './components/FoundAnimalList.tsx'
import LostAnimalList from './components/LostAnimalList.tsx'

export const routes = createRoutesFromElements(

<Route path="/" element={<App />}>
  <Route index element={<Home/>} />
  <Route path="found-animals" element={<FoundAnimalList />} />
  <Route path="lost-animals" element={<LostAnimalList />} />
</Route>

)