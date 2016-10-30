const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');
const chalk = require('chalk');

const randomColor = [
  'red',
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rl = readline.createInterface({
  input : require('fs').createReadStream('../BDBM_01042016/BMFD033.TXT'),
});
const saveBatch = (list) => {
  const fieldNames = [
    'tomo',
    'asiento',
    'secuencia',
    'numero',
    'tomoTrasladoAHistoria',
    'asientoTrasladoAHistoria',
    'secuenciaTrasladoAHistoria',
    'tipoBien',
    'claseBien',
    'codigoBien',
    'numeroBien',
    'numeroDerecho',
    'tomoGravamenAfectado',
    'asientoGravamenAfectado',
    'secuenciaGravamenAfectado',
    'codigoTipo',
    'codigoGrado',
    'tomoConstitucion',
    'asientoConstitucion',
    'secuenciaConstitucion',
    'numeroFinca',
    'anoAgricola',
    'codigoEstado',
    'proporcionMontoTotal',
    'descrpicion',
    'timeStamp',
  ];
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      const object = {};
      _.each(fieldNames, (fieldName, i) => {
        if (splitLine[i]) {
          object[fieldName] = splitLine[i].replace(/["']/g, '').trim();
        }
      });
      return object;
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'bienmueble.garantia.historico',
  }).then(() => {
    const randomNumber = getRandomInt(0, 10);
    // eslint-disable-next-line
    console.log(chalk[randomColor[randomNumber]]('batch saved'));
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
