// './BDPJ_01042016/MERCANTIL_PERSONASFISICAS.TXT'
const mercantilPersonasFisicas = (line) => {
  const splitLine = line.split(';');
  return {
    tipoId        : splitLine[0],
    numId         : splitLine[1],
    consecutivoId : splitLine[2],
    contador      : splitLine[3],
    nombre        : splitLine[4],
    apellido1     : splitLine[5],
    apellido2     : splitLine[6],
  };
};

const mercantilPersonasJuridicas = (line) => {
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
};

const mercantilNombramientos = (line) => {
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
};
