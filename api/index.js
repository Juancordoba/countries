//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const {Country} = require('./src/db')

// Syncing all the models at once.
conn.sync({ force: false }).then( async () => {
  const countries = await Country.findAndCountAll();
  if(!countries.count){
    let cont = 0;
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result => {
      //recorro el array e inserto en la base
      result.data.map(country => {
        cont++;
        Country.create({
                          "ID" : country.alpha3Code, 
                          "name" : country.name, 
                          "flag": country.flag, 
                          "region" : country.region, 
                          "capital":country.capital, 
                          "subregion": country.subregion, 
                          "area" : country.area, 
                          "population": country.population
                        })
      });
    })
    .then(() => {
      console.log(`${cont} paises importados`)
      listen();
    })
    .catch(error => console.log('error al importar los paises'))
  } else {
    console.log(`${countries.count} paises existentes en la base de datos`)
    listen();
  }  
});


function listen(){
  server.listen(3001, () => {
    console.log('%s listening at 3001', server.name); // eslint-disable-line no-console
  });
}
