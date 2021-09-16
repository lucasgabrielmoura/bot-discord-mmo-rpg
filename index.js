const Discord = require("discord.js");
const {token,prefix,id} = require("./config.json")
const cron = require("cron");
const client = new Discord.Client();


client.login(token);

client.on("ready", () => {
  setInterval(() => {
    console.log("Checkout");
  }, 1200000);
  console.log("Logado com o bot");
  const arroba = "<@&878650752573259826>"
  const historystage = " O History Stage Começou!!!"
  const dormammu = " O Dormammu Começou!!!"
  const kingporing = " O King Poring Começou!!!"
  const happyhour = " O Happy Hour Começou!!!"
  const channel =  client.channels.cache.get(id);
  //Usando o fusorário de Reykjavik
  // Isso funciona todo dia quando der os Horários colocados History Stage
  const stageDeDuas = new cron.CronJob('00 00 05 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeSete = new cron.CronJob('00 00 10 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeDez = new cron.CronJob('00 00 13 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeDoze = new cron.CronJob('00 00 15 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeQuartoze = new cron.CronJob('00 00 17 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeDezoito = new cron.CronJob('00 00 21 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeVinteUm = new cron.CronJob('00 00 00 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeVinteDois = new cron.CronJob('00 00 01 * * *',() => {
    channel.send(arroba + historystage);
  });
  const stageDeMeiaNoite = new cron.CronJob('00 00 03 * * *',() => {
    channel.send(arroba + historystage);
  });
  stageDeDuas.start()
  stageDeSete.start()
  stageDeDez.start()
  stageDeDoze.start()
  stageDeQuartoze.start()
  stageDeDezoito.start()
  stageDeVinteUm.start()
  stageDeVinteDois.start()
  stageDeMeiaNoite.start()
  // Isso funciona todo dia quando der os Horários colocados Dormmamus
  const dormammuDeOnze = new cron.CronJob('00 00 14 * * *',() => {
    channel.send(arroba + dormammu);
  });
  const dormammuDeDezenove = new cron.CronJob('00 00 22 * * *',() => {
    channel.send(arroba + dormammu);
  });
  const dormammuDeVinteTres = new cron.CronJob('00 00 02 * * *',() => {
    channel.send(arroba + dormammu);
  });
  dormammuDeOnze.start()
  dormammuDeDezenove.start()
  dormammuDeVinteTres.start()
  // Isso funciona todo dia quando der os Horários colocados King Poring
  const kingDeNove = new cron.CronJob('00 00 12 * * *',() => {
    channel.send(arroba + kingporing);
  });
  const kingDeQuinze = new cron.CronJob('00 00 18 * * *',() => {
    channel.send(arroba + kingporing);
  });
  const kingDeVinte = new cron.CronJob('00 00 23 * * *',() => {
    channel.send(arroba + kingporing);
  });
  kingDeNove.start()
  kingDeQuinze.start()
  kingDeVinte.start()
  // Isso funciona todo dia quando der os Horários colocados Happy Hour
  const happyDeDezoito = new cron.CronJob('00 30 21 * * *',() => {
    channel.send(arroba + happyhour);
  });
  happyDeDezoito.start()
});
