const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');

const rl = readline.createInterface({
  input: require('fs').createReadStream('./BDPJ_01042016/MERCANTIL_PERSONASFISICAS.TXT'),
});
const saveBatch = (list) => {
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      return {
        tipoId        : splitLine[0],
        numId         : splitLine[1],
        consecutivoId : splitLine[2],
        contador      : splitLine[3],
        nombre        : splitLine[4],
        apellido1     : splitLine[5],
        apellido2     : splitLine[6],
      }
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'mercantil.personaFisica',
  }).then(() => {
    console.log('batch saved');
  }).catch((err) => {
    console.log('batch ERROR');
    console.log(err);
  })
}

const source = Rx.Observable.fromEvent(rl, 'line')
    .takeUntil(Rx.Observable.fromEvent(rl, 'close'))
    .bufferTime(500)
    .subscribe(
      saveBatch,
      err => console.log("Error: %s", err),
      () => {
        console.log('collection successfully saved.');
      }
    );
