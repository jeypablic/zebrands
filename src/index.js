const { listen } = require('./app');
const app = require('./app');

async function main() {
    await app.listen(3000);
    console.log('server iniciado')
}

main();