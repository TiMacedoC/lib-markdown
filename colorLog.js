const colors = require('colors')

module.exports = (toPrint, color) => {
    color ? console.log(colors[color](toPrint)) : console.log(colors.brightMagenta(toPrint))
}