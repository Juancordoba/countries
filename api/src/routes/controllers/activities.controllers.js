const {db,Country, Activity, Country_Activity} = require('../../db')

/** Ruta para obtener todas las actividades */
async function getActivities(req,res){
    const activities = await Activity.findAndCountAll({include : [Country], order : [['name','asc']]})
    res.json(activities)
}

async function addActivity(req,res){
    const {name, difficulty, duration, seasson} = req.body
    let {countries} = req.body
    const bulkCountries = []; 
    if(typeof(countries)==='string') countries = JSON.parse(countries)
    try{
        const activity = await Activity.create({name, difficulty, duration, seasson});
        for(i=0;i<countries.length; i++){
            bulkCountries.push({countryID : countries[i], activityId : activity.id})
        }
        await Country_Activity.bulkCreate(bulkCountries)
        res.json(activity)
    }catch(e){
        res.sendStatus(500)
    }
 }


 function delActivity(req,res){
    const id = req.body.activityId
    Activity.findOne({where : { id : id}, include : [Country]})
        .then(activity => activity.destroy())
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
}

function updateActivity(req, res){
    res.json('pending')
}

module.exports = {getActivities,addActivity,delActivity,updateActivity }