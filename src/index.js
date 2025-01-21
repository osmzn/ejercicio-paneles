const { preguntas, rl } = require('./helpers/readline')

const maxPaneles = (a, b, x, y) => {

    const mixHorizontal = Math.floor(x / a) * Math.floor(y / b) + Math.floor((x % a) / b) * Math.floor(y / a);
    const mixVertical = Math.floor(x / b) * Math.floor(y / a) + Math.floor((x % b) / a) * Math.floor(y / b);
    return Math.max(mixHorizontal, mixVertical);

};

const consultaYCalcula = async () => {

    let continuar = true

    while ( continuar ) {
        try {
            const panel = await preguntas('Introduce las dimensiones del panel (ej. 1x2): ');
            const [a, b] = panel.split('x').map(Number);

            const techo = await preguntas('Introduce las dimensiones del techo (ej. 1x10): ');
            const [x, y] = techo.split('x').map(Number); 

            const result = maxPaneles(a, b, x, y);
            console.log(`La cantidad máxima de paneles que pueden caber es: ${result}`);

            const respuesta = await preguntas('¿Quieres realizar otro cálculo? (sí/no): ');
            continuar = respuesta.toLowerCase() === 'si'; 
        } catch (error) {
            console.error('Error de entrada o cálculo: ', error);
        }
    }

    rl.close(); 
};

consultaYCalcula();