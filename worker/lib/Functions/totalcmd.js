const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./worker/src/dashboard/totalcmd.json'))

/**
 * for add total command
 * Subscribe Akira
 * Gk Subscribe Gk Temen
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./worker/src/dashboard/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}