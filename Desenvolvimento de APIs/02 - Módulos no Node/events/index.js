import ev from "./events.js";

ev.on('testEvent', () => console.log('ouviu também'))

ev.emit('testEvent', 'bla bla bla')

// Não vai ser chamado, precisa estar antes do emit()
ev.on('testEvent', () => console.log('teste'))