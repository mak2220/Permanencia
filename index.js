const nombre = 'Marcos';

const apellido = 'Berta';

const yo = {
    nombre,
    apellido,
}

// localStorage.setItem('perfil', JSON.stringify(yo));

// sessionStorage.setItem('perfil', JSON.stringify(yo));

const ahora = new Date()
//document.cookie = `ahora=${JSON.stringify(yo)};expires=${new Date(ahora.getTime() + 2 * 60000).toUTCString()}`