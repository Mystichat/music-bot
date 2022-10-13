const fs = require("node:fs")

module.exports = async client => {
    fs.readdirSync("./events").filter(f => f.endsWith(".js")).forEach(async file => {
        const event = require(`../events/${file}`)
        client.on(file.split(".js").join(""), event.bind(null, client))
        console.log(`Loading event :: ${file}`)
    })
}