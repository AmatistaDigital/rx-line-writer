const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');
const chalk = require('chalk');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rl = readline.createInterface({
  input : require('fs').createReadStream('../BDBM_01042016/BMFD016.TXT'),
});
const saveBatch = (list) => {
  const fieldNames = ['tipoBien',
  'claseBien',
  'codigoBien',
  'numeroBien',
  'codigoMarca',
  'anoFabricacion',
  'estilo',
  'codigoCategoria',
  'tipoBienInmueble',
  'numeroChasis',
  'numeroSerie',
  'codigoCarroceria',
  'capacidad',
  'pesoNeto',
  'pesoBruto',
  'pesoRemolque',
  'pesoVacio',
  'codigoColor',
  'codigoTraccion',
  'VIN',
  'tipoCabina',
  'tipoTecho',
  'numeroEjes',
  'longitudBien',
  'refaccionado',
  'convertido',
  'timeStamp',
  'claseTributaria'];
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      const object = {};
      _.each(fieldNames, (fieldName, i) => {
        object[fieldName] = splitLine[i].replace(/["']/g, '').trim();
      });
      return object;
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'bienmueble.vehiculo',
  }).then(() => {
    // eslint-disable-next-line
    const randomNumber = getRandomInt(0, 10);
    if (randomNumber < 2) {
      console.log(chalk.green('batch saved'));
    } else if (randomNumber < 5 ) {
      console.log(chalk.red('batch saved'));
    } else if (randomNumber < 7 ) {
      console.log(chalk.blue('batch saved'));
    } else {
      console.log(chalk.yellow('batch saved'));
    }
  }).catch((err) => {
    // eslint-disable-next-line
    console.log('batch ERROR');
    // eslint-disable-next-line
    console.log(err);
  });
};

Rx.Observable.fromEvent(rl, 'line')
    .takeUntil(Rx.Observable.fromEvent(rl, 'close'))
    .bufferTime(500)
    .subscribe(
      saveBatch,
      err => {
        // eslint-disable-next-line
        console.log("Error: %s", err)
      },
      () => {
        // eslint-disable-next-line
        console.log('collection successfully saved.');
      }
    );
