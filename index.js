const ingresar = (event) => {
    const valorUsuario = document.getElementById('user').value;
    const valorEmail = document.getElementById('email').value;
    const valorPassword = document.getElementById('password').value;
    const valorSexualidad1 = document.getElementById('sexualidad1').value;
    const valorSexualidad2 = document.getElementById('sexualidad2').value;

    const usuario = {
        user: valorUsuario,
        email: valorEmail,
        password: valorPassword,
        sexualidad1: valorSexualidad1,
        sexualidad2: valorSexualidad2,
    };

    document.getElementById("datos").innerHTML = `
    <h2>Datos recibidos</h2>
    <p>Nombre: ${usuario.user}</p>
    <p>Edad: ${usuario.email}</p>
    <p>Correo: ${usuario.password}</P>
    <h3>Gracias por mandar su informacion</h3>
    `;
}