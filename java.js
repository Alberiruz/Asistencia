var alumnos = [
    { nombre: 'Gambal', foto: '78184848-ilustración-de-vector-de-estudiante-de-cara-de-dibujos-animados-divertido-chica.jpg' },
    { nombre: 'Flor', foto: '78184844-ilustración-de-vector-de-dibujos-animados-cara-chica-estudiante-divertido.jpg' },
    { nombre: 'Serginio', foto: '92679952-hombre-indio-en-ropa-tradicional.jpg' },
    { nombre: 'Elena', foto: '100468069-icono-de-dibujos-animados-de-cara-de-mujer-joven.jpg' },
    { nombre: 'Luis', foto: '53997091-diseño-feliz-del-niño (1).jpg' }
];

var asistencia = [];
var alumnoActual = 0;

var nombreAlumno = document.getElementById('nombre-alumno');
nombreAlumno.textContent = alumnos[alumnoActual].nombre;

function marcarEstado(estado) {
    // Obtén la fecha seleccionada
    var fechaSeleccionada = document.getElementById('fecha').value;

    // Formatea la fecha separada por "/"
    var fechaFormateada = fechaSeleccionada.split('-').reverse().join('/');

    var cursoSeleccionado = document.getElementById('curso').value;

    // Define el estilo de color de texto
    var estiloTexto = '';

    if (estado === 'Ausente') {
        estiloTexto = 'color: red';
    }

    // Aquí puedes manejar el estado seleccionado, la fecha y el curso
    var alumno = alumnos[alumnoActual].nombre;
    asistencia.push({ alumno: alumno, estado: estado, fecha: fechaFormateada, curso: cursoSeleccionado, estilo: estiloTexto });

    // Avanzar al siguiente alumno
    alumnoActual++;
    if (alumnoActual < alumnos.length) {
        // Actualiza la foto y el nombre del siguiente alumno
        var fotoAlumno = document.querySelector('.alumno-photo');
        fotoAlumno.src = alumnos[alumnoActual].foto;
        var nombreAlumno = document.getElementById('nombre-alumno');
        nombreAlumno.textContent = alumnos[alumnoActual].nombre;
    } else {
        // Todos los alumnos han sido registrados
        var cargaCompleta = document.querySelector('.carga-completa');
        cargaCompleta.style.display = 'block';
    }
}

function mostrarResultado() {
    // Muestra el resultado de la asistencia
    var resultado = document.querySelector('.resultado');
    resultado.style.display = 'block';

    var resultadoLista = document.getElementById('resultado-lista');
    resultadoLista.innerHTML = '';

    asistencia.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.alumno + ': ' + item.estado + ' ' + item.fecha + ' ' + item.curso;
        li.style = item.estilo; // Aplica los estilos al elemento de lista
        resultadoLista.appendChild(li);
    });
}

function limpiarTodo() {
    // Limpia la lista de asistencia y oculta el resultado
    asistencia = [];
    var resultadoLista = document.getElementById('resultado-lista');
    resultadoLista.innerHTML = '';
    var resultado = document.querySelector('.resultado');
    resultado.style.display = 'none';

    // Reinicia el contador de alumnos
    alumnoActual = 0;

    // Restablece la foto y el nombre del primer alumno
    var fotoAlumno = document.querySelector('.alumno-photo');
    fotoAlumno.src = alumnos[alumnoActual].foto;
    var nombreAlumno = document.getElementById('nombre-alumno');
    nombreAlumno.textContent = alumnos[alumnoActual].nombre;

    // Oculta el mensaje de carga completa si está visible
    var cargaCompleta = document.querySelector('.carga-completa');
    cargaCompleta.style.display = 'none';
}
