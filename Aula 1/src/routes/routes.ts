import { Express } from 'express';
import express from 'express'
import users from './users.ts'

export default function (app: Express) {
    app.use(express.json()).use('/usuarios', users)
}

