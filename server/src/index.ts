require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import {createConnection} from 'typeorm'

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'gaminggear',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize: true,

    })

    const app = express()

    app.listen(4000, () => console.log('Server started on port 4000'))
}

main().catch(error => console.log(error))