import express from 'express'

export const router: express.Router = express.Router()

router.get('/', (req:express.Request, res: express.Response)=> {

    res.status(200).send("Helloo Express")
})

