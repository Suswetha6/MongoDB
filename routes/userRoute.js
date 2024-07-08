const express = require('express')
const router = require('express').Router()
const userControllers = require('../controllers/userControllers.js')


router.post( '/',userControllers.createUser)

router.get( '/',userControllers.getAllUsers)

router.get( '/:id',userControllers.getUser)

router.delete('/:id',userControllers.deleteUser)

module.exports =  router