const {db,Country, Activity} = require('../../db')
const { Op } = require("sequelize");

/* Ruta para obtener un pais y sus actividades */
async function getCountry(req,res) {     
    const country = await Country.findOne({where : {ID : req.params.idPais.toUpperCase()},include:[Activity]});
    res.json(country); 
}

async function getNamesCountries(req, res){ 
    const countries = await Country.findAll({attributes : ['ID','name'], order : [['name','asc']]});
    res.json(countries)
}

/* Ruta para paginar y ordenar los paises */
async function getCountries(req, res){ 

    !req.query.regions ? regions = [] : regions = JSON.parse(req.query.regions);
    !req.query.activities_filter ? activities = [] : activities = JSON.parse(req.query.activities_filter);

    offset = Number(req.query.page)*Number(req.query.limit) || 0;
    limit = Number(req.query.limit) || 10;

    if(!regions.length) regions = ['Asia','Oceania','Africa','Polar','Europe','Americas'];
    const attributes = ['ID', 'name','flag','region','population'];
    const name = req.query.filter || "";
    const q_orderBy = req.query.orderBy || "name"
    const q_order = req.query.order || "ASC"
    let order = [[q_orderBy,q_order]]
   
    const countries = await Country.findAndCountAll(
                            {   attributes, 
                                include : activities.length===0? [] : [{ model: Activity, through: 'countries-activities',attributes:[], where : { id : {[Op.in] : activities} }}], 
                                where : 
                                {
                                    [Op.and] : [
                                                { name : {[Op.iLike] : `%${name}%` }},
                                                { region : {[Op.in] : regions}},
                                            ]
                                },
                                offset,
                                limit,
                                order
                           });
    res.json(countries)
}

module.exports = {getCountries, getCountry,getNamesCountries}