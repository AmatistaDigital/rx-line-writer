const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');

const rl = readline.createInterface({
  input : require('fs').createReadStream('../BDPJ_01042016/MERCANTIL_CAPITALES.TXT'),
});
const saveBatch = (list) => {
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      return {
        tipoId            : splitLine[0],
        claseId           : splitLine[1],
        consecutivoId     : splitLine[2],
        consecutivoTitulo : splitLine[3],
        claseAccion       : splitLine[4],
        tipoCapital       : splitLine[5],
        tipoMoneda        : splitLine[6],
        monto             : splitLine[7],
        cantidad          : splitLine[8],
        tomo              : splitLine[9],
        asiento           : splitLine[10],
        consecutivo       : splitLine[11],
        secuencia         : splitLine[12],
        fechaInscripcion  : splitLine[13],
        horaInscripcion   : splitLine[14],
        descripcion       : splitLine[15],
      };
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'mercantil.capital',
  }).then(() => {
    // eslint-disable-next-line
    console.log('batch saved');
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
