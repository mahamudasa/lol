const fs = require('fs');

const tebakkimia = fs.readFileSync('./worker/src/game/result/tebakkimia.json');
const asahotak = fs.readFileSync('./worker/src/game/result/asahotak.json');
const susunkata = fs.readFileSync('./worker/src/game/result/susunkata.json');
const tebakkalimat = fs.readFileSync('./worker/src/game/result/tebakkalimat.json');
const tekateki = fs.readFileSync('./worker/src/game/result/tekateki.json');
const caklontong = fs.readFileSync('./worker/src/game/result/caklontong.json');
const tebakbendera = fs.readFileSync('./worker/src/game/result/tebakbendera.json');
const tebakanime = fs.readFileSync('./worker/src/game/result/tebakanime.json');
const tebakkabupaten = fs.readFileSync('./worker/src/game/result/tebakkabupaten.json');
const tebaklagu = fs.readFileSync('./worker/src/game/result/tebaklagu.json');
const tebaklirik = fs.readFileSync('./worker/src/game/result/tebaklirik.json');
module.exports = { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik }
