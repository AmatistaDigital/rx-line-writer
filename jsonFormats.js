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
