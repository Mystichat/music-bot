const fs = require("node:fs")

module.exports = async client => {
    fs.readdirSync("./commands").filter(f => f.endsWith(".js")).forEach(async file => {
        const command = require(`../commands/${file}`)
        if (!command.name || typeof command.name !== "string") throw new TypeError(`Missing name :: (${file.slice(0, file.length - 3)})`)
        client.commands.set(command.name, command)
        console.log(`Loading command :: ${file}`)
    })
}