exports.run = (message, bot) => {
  message.send("Pong! "+bot.ping+"ms")
}

exports.conf = {
  userPerm:[],
  botPerm:["SEND_MESSAGES"],
  coolDown:0,
  dm:true,
  category:"Other",
  help:"Ping! Pong!",
  args:""
}
