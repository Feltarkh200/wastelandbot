require('dotenv').config();
require('http').createServer().listen(3000);
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'w!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
        args = args.splice(1);
		args = args.join('');
		args = args.toLowerCase();
        switch(cmd) {
            case 'ping':
                /*bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });*/
            break;
			case 'help':
			    bot.sendMessage({
                    to: channelID,
                    message: '**The wonderful help of the Wasteland bot**\n**w!help**\nShows this\n**w!whodidthis**\nself explanatory\n**w!item [item name]**\nshows info about that item'
                });
			break;
			case 'whodidthis':
			case 'wdt':
				bot.sendMessage({
					to: channelID,
					message: '**:joy::joy:WHO DID THIS:joy::joy:**\nIdle Wasteland is made by the wonderful Alex\nThis bot is made by Feltark200'
				});
			break;
			case 'item':
				var itWorks = 1;
				var itemName = 'i am a bad bot dev trust me';
				var itemRarity = 'penis';
				var itemEffect = '';
				var itemHowToGet = '';
				var itemUnlockReq = '';
				switch (args) {
					case 'greenprint':
					case 'greenprints':
						itemName = 'Greenprints';
						itemRarity = 'Common';
						itemEffect = 'Use 50 to unlock Reset spell, Used for crafting';
						itemHowToGet = '1% drop from scrap piles';
						itemUnlockReq = 'Salvaging level 14';
						break;
					case 'sspf':
					case 'ssf':
					case 'sspfragment':
						itemName = 'SSP Fragment';
						itemRarity = 'Epic';
						itemEffect = 'Combine 10 for a Super Skill Point';
						itemUnlockReq = 'Always unlocked'
						itemHowToGet = 'Anything 10% drop rate from scrap piles';
						break;
					case 'topsecret':
						itemName = 'Top Secret';
						itemRarity = '??????';
						itemEffect = '??????';
						itemUnlockReq = '??????'
						itemHowToGet = 'Boot the game';
						break;
					case 'flyessence':
						itemName = 'Fly Essence';
						itemRarity = 'Common';
						itemEffect = 'Collect 250 to unlock the Fly spell, collect more to upgrade it';
						itemUnlockReq = 'Reset spell must be unlocked';
						itemHowToGet = '15% drop from Flies, 25% drop from Golden Flies';
						break;
					case 'mouldymuffin':
						itemName = 'Mouldy Muffin';
						itemRarity = 'Common';
						itemEffect = '+5 Max damage for 1:00';
						itemUnlockReq = 'play the damn game';
						itemHowToGet = 'Monster drops, tasks, common caches, chests';
						break;
					case 'sharpshrapnel':
						itemName = 'Sharp Shrapnel';
						itemRarity = 'Common';
						itemEffect = '+6% Crit chance for 1:30';
						itemUnlockReq = 'download the game on the play store';
						itemHowToGet = 'Monster drops, tasks, common caches, chests';
						break;
					case 'sharpshrapnel':
						itemName = 'Sharp Shrapnel';
						itemRarity = 'Common';
						itemEffect = '+6% Crit chance for 1:30';
						itemUnlockReq = 'download the game on the play store';
						itemHowToGet = 'Monster drops, tasks, common caches, chests';
						break;
					case 'sharpstick':
						itemName = 'Sharp Stick';
						itemRarity = 'Common';
						itemEffect = '+5 ap for 1:00, used for crafting';
						itemUnlockReq = 'click the big \'play\' button (tip : you can find it below the game name)';
						itemHowToGet = 'Monster drops, common caches, chests';
						break;
					case 'magnet':
					case 'scrapmagnet':
						itemName = 'Scrap Magnet';
						itemRarity = 'Common';
						itemEffect = 'Auto-collects scrap for 5:00 ||can be increased to 10:00 with ssp||, grants +10% scrap pile spawn rate/item prestige lvl';
						itemUnlockReq = 'read the tutorial';
						itemHowToGet = 'Monster drops, common caches, chests, 25% drop from Impling, given by Happy during the tutorial';
						break;
					case 'biomagicnet':
					case 'net':
						itemName = 'Biomagic Net';
						itemRarity = 'Common';
						itemEffect = 'Auto-catches creatures for 5:00 ||can be increased to 10:00 with challenges||, grants +10% creature spawn rate/item prestige lvl';
						itemUnlockReq = 'listen to what Happy says';
						itemHowToGet = 'Monster drops, common caches, chests, given by Happy during the tutorial';
						break;
					case 'stalepizza':
						itemName = 'Stale Pizza';
						itemRarity = 'Common';
						itemEffect = '+6% Attack speed for 2:00';
						itemUnlockReq = 'why do you ask ?';
						itemHowToGet = 'Monster drops, common caches, chests';
						break;
					case 'fingerlessgloves':
						itemName = 'Fingerless Gloves';
						itemRarity = 'Common';
						itemEffect = '+3 Maximum damage and +3% Crit chance for 2:00';
						itemUnlockReq = 'strength lvl 0';
						itemHowToGet = 'Monster drops, common caches, chests';
						break;
					case 'elbow-pads':
					case 'elbowpads':
						itemName = 'Elbow-Pads';
						itemRarity = 'Common';
						itemEffect = '+3 Maximum damage and +2 Resistance for 2:00';
						itemUnlockReq = 'no one will see this';
						itemHowToGet = 'Monster drops, common caches, chests';
						break;
					case 'shot':
					case 'biomagicshot':
						itemName = 'Biomagic Shot';
						itemRarity = 'Common';
						itemEffect = 'Refills 25% of your max mana';
						itemUnlockReq = 'OwO';
						itemHowToGet = 'Monster drops, common caches, chests, drop from Wisps';
						break;
					case 'spiderfang':
						itemName = 'Spider Fang';
						itemRarity = 'Common';
						itemEffect = '+5 ap and +5% Crit chance for 2:00';
						itemUnlockReq = 'Hunter lvl 10';
						itemHowToGet = '50% drop from Spiders';
						break;
					case 'rustyring':
						itemName = 'Rusty Ring';
						itemRarity = 'Common';
						itemEffect = '+20% currency income for 5:00';
						itemUnlockReq = 'Hunter lvl 15';
						itemHowToGet = '80% drop from Magpies';
						break;
					case 'taintedtrout':
						itemName = 'Tainted Trout';
						itemRarity = 'Common';
						itemEffect = '+3 Resistance for 2:00';
						itemUnlockReq = 'Unlock Puffins in the skill tree';
						itemHowToGet = '60% drop from Puffins';
						break;
					case 'cactusspine':
						itemName = 'Cactus Spine';
						itemRarity = 'Common';
						itemEffect = '+10% Crit damage and +5% Crit chance for 2:00';
						itemUnlockReq = 'Wave 51, Strength prestige 3';
						itemHowToGet = 'Monster drops, common caches, chests **(desert only)**';
						break;
					case 'cache':
					case 'commoncache':
						itemName = 'Common Cache';
						itemRarity = 'Common';
						itemEffect = 'Drops 2-5 common items';
						itemUnlockReq = 'Complete challenge 4';
						itemHowToGet = '1/300 drop from scrap piles (1/900 in grind mode)';
						break;
					case 'pineapplepizza':
					case 'pristinepineapplepizza':
					case 'pp':
					case 'ppp':
						itemName = 'Pristine Pineapple Pizza';
						itemRarity = 'way too rare honestly';
						itemEffect = 'P A R T Y ! ';
						itemUnlockReq = '???';
						itemHowToGet = 'Monster drops, chests, ad drones ? idk, only Alex knows the answer';
						break;
					case 'rubber-griphammer':
					case 'rubbergriphammer':
					case 'hammer':
						itemName = 'Rubber-Grip Hammer';
						itemRarity = 'Rare';
						itemEffect = '+10 ap for 2:00, Used for crafting (protip : only use them for crafting)';
						itemUnlockReq = 'boot the game';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg';
						break;
					case 'accomplishmentribbon':
					case 'ribbon':
						itemName = 'Accomplishment Ribbon';
						itemRarity = 'Common';
						itemEffect = '+1 Max damage/achievement unlocked for 2:00';
						itemUnlockReq = 'Complete challenge 9';
						itemHowToGet = 'Monster drops, common caches, chests';
						break;
					case 'cleanwater':
						itemName = 'Clean Water';
						itemRarity = 'Rare';
						itemEffect = '+15% Attack speed for 2:00';
						itemUnlockReq = 'eat your phone with some butter';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg';
						break;
					case 'biomagictube':
						itemName = 'Biomagic Tube';
						itemRarity = 'Rare';
						itemEffect = 'Refills 50% of your max mana';
						itemUnlockReq = 'enter the 111111116 code';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg';
						break;
					case 'biomagicsyringe':
						itemName = 'Biomagic Syringe';
						itemRarity = 'Rare';
						itemEffect = 'x2 Biomagic xp for 5:00';
						itemUnlockReq = 'aaaaaaa';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg, given by Happy';
						break;
					case 'rummaginggloves':
						itemName = 'Rummaging Gloves';
						itemRarity = 'Rare';
						itemEffect = 'x2 Salvaging xp for 5:00';
						itemUnlockReq = '';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg, given by Happy';
						break;
					case 'skiptoken':
						itemName = 'Skip Token';
						itemRarity = 'Rare';
						itemEffect = 'Skips your current task (protip : use it on a ssp task)';
						itemUnlockReq = '';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg';
						break;
					case 'rottenmeat':
					case 'meat':
						itemName = 'Rotten Meat';
						itemRarity = 'Rare';
						itemEffect = 'Spawns 5-10 Flies (8-16 at max prestige)';
						itemUnlockReq = '';
						itemHowToGet = 'Monster drops, chests, ad drones, vulture egg';
						break;
					case 'butterflywing':
						itemName = 'Butterfly Wing';
						itemRarity = 'Rare';
						itemEffect = '+10% Attack speed for 5:00';
						itemUnlockReq = 'Hunter lvl 5';
						itemHowToGet = '25% drop from Butterflies';
						break;
					case 'goldenbutterflywing':
					case 'goldbutterflywing':
					case 'gbw':
						itemName = 'Golden Butterfly Wing';
						itemRarity = 'Epic';
						itemEffect = '+12% Attack speed and +5% ap for 2:00';
						itemUnlockReq = 'Hunter lvl 5, Challenge 6 completed';
						itemHowToGet = '25% drop from Golden Butterflies';
						break;
					case 'stickyweb':
					case 'web':
						itemName = 'Sticky Web';
						itemRarity = 'Rare';
						itemEffect = '-10% Enemy attack speed for 2:00';
						itemUnlockReq = 'Hunter lvl 10';
						itemHowToGet = '50% drop from Spiders';
						break;
					case 'finebracelet':
						itemName = 'Fine Bracelet';
						itemRarity = 'Rare';
						itemEffect = '+50% Currency income for 5:00';
						itemUnlockReq = 'Hunter lvl 15';
						itemHowToGet = '20% drop from Magpies';
						break;
					case 'vultureclaw':
						itemName = 'Vulture Claw';
						itemRarity = 'Rare';
						itemEffect = '+10% Max damage for 5:00 (+25% at max prestige)';
						itemUnlockReq = 'Hunter lvl 25';
						itemHowToGet = '80% drop from Vultures';
						break;
					case 'vultureclaw':
						itemName = 'Vulture Claw';
						itemRarity = 'Rare';
						itemEffect = '+10% Max damage for 5:00 (+25% at max prestige)';
						itemUnlockReq = 'Hunter lvl 25';
						itemHowToGet = '80% drop from Vultures';
						break;
					case 'smoggysalmon':
					case 'salmon':
						itemName = 'Smoggy Salmon';
						itemRarity = 'Rare';
						itemEffect = '+4 Resistance for 2:00';
						itemUnlockReq = 'Unlock Puffins in the skill tree';
						itemHowToGet = '30% drop from Puffins';
						break;
					case 'batwing':
						itemName = 'Bat Wing';
						itemRarity = 'Rare';
						itemEffect = '+8% Attack speed and +5% Crit chance for 5:00';
						itemUnlockReq = 'Hunter lvl 13, Hunter prestige 1';
						itemHowToGet = 'Drop from Bats';
						break;
					default:
						itWorks = 0;
					break;
				}
				if(itWorks == 1) {
					bot.sendMessage({
						to: channelID,
						message: '**Item : **' + itemName + '\n**Rarity : **' + itemRarity + '\n**Effect : **' + itemEffect + '\n**How to Unlock : **' + itemUnlockReq + '\n**How to Get : **' + itemHowToGet
					});
				} else if(args == '') {
						bot.sendMessage({
						to: channelID,
						message: 'Correct use : w!item [item name]'
					});
				}
				else {
					bot.sendMessage({
						to: channelID,
						message: 'Sorry, I don\'t know the item ' + args + '.'
					});
				}
			break;
            // Just add any case commands if you want to..
        }
    }
});