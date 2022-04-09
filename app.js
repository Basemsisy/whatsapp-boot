const { Client, LocalAuth } = require("whatsapp-web.js");
const qrGen = require("qrcode-terminal");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrGen.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (msg.body == "test") {
    msg.reply("test message from bot!");
    const contacts = await client.getChats();
    console.log(contacts);
  }
});

client.initialize();
