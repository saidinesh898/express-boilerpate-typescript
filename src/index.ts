import express from 'express';
require('dotenv').config()
import { router } from './Routes';

const app: express.Application = express()
const port: number = parseInt(process.env.PORT|| '80') 

app.use(router)

app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})