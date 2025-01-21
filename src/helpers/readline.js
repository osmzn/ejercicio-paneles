const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntas = async (req) => {

    return new Promise((resolve) => {
        rl.question(req, resolve);
    });
    
};

module.exports = {
    preguntas,
    rl,
}