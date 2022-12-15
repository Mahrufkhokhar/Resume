const express = require('express')
const router = express.Router()
const {homeController} = require('../controller/homeController')
const {contactController} = require('../controller/contactController')
const {servicesController} = require('../controller/servicesController')
const {skillController} = require('../controller/skillController')



router.get('/home', homeController)
router.get('/contact', contactController)
router.get('/services', servicesController)
router.get('/skill', skillController)


module.exports = router