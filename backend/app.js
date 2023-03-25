const express = require('express');

const app = express();

app.use('/api/tbcustomers', (req, res, next) => {
    const tbcustomers = [
        {"id":1,"email":"isidro_von@hotmail.com","first":"Torrey","last":"Veum","company":"Google","created_at":"2014-12-25T04:06:27.981Z","country":"Switzerland"},
        {"id":2,"email":"frederique19@gmail.com","first":"Micah","last":"Sanford","company":"Google","created_at":"2014-07-03T16:08:17.044Z","country":"Democratic People's Republic of Korea"},
        {"id":3,"email":"fredy54@gmail.com","first":"Hollis","last":"Swift","company":"Microsoft","created_at":"2014-08-18T06:15:16.731Z","country":"Tunisia"},
        {"id":4,"email":"braxton29@hotmail.com","first":"Perry","last":"Leffler","company":"Microsoft","created_at":"2014-07-10T11:31:40.235Z","country":"Chad"},
        {"id":5,"email":"turner59@gmail.com","first":"Janelle","last":"Hagenes","company":"Amazon","created_at":"2014-04-21T15:05:43.229Z","country":"Swaziland"},
        {"id":6,"email":"halie47@yahoo.com","first":"Charity","last":"Bradtke","company":"Google","created_at":"2014-09-21T21:59:18.892Z","country":"Lebanon"},
        {"id":7,"email":"loren_yundt@gmail.com","first":"Dejah","last":"Kshlerin","company":"Facebook","created_at":"2014-11-11T12:20:53.154Z","country":"Egypt"},
        {"id":8,"email":"kenton_macejkovic80@hotmail.com","first":"Ellen","last":"Schaefer","company":"Google","created_at":"2014-07-23T02:00:28.649Z","country":"Israel"},
        {"id":9,"email":"pascale5@yahoo.com","first":"Sven","last":"Funk","company":"Facebook","created_at":"2014-04-11T12:43:28.977Z","country":"Macao"},
        {"id":10,"email":"frank34@yahoo.com","first":"Ryleigh","last":"Cole","company":"Google","created_at":"2014-10-18T05:50:28.626Z","country":"Congo"},
        {"id":11,"email":"harry65@hotmail.com","first":"Cooper","last":"Grimes","company":"Apple","created_at":"2014-04-29T06:41:20.214Z","country":"Reunion"},
        {"id":12,"email":"kiana.schowalter@gmail.com","first":"Esteban","last":"Homenick","company":"Google","created_at":"2014-12-29T18:46:35.269Z","country":"Guadeloupe"},
        {"id":13,"email":"josh_batz60@gmail.com","first":"Lucinda","last":"Waters","company":"Amazon","created_at":"2015-03-13T12:15:50.844Z","country":"Lebanon"},
        {"id":14,"email":"zula36@hotmail.com","first":"Jarvis","last":"Grimes","company":"Amazon","created_at":"2014-04-23T23:56:11.268Z","country":"Ghana"},
        {"id":15,"email":"romaine21@gmail.com","first":"Jordon","last":"Turcotte","company":"Facebook","created_at":"2014-07-13T00:07:36.299Z","country":"Serbia"},
        {"id":16,"email":"abdul3@hotmail.com","first":"Marques","last":"Bins","company":"Microsoft","created_at":"2014-04-10T14:07:26.141Z","country":"Sudan"},
        {"id":17,"email":"van39@hotmail.com","first":"Edgar","last":"Jaskolski","company":"Amazon","created_at":"2014-11-18T22:42:23.788Z","country":"Wallis and Futuna"},
        {"id":18,"email":"emie_corkery82@yahoo.com","first":"Adell","last":"Rodriguez","company":"Facebook","created_at":"2014-07-19T07:19:38.388Z","country":"Sierra Leone"},
        {"id":19,"email":"alexis62@hotmail.com","first":"Madonna","last":"Luettgen","company":"Amazon","created_at":"2014-08-25T04:29:45.139Z","country":"Namibia"},
        {"id":20,"email":"lucius_hills53@yahoo.com","first":"Andre","last":"Huel","company":"Amazon","created_at":"2014-08-22T22:56:27.222Z","country":"Georgia"},
        {"id":21,"email":"jeanette.leannon29@hotmail.com","first":"Darrin","last":"Larson","company":"Microsoft","created_at":"2014-09-01T21:22:39.559Z","country":"Lebanon"},
        {"id":22,"email":"concepcion_kiehn@hotmail.com","first":"Johann","last":"Hintz","company":"Amazon","created_at":"2014-12-29T18:29:33.150Z","country":"Congo"},
        {"id":23,"email":"blaze84@yahoo.com","first":"Cruz","last":"Harber","company":"Amazon","created_at":"2014-10-23T09:57:26.941Z","country":"Lesotho"},
        {"id":24,"email":"vanessa27@hotmail.com","first":"Melba","last":"Stiedemann","company":"Amazon","created_at":"2014-09-26T10:55:49.642Z","country":"Andorra"},
        {"id":25,"email":"gay_quigley98@gmail.com","first":"Bonita","last":"Hickle","company":"Amazon","created_at":"2015-03-03T13:32:26.071Z","country":"Congo"},
        {"id":26,"email":"mireille.conroy96@hotmail.com","first":"Kali","last":"Bailey","company":"Amazon","created_at":"2014-12-13T01:39:35.925Z","country":"Tuvalu"},
        {"id":27,"email":"candido.cormier89@gmail.com","first":"Kristy","last":"Quigley","company":"Apple","created_at":"2014-06-01T05:27:07.870Z","country":"Burkina Faso"},
        {"id":28,"email":"lola_altenwerth82@yahoo.com","first":"Leanna","last":"Dach","company":"Amazon","created_at":"2014-09-19T09:39:20.201Z","country":"Bahamas"},
        {"id":29,"email":"willie36@hotmail.com","first":"Hannah","last":"O'Keefe","company":"Google","created_at":"2014-12-02T23:43:36.414Z","country":"Guam"},
        {"id":30,"email":"minerva10@gmail.com","first":"Melyna","last":"Carroll","company":"Google","created_at":"2014-05-29T13:39:21.805Z","country":"Indonesia"},
        {"id":31,"email":"peyton_mante@yahoo.com","first":"Rashawn","last":"Mayer","company":"Apple","created_at":"2014-08-22T09:24:22.491Z","country":"El Salvador"},
        {"id":32,"email":"trinity_fay@yahoo.com","first":"Rodrigo","last":"Huel","company":"Amazon","created_at":"2015-02-28T06:22:57.581Z","country":"Gabon"},
        {"id":33,"email":"reilly.kiehn6@hotmail.com","first":"Bud","last":"Raynor","company":"Amazon","created_at":"2014-06-08T04:17:14.965Z","country":"Hungary"},
        {"id":34,"email":"shawna_walsh47@yahoo.com","first":"Estefania","last":"Parisian","company":"Amazon","created_at":"2014-04-10T06:25:32.109Z","country":"Guyana"},
        {"id":35,"email":"retha28@hotmail.com","first":"Crawford","last":"Paucek","company":"Amazon","created_at":"2014-11-09T22:43:45.729Z","country":"Cameroon"},
        {"id":36,"email":"nathen_mckenzie60@gmail.com","first":"Cale","last":"Zieme","company":"Facebook","created_at":"2014-11-12T09:04:11.787Z","country":"Sweden"},
        {"id":37,"email":"mara75@hotmail.com","first":"Ike","last":"Schimmel","company":"Apple","created_at":"2014-05-26T22:00:03.155Z","country":"Bhutan"},
        {"id":38,"email":"adonis_ankunding@gmail.com","first":"Samara","last":"Labadie","company":"Amazon","created_at":"2015-03-09T12:43:23.096Z","country":"Holy See (Vatican City State)"},
        {"id":39,"email":"newton.schultz@hotmail.com","first":"Joel","last":"Volkman","company":"Facebook","created_at":"2015-03-21T10:58:45.257Z","country":"United States of America"},
        {"id":40,"email":"neva.pollich30@yahoo.com","first":"Cali","last":"Champlin","company":"Amazon","created_at":"2014-10-26T13:31:54.321Z","country":"Canada"},
        {"id":41,"email":"lindsay.weber@yahoo.com","first":"Ahmed","last":"Klocko","company":"Amazon","created_at":"2015-02-06T05:21:25.142Z","country":"Grenada"},
        {"id":42,"email":"kira_feil@yahoo.com","first":"Presley","last":"Wuckert","company":"Amazon","created_at":"2014-10-11T02:49:59.159Z","country":"Bangladesh"},
        {"id":43,"email":"lew.blick34@yahoo.com","first":"Bell","last":"Sporer","company":"Apple","created_at":"2015-03-18T19:33:39.840Z","country":"Poland"},
        {"id":44,"email":"reva.lindgren84@yahoo.com","first":"Ola","last":"Cole","company":"Microsoft","created_at":"2014-10-29T19:12:37.946Z","country":"Bouvet Island (Bouvetoya)"},
        {"id":45,"email":"harley20@hotmail.com","first":"Cleo","last":"Sanford","company":"Facebook","created_at":"2014-10-19T13:15:38.999Z","country":"Somalia"},
        {"id":46,"email":"ferne.rempel0@hotmail.com","first":"Bridgette","last":"Harris","company":"Microsoft","created_at":"2014-12-21T01:27:58.696Z","country":"Brazil"},
        {"id":47,"email":"noemy.schumm13@hotmail.com","first":"Lavinia","last":"Schmitt","company":"Amazon","created_at":"2014-06-20T05:19:49.791Z","country":"Barbados"},
        {"id":48,"email":"leilani.robel@yahoo.com","first":"Lionel","last":"Johns","company":"Amazon","created_at":"2014-10-17T20:33:51.890Z","country":"Bhutan"},
        {"id":49,"email":"russ.bogan28@hotmail.com","first":"Olen","last":"King","company":"Amazon","created_at":"2014-06-02T23:49:48.132Z","country":"Monaco"},
        {"id":50,"email":"caitlyn.friesen@hotmail.com","first":"Icie","last":"Beahan","company":"Amazon","created_at":"2014-07-23T16:48:06.206Z","country":"Martinique"}
    ];
    res.status(200).json(tbcustomers);
});


/*app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});*/

module.exports = app;