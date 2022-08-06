const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("OTY1NjA0NjY3NzcyMDEwNTI2.GpqLeM.a_w-z1QCX3gK_EKVECKN4VbQQBj5NS48A6mzno");