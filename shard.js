const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NTEwMTE2NTM4MTkyMzYzNTIw.DxvmfA.10rVPDZLpCp6aPhFjhKmIdDPn7Q"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);