document.addEventListener('DOMContentLoaded', () => {
    // Obtén el parámetro de redirección de la URL
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');

    if (redirect === 'Registro') {
        setTimeout(() => {
            window.location.href = '/index.html'; // Redirige a Registro después de 4 segundos
        }, 5000); // Tiempo de espera en milisegundos
    } else if (redirect === 'shoppingCart') {
        setTimeout(() => {
            window.location.href = '/html/shoppingCart.html'; // Redirige a ShoppingCart después de 4 segundos
        }, 5000); // Tiempo de espera en milisegundos
    }else if (redirect === 'Index') {
        setTimeout(() => {
            window.location.href = '/index.html'; // Redirige a ShoppingCart después de 4 segundos
        }, 5000); // Tiempo de espera en milisegundos
    } else {
        setTimeout(() => {
            window.location.href = '/html/Store.html'; // Redirige a Store después de 4 segundos
        }, 5000); // Tiempo de espera en milisegundos
    }
});
