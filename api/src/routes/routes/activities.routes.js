const { Router } = require('express');
const router = Router();

const {getActivities, addActivity,delActivity,updateActivity} = require('../controllers/activities.controllers')

router
.get("/",getActivities)
.post('/',addActivity)
.delete('/',delActivity)
.put('/',updateActivity)

module.exports = router;