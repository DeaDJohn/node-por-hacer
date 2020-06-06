const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea'
}

const completado = {
	default: true,
	alias: 'c',
	desc: 'Marcar la tarea como completada o pendiente'
}

const argv = require('yargs')
	.command('listar', 'Imprime en consola la tabla de multiplicar', {
		// base: {
		// 	demand: true,
		// 	alias: 'b'
		// },
		// limite: {
		// 	alias: 'l',
		// 	default: 10
		// }
	})
	.command('crear', 'Crear un elemento por hacer', {
		descripcion
	})
	.command('actualizar', 'Actualizar el estado completado de una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'Borrar una tarea', {
		descripcion
	})
	.help()
	.argv;

module.exports = {
	argv
}