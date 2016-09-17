/* eslint-disable no-unused-vars */
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

const mercantilCapital = (line) => {
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
};
const presentacionBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tomo                   : splitLine[0],
    asiento                : splitLine[1],
    registrador            : splitLine[2],
    fechaPresentacion      : splitLine[3],
    horaPresentacion       : splitLine[4],
    tramite                : splitLine[5],
    estado                 : splitLine[6],
    fechaOtorgamiento      : splitLine[7],
    horaOtorgamiento       : splitLine[8],
    especialidad           : splitLine[9],
    usuario                : splitLine[10],
    apartado               : splitLine[11],
    ultimaSecuencia        : splitLine[12],
    anotacionesRegistradas : splitLine[13],
    pesoTotal              : splitLine[14],
    traslado               : splitLine[15],
    tomoPrincipal          : splitLine[16],
    asientoPrincipal       : splitLine[17],
    ultimaSubsecuencia     : splitLine[18],
    tipoMovimiento         : splitLine[19],
    timeStamp              : splitLine[20],
  };
};

const anotacionBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tomo                : splitLine[0],
    asiento             : splitLine[1],
    secuencia           : splitLine[2],
    tipoMovimiento      : splitLine[3],
    peso                : splitLine[4],
    usuario             : splitLine[5],
    ultimaSubsecuencia  : splitLine[6],
    secuenciaAfectada   : splitLine[7],
    fechaAnotacion      : splitLine[8],
    horaAnotacion       : splitLine[9],
    garantiaBuque       : splitLine[10],
    garantiaVehiculo    : splitLine[11],
    garantiaAeronave    : splitLine[12],
    garantiaMotor       : splitLine[13],
    garantiaGanado      : splitLine[14],
    garantiaCosecha     : splitLine[15],
    garantiaMaquinaria  : splitLine[16],
    garantiaLineaBlanca : splitLine[17],
    garantiaOtros       : splitLine[18],
  };
};

const anotacionParteBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tomo                 : splitLine[0],
    asiento              : splitLine[1],
    secuencia            : splitLine[2],
    tipoParte            : splitLine[3],
    tipoIdentificacion   : splitLine[4],
    numeroIdentificacion : splitLine[5],
    numeroPersona        : splitLine[6],
    codigoUsuario        : splitLine[7],
    parte1               : splitLine[8],
    parte2               : splitLine[9],
    parte3               : splitLine[10],
    parte4               : splitLine[11],
    timeStamp            : splitLine[12],
  };
};

const placaTemporalBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tomo                 : splitLine[0],
    asiento              : splitLine[1],
    secuencia            : splitLine[2],
    tipoParte            : splitLine[3],
    tipoIdentificacion   : splitLine[4],
    numeroIdentificacion : splitLine[5],
    numeroPersona        : splitLine[6],
    codigoUsuario        : splitLine[7],
    parte1               : splitLine[8],
    parte2               : splitLine[9],
    parte3               : splitLine[10],
    parte4               : splitLine[11],
    timeStamp            : splitLine[12],
  };
};

const polizaAduanaBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tomo                 : splitLine[0],
    asiento              : splitLine[1],
    secuencia            : splitLine[2],
    tipoParte            : splitLine[3],
    tipoIdentificacion   : splitLine[4],
    numeroIdentificacion : splitLine[5],
    numeroPersona        : splitLine[6],
    codigoUsuario        : splitLine[7],
    parte1               : splitLine[8],
    parte2               : splitLine[9],
    parte3               : splitLine[10],
    parte4               : splitLine[11],
    timeStamp            : splitLine[12],
  };
};

const lineaPolizaBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    codigo              : splitLine[0],
    ano                 : splitLine[1],
    numero              : splitLine[2],
    linea               : splitLine[3],
    clasePlacaTemporal  : splitLine[4],
    codigoPlacaTemporal : splitLine[5],
    numeroBienTemporal  : splitLine[6],
    codigoMarca         : splitLine[7],
    anoFabricacion      : splitLine[8],
    descripcionModelo   : splitLine[9],
    numeroMotor         : splitLine[10],
    numeroChasis        : splitLine[11],
    estiloPoliza        : splitLine[12],
    coloBienInmueble    : splitLine[13],
    cilindrada          : splitLine[14],
    numeroSerie         : splitLine[15],
    numeroVin           : splitLine[16],
    combustible         : splitLine[17],
    indicadorPago       : splitLine[18],
    notaExoneracion     : splitLine[19],
    leyExoneracion      : splitLine[20],
    fechaRecibo         : splitLine[21],
    tomoPresentacion    : splitLine[22],
    asientoPresentacion : splitLine[23],
    secuencia           : splitLine[24],
    recibido            : splitLine[25],
    observacion         : splitLine[26],
  };
};


const movimientoBienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    codigo             : splitLine[0],
    tipoBien           : splitLine[1],
    tipoObjeto         : splitLine[2],
    pagoDerecho        : splitLine[3],
    numeroOperacion    : splitLine[4],
    afectaBien         : splitLine[5],
    afectaTMP          : splitLine[6],
    afectaGravamen     : splitLine[7],
    afectaPresentacion : splitLine[8],
    secuenciaAfectada  : splitLine[9],
    afectaObjetos      : splitLine[10],
    afectaDeudores     : splitLine[11],
    requisitos         : splitLine[12],
    descripcion        : splitLine[13],
    habilitado         : splitLine[14],
    timeStamp          : splitLine[15],
    prioridadRegistral : splitLine[16],
  };
};

const bienMueble = (line) => {
  const splitLine = line.split(';');
  return {
    tipo                         : splitLine[0],
    clase                        : splitLine[1],
    codigo                       : splitLine[2],
    numero                       : splitLine[3],
    numeroRegistral              : splitLine[4],
    tomoInscripcion              : splitLine[5],
    asientoInscripcion           : splitLine[6],
    secuenciaInscripcion         : splitLine[7],
    fechaInscripcion             : splitLine[8],
    numeroIdentificacionAnterior : splitLine[9],
    citaAnterior                 : splitLine[10],
    montoValorHacienda           : splitLine[11],
    montoValorContrato           : splitLine[12],
    codigoUsuario                : splitLine[13],
    estadoActual                 : splitLine[14],
    estadoTributario             : splitLine[15],
    codigoUso                    : splitLine[16],
    tomoUltimoMovimiento         : splitLine[17],
    asientoUltimoMovimiento      : splitLine[18],
    secuenciaUltimoMovimiento    : splitLine[19],
    fechaUltimoMovimiento        : splitLine[20],
    codigoMoneda                 : splitLine[21],
    timeStamp                    : splitLine[22],
  };
};

const bienMuebleDerecho = (line) => {
  const splitLine = line.split(';');
  return {
    tipo                      : splitLine[0],
    clase                     : splitLine[1],
    codigo                    : splitLine[2],
    numero                    : splitLine[3],
    numeroDerecho             : splitLine[4],
    codigoTipoIdentificacion  : splitLine[5],
    numeroIdentificacion      : splitLine[6],
    consecutivoIdentificacion : splitLine[7],
    tomoAdquisicion           : splitLine[8],
    asientoAdquisicion        : splitLine[9],
    secuenciaAdquisicion      : splitLine[10],
    codigoTipoDerecho         : splitLine[11],
    causaAdquisicion          : splitLine[12],
    proporcion1               : splitLine[13],
    proporcion2               : splitLine[14],
    codigoEstadoCivil         : splitLine[15],
    codigoUsuario             : splitLine[16],
    fechaAdquisicion          : splitLine[17],
    fechaConstitucion         : splitLine[18],
    direccion                 : splitLine[19],
    timeStamp                 : splitLine[20],
  };
};

const bienMueblePersona = (line) => {
  const splitLine = line.split(';');
  return {
    codigoTipoIdentificacion  : splitLine[0],
    numeroIdentificacion      : splitLine[1],
    consecutivoIdentificacion : splitLine[2],
    codigoNacionalidad        : splitLine[3],
    contadorParticipante      : splitLine[4],
    indicadorActualidad       : splitLine[5],
    primerApellido            : splitLine[6],
    nombre                    : splitLine[7],
    segundoApellido           : splitLine[8],
    restoJuridico             : splitLine[9],
    timeStamp                 : splitLine[10],
  };
};

const bienMuebleVehiculo = (line) => {
  const splitLine = line.split(';');
  return {
    tipoBien         : splitLine[0],
    claseBien        : splitLine[1],
    codigoBien       : splitLine[2],
    numeroBien       : splitLine[3],
    codigoMarca      : splitLine[4],
    anoFabricacion   : splitLine[5],
    estilo           : splitLine[6],
    codigoCategoria  : splitLine[7],
    tipoBienInmueble : splitLine[8],
    numeroChasis     : splitLine[9],
    numeroSerie      : splitLine[10],
    codigoCarroceria : splitLine[11],
    capacidad        : splitLine[12],
    pesoNeto         : splitLine[13],
    pesoBruto        : splitLine[14],
    pesoRemolque     : splitLine[15],
    pesoVacio        : splitLine[16],
    codigoColor      : splitLine[17],
    codigoTraccion   : splitLine[18],
    VIN              : splitLine[19],
    tipoCabina       : splitLine[20],
    tipoTecho        : splitLine[21],
    numeroEjes       : splitLine[22],
    longitudBien     : splitLine[23],
    refaccionado     : splitLine[24],
    convertido       : splitLine[25],
    timeStamp        : splitLine[26],
    claseTributaria  : splitLine[27],
  };
};

const bienMuebleMotor = (line) => {
  const splitLine = line.split(';');
  return {
    tipoBien          : splitLine[0],
    claseBien         : splitLine[1],
    codigoBien        : splitLine[2],
    numeroBien        : splitLine[3],
    numeroMotor       : splitLine[4],
    codigoMarca       : splitLine[5],
    codigoProcedencia : splitLine[6],
    codigoCombustible : splitLine[7],
    cantidadCilindros : splitLine[8],
    cilindrada        : splitLine[9],
    potencia          : splitLine[10],
    descripcionModelo : splitLine[11],
    numeroSerie       : splitLine[12],
    nombreFabricante  : splitLine[13],
    timeStamp         : splitLine[14],
  };
};

const bienMuebleBuque = (line) => {
  const splitLine = line.split(';');
  return {
    tipoBien          : splitLine[0],
    claseBien         : splitLine[1],
    codigoBien        : splitLine[2],
    numeroBien        : splitLine[3],
    codigoMarca       : splitLine[4],
    codigoActividad   : splitLine[5],
    numeroSerie       : splitLine[6],
    anoConstruction   : splitLine[7],
    pesoNeto          : splitLine[8],
    pesoBruto         : splitLine[9],
    eslora            : splitLine[10],
    manga             : splitLine[11],
    puntal            : splitLine[12],
    estilo            : splitLine[13],
    casco             : splitLine[14],
    nombre            : splitLine[15],
    chasis            : splitLine[16],
    constructor       : splitLine[17],
    lugarConstruccion : splitLine[18],
    descripcionCasco  : splitLine[19],
    timeStamp         : splitLine[20],
  };
};

const bienMuebleInfraccion = (line) => {
  const splitLine = line.split(';');
  return {
    tipoBien                     : splitLine[0],
    claseBien                    : splitLine[1],
    codigoBien                   : splitLine[2],
    numeroBien                   : splitLine[3],
    autoridadJudicial            : splitLine[4],
    sumaria                      : splitLine[5],
    boleta                       : splitLine[6],
    fechaBoleta                  : splitLine[7],
    fechaRegistro                : splitLine[8],
    horaRegistro                 : splitLine[9],
    rolloMicrofilmacion          : splitLine[10],
    imagenMicrofilmacion         : splitLine[11],
    tipoGravamen                 : splitLine[12],
    descripcionAutoridadJudicial : splitLine[13],
    timeStamp                    : splitLine[14],
    codigoUsuario                : splitLine[15],
    observacion                  : splitLine[16],
  };
};

const bienMuebleLevantamiento = (line) => {
  const splitLine = line.split(';');
  return {
    tipoBien                          : splitLine[0],
    claseBien                         : splitLine[1],
    codigoBien                        : splitLine[2],
    numeroBien                        : splitLine[3],
    autoridadJudicial                 : splitLine[4],
    descripcionAutoridadJudicial      : splitLine[5],
    sumaria                           : splitLine[6],
    boleta                            : splitLine[7],
    fechaBoleta                       : splitLine[8],
    fechaRegistro                     : splitLine[9],
    horaRegistro                      : splitLine[10],
    codigoUsuario                     : splitLine[11],
    rolloMicrofilmacion               : splitLine[12],
    imagenMicrofilmacion              : splitLine[13],
    fechaLevantamiento                : splitLine[14],
    horaLevantamiento                 : splitLine[15],
    rolloLevantamiento                : splitLine[16],
    imagenMicrofilmacionLevantamiento : splitLine[17],
    timeStamp                         : splitLine[18],
  };
};
/* eslint-enable no-unused-vars */
