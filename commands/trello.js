exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    var Trello = require("trello");
    var trello = new Trello(client.config.trelloKey, client.config.trelloToken);
    var trelloChannel = client.config.trelloChannelID;
    var trelloOrg = client.config.trelloOrgID;
    
    trello.getOrgBoards(trelloOrg, 
        function (error, orgBoards) {
            if (error) {
                console.log('failed, reason: ', error);
            }
            else {
                orgBoards = JSON.stringify(orgBoards);
                //client.channels.get(trelloChannel).send(orgBoards);
                console.log(orgBoards);
            }
        }
    );
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
};

exports.help = {
    name: "trello",
    category: "System",
    description: "Allows for interaction with Trello boards",
    usage: "trello [list|add|del]"
};