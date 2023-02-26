const { REST, Routes } = require('discord.js');
const token = process.env.token 
///your ultra super duper mega omega pro max secret token should replaced
const clientid = process.env.clientid

const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

const rest = new REST({ version: '10' }).setToken(token);


rest.put(Routes.applicationCommands(clientid), { body: [] })
	.then(() => console.log('Successfully deleted all application commands'))
	.catch(console.error)

async function dead() {
  
 client.destroy();
  
}

dead()

/*/// if you wanted to off the repl automatically do this code


console.log(What colour is your Bugatti??)

this gives an error to the repl turns off it
/*///
  
//coded is by ASH#3395
