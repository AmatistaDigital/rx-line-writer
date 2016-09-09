const Rx = require('rxjs/Rx');
const readline = require('readline');
const _ = require('lodash');
const db = require('./db');

const rl = readline.createInterface({
  input : require('fs').createReadStream('../BDPJ_01042016/MERCANTIL_PERSONASJURIDICAS.TXT'),
});
const saveBatch = (list) => {
  db.saveBatch({
    list : _.map(list, (line) =>{
      const splitLine = line.split(';');
      return {
        tipoId                  : splitLine[0],
        numId                   : splitLine[1],
        consecutivoId           : splitLine[2],
        razonSocial             : splitLine[3],
        tomo                    : splitLine[4],
        asiento                 : splitLine[5],
        indOtorgaPoder          : splitLine[6],
        fechaInscripcion        : splitLine[7],
        horaInscripcion         : splitLine[8],
        fechaInicio             : splitLine[9],
        fechaVencimiento        : splitLine[10],
        codigoEstadoActual      : splitLine[11],
        codigoProvincia         : splitLine[12],
        codigoCanton            : splitLine[13],
        tomoCitaInscripcion     : splitLine[14],
        folioCitaInscripcion    : splitLine[15],
        asientoCitaInscripcion  : splitLine[16],
        numeroExpediente        : splitLine[17],
        fechaPublicacion        : splitLine[18],
        normaCreacion           : splitLine[19],
        domicilioFiscal         : splitLine[20],
        fines                   : splitLine[21],
        tieneProrrogaAutomatica : splitLine[22],
        prorrogas               : splitLine[23],
        presentacion            : splitLine[24],
      };
    }),
    mongoURL       : 'mongodb://localhost:27017/helix_nebula',
    collectionName : 'mercantil.personaJuridica',
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
