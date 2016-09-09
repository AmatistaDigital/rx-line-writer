const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');

const rl = readline.createInterface({
  input : require('fs').createReadStream('../BDPJ_01042016/MERCANTIL_NOMBRAMIENTOS.TXT'),
});
const saveBatch = (list) => {
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      return {
        tipoId              : splitLine[0],
        claseId             : splitLine[1],
        consecutivoId       : splitLine[2],
        consecutivoParte    : splitLine[3],
        tomo                : splitLine[4],
        asiento             : splitLine[5],
        consecutivoInParte  : splitLine[6],
        secinParte          : splitLine[7],
        fechaInscripcion    : splitLine[8],
        horaInscripcion     : splitLine[9],
        tipoParte           : splitLine[10],
        tieneRepresentacion : splitLine[11],
        esJuntaDirectiva    : splitLine[12],
        tipoIdParte         : splitLine[13],
        idParte             : splitLine[14],
        consecutivoIdParte  : splitLine[15],
        tipoCedulaMiembro   : splitLine[16],
        claseCedulaMiembro  : splitLine[17],
        numeroCedulaMiembro : splitLine[18],
        estadoCivil         : splitLine[19],
        domicilio           : splitLine[20],
        fechaInicio         : splitLine[21],
        fechaVencimiento    : splitLine[22],
        porcentajeCuota     : splitLine[23],
        puestoVacante       : splitLine[24],
        direccion           : splitLine[25],
      };
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'mercantil.nombramiento',
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
