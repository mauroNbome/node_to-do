const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de tarea por hacer",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completada la tarea",
};

const argv = require("yargs")
  .command("crear", "Crear un elemento en TO-DO", {
    descripcion,
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "Elimina una tarea de la lista", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
