require("dotenv").config()
const Discord = require("discord.js")

const { ID, TOKEN } = process.env

const data = {
    id: ID,
    token: TOKEN
}

const webhook = new Discord.WebhookClient(data)

webhook.send("I am here again!")