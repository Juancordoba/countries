const { Router } = require('express')
const router = Router();

const {getCountries, getCountry,getNamesCountries} = require('../controllers/countries.controller')

router
.get('/', getCountries)
.get('/names',getNamesCountries)
.get('/:idPais',getCountry)

module.exports = router;