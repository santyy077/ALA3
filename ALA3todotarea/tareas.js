//Task Builder Function
export function Tarea(id, titulo, descripcion = '', dificultad = 'facil', vencimiento = '', estado = 'pendiente') {
    const fechaActual = new Date().toISOString().slice(0, 10);

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dificultad = String(dificultad).trim().toLowerCase();
    this.estado = String(estado).trim().toLowerCase();
    this.creacion = fechaActual;
    this.ultimaEdicion = fechaActual;
    this.vencimiento = vencimiento || null;
}

// Prototipo de Tarea
Tarea.prototype.editar = function (nuevosDatos = {}) {
    if (nuevosDatos.titulo !== undefined) this.titulo = nuevosDatos.titulo;
    if (nuevosDatos.descripcion !== undefined) this.descripcion = nuevosDatos.descripcion;
    if (nuevosDatos.dificultad !== undefined) this.dificultad = String(nuevosDatos.dificultad).trim().toLowerCase();
    if (nuevosDatos.estado !== undefined) this.estado = String(nuevosDatos.estado).trim().toLowerCase();
    if (nuevosDatos.vencimiento !== undefined) this.vencimiento = nuevosDatos.vencimiento || null;

    this.ultimaEdicion = new Date().toISOString().slice(0, 10);
};

// Función Constructora ListaDeTareas
export function ListaDeTareas() {
    this.tareas = [];
    this.contadorID = 1;
}

// Prototipo de ListaDeTareas
ListaDeTareas.prototype.agregarTarea = function (titulo, descripcion = '', dificultad = 'facil', vencimiento = '', estado = 'pendiente') {
    const tarea = new Tarea(
        this.contadorID++,
        titulo,
        descripcion,
        dificultad,
        vencimiento,
        estado
    );
    this.tareas.push(tarea);
    return tarea;
};

ListaDeTareas.prototype.obtenerTareas = function (filtro = null) {
    if (!filtro) return this.tareas;

    const filtroNormalizado = String(filtro).toLowerCase().trim();
    return this.tareas.filter((tarea) => tarea.estado.toLowerCase() === filtroNormalizado);
};

ListaDeTareas.prototype.buscarPorTitulo = function (texto) {
    const textoBuscado = String(texto).toLowerCase().trim();

    if (!textoBuscado) return this.tareas;

    return this.tareas.filter((tarea) =>
        tarea.titulo.toLowerCase().includes(textoBuscado)
    );
};

// Método para buscar por ID (Faltaba este)
ListaDeTareas.prototype.obtenerPorId = function (id) {
    return this.tareas.find((tarea) => String(tarea.id) === String(id)) || null;
};