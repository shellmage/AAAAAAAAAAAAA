const login = require("facebook-chat-api");
const fs = require("fs");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) =>
{
	fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));

	api.setOptions(
	{
		selfListen: true,
		logLevel: 'warn'
	});

	api.listenMqtt((err, msgReceived) =>
	{
		if (msgReceived.type === 'message' && msgReceived.body.indexOf('@everyone', 0) >= 0)
		{
			api.getThreadInfo(msgReceived.threadID, (err, info)=>
			{
				//This is a work-around for a bug (see facebook-chat-api issue #857)
				//mention doesn't work if tag is at index zero in body string
				const emptyChar = '\u200E';

				var msgToSend = { body: emptyChar + 'AAAAAAAAAAAAA', mentions: [] };

				for(var i=0; i< info.participantIDs.length; i++)
				{
					msgToSend.mentions.push({tag: 'AAAAAAAAAAAAA', id: info.participantIDs[i]});
				}

				api.sendMessage(msgToSend, info.threadID);
			});
		}
	});
});
