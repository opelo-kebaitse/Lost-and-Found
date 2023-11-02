import * as Path from 'node:path'

import express from 'express'
import lostAnimalsRoute from './routes/lostAnimalsRoute'
import foundAnimalsRoute from './routes/foundAnimalsRoute'

const server = express()
server.use(express.json())

// Mount the routes at /api endpoints
server.use('/api/v1/lost', lostAnimalsRoute)
server.use('/api/v1/found', foundAnimalsRoute)



if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
