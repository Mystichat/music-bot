const Discord = require("discord.js")
const loadSlashes = require("../handlers/loadSlashes.js")

module.exports = async client => {
    await loadSlashes(client)
    console.log(`Connected as ${client.user.tag}`)    
}