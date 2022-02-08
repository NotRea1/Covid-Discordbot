const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config/config.json')
const prefix = config.prefix
const axios = require('axios')
const { profile } = require('console')

bot.on('ready',()=>{
    console.log('Bot Online')
})

bot.on('message',msg=>{
    if (msg.content === prefix+'help'){
        msg.channel.send('คำสั่ง !covid')
    }

    if (msg.content === prefix+'covid'){
        covid(msg)
    }
})

bot.login(config.token)

function covid(msg){
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then(function (response) {
        var covidData = response.data[0]
        msg.channel.send('ยอดผู้เสียชีวิตทั้งหมด : '+covidData.total_death)
    })
}