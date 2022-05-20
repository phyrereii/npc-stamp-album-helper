// ==UserScript==
// @name         Stamp checklist
// @namespace    github.com/windupbird144
// @version      0.2
// @description  neopetsclassic.com fill empty
// @author       github.com/windupbird144
// @match        https://neopetsclassic.com/stamps/album/?page_id=*&owner=*
// @icon         https://neopetsclassic.com/images/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==
/*
(function() {
function stampFromImage(img) {
	if (img.src.endsWith("no_stamp.gif")) return
	const url = img.src.replace("https://neopetsclassic.com","")
	const [name, rest] = img.title.split(" - r")
	const [stringRarity, description] = rest.split(" : ")
	const rarity = parseInt(stringRarity)
	return [name, rarity, description, url]
}
const pageId = +new URLSearchParams(window.location.search).get("page_id")
const stamps = Array.from(document.querySelectorAll(`table[width="450"] img`))
	.map(stampFromImage)

    const ser = JSON.stringify(stamps)
    return ser
})()

*/
(function() {
    'use strict';

    // Your code here...
    const database = {}

    database[1] = JSON.parse("[[\"Mystery Island Kougra Stamp\",20,\"Awww a cute little Kougra from Mystery Island.\",\"/images/items/stamp_mys_kou.gif\"],[\"Mystery Island Aishas Stamp\",30,\"Aishas dance on a Mystery Island beach!\",\"/images/items/stamp_mys_ais.gif\"],[\"Coco Stamp\",80,\"The coco people love visitors... fried :)\",\"/images/items/stamp_mys_coc.gif\"],[\"Jhuidah Stamp\",76,\"Jhuidah the island faerie runs the Island Cooking Pot.\",\"/images/items/stamp_jhuidah1.gif\"],[\"Island Native Stamp\",74,\"Aww its a cute little Kougra!\",\"/images/items/stamp_mys_nat.gif\"],[\"Mystery Island Hut Stamp\",64,\"Looks like the island mystics hut...\",\"/images/items/stamp_mys_mys.gif\"],[\"Assorted Fruits Stamp\",62,\"A Tigerfruity thing, a thingummy, and a whatsitsname.\",\"/images/items/stamp_mys_fru.gif\"],[\"Triangular Flotsam Stamp\",60,\"Triangular stamps were banned in the years 2 and 3 due to a variety of reasons.\",\"/images/items/stamp_island_flotsam.gif\"],[\"Zeenana Stamp\",61,\"The stamp actually tastes of Zeenana when you lick it. Clever, eh?\",\"/images/items/stamp_island_fruit.gif\"],null,[\"Island Acara Stamp\",80,\"I met a hula mistress, somewhere in Waikiki...\",\"/images/items/stamp_island_acara.gif\"],[\"Haiku Stamp\",75,\"Soft Blumaroo, life timeliness sees durable yesterday, gentle.\",\"/images/items/stamp_island_haiku.gif\"],[\"Mystery Island Heads Stamp\",71,\"Apparently they all do something weird if you press a concealed button up their left nostril.\",\"/images/items/stamp_island_heads.gif\"],null,null,null,null,null,[\"Island Mystic Stamp\",70,\"The Mystic always has something interesting to say.\",\"/images/items/stamp_mys_mystic.gif\"],[\"Ryshu Stamp\",70,\"Ryshu, the powerful Nimmo warrior from Mystery Island\",\"/images/items/stamp_mys_ryshu.gif\"],[\"Need a Better Printer Stamp\",99,\"You won't find many of these at the collector fair!\",\"/images/items/stamp_misprint1.gif\"],null,[\"One Hundred Million Neopoint Stamp\",99,\"I think this was a practical joke played by one of the employees at the stamp factory.\",\"/images/items/stamp_misprint3.gif\"],[\"Misaligned Printer Stamp\",99,\"I think the printer heads must have been misaligned!\",\"/images/items/stamp_misprint4.gif\"],[\"Nibbled Cooking Pot Stamp\",99,\"Oh dear it looks like someone has tried to take a bite out of this stamp...\",\"/images/items/stamp_mys_pongo.gif\"]]")
    database[2] = JSON.parse("[[\"Grimilix Stamp\",40,\"Everybody's favourite grundo-programmer-stuck-in-a-space-station - Grimilix!\",\"/images/items/stamp_spa_better.gif\"],[\"Neopet Version 2 Stamp\",82,\"Stick me on a postcard and ill be your friend\",\"/images/items/stamp_spa_npv2.gif\"],[\"Gormball Stamp\",30,\"Round and round it goes, where it explodes nobody knows!\",\"/images/items/stamp_spa_gorm.gif\"],[\"Splat-A-Sloth Stamp\",84,\"When it moves, hit it - HARD!\",\"/images/items/stamp_spa_splat.gif\"],[\"Dr. Sloth Stamp\",90,\"When you are ruler of the universe you will get to have your own stamp too!\",\"/images/items/stamp_spa_sloth.gif\"],[\"Space Faerie Stamp\",93,\"When you manage to deflect an evil death ray from Neopia, you will get your own stamp too!\",\"/images/items/stamp_spa_faerie2.gif\"],[\"Grinning Sloth Stamp\",85,\"It's always important to have good teeth when you are taking over the galaxy.\",\"/images/items/stamp_space_sloth2.gif\"],[\"Zygorax Stamp\",80,\"Gonna get you little fuzzle...\",\"/images/items/stamp_space_zygorax.gif\"],[\"Purple Grundo Stamp\",75,\"Grundos arrived in Neopia by working for Sloth on the Virtupets Space Station.\",\"/images/items/stamp_space_grundo.gif\"],null,[\"Roast Gargapple Stamp\",85,\"A real gargapple is flattened and dried in order to make this stamp.\",\"/images/items/stamp_space_food.gif\"],[\"N4 Bot Stamp\",80,\"Hello!\",\"/images/items/stamp_space_n4bot.gif\"],[\"Blarthrox Stamp\",80,\"Behold the legendary Ummagine collector himself!\",\"/images/items/stamp_blarthrox.gif\"],[\"Tazzalor Stamp\",86,\"Ahoy there its Tazzalor the Grundo!\",\"/images/items/stamp_zyrolon.gif\"],[\"Zyrolon Stamp\",90,\"For some reason they didn't print that many Zyrolon stamps so this is very hard to get hold of.\",\"/images/items/stamp_tazzalor.gif\"],[\"Advert Attack Stamp\",70,\"This sparkly stamp features that amazing pilot Ace Zafara!\",\"/images/items/stamp_advert_attack.gif\"],[\"Evil Fuzzles Stamp\",89,\"Arghhh... This Fuzzle even LOOKS evil!!!\",\"/images/items/sta_space_evilfuzzles.gif\"],[\"Gargarox Isafuhlarg Stamp\",92,\"Chef extraordinaire, Gargarox runs the world renowned cafe on the space station.\",\"/images/items/sta_space_grundochef.gif\"],[\"Mutant Grundo Stamp\",86,\"Has anyone ever wondered why Mutant Grundos only come in green?\",\"/images/items/sta_space_mutantgrundo.gif\"],[\"Zurroball Stamp\",90,\"Wheee... what could be more fun than a Zurroball stamp?\",\"/images/items/sta_space_zurroball.gif\"],[\"Double Printed Evil Fuzzle Stamp\",99,\"Doh, the printing seems to have messed up on this card...\",\"/images/items/stamp_spa_evil.gif\"],[\"Inverted Space Faerie Stamp\",99,\"Wow, the space faerie is inverted on this card, must be rare or something.\",\"/images/items/stamp_spa_faerie.gif\"],null,[\"Virtupets Space Station Stamp\",98,\"This stamp has a top down view of the whole space station - fancy that!\",\"/images/items/sta_space.gif\"],[\"Holographic Virtupets Stamp\",99,\"Ooh if you tilt it the logo changes colours!\",\"/images/items/sta_logo.gif\"]]")
    database[3] = JSON.parse("[null,null,null,null,null,null,null,null,[\"Tyrannian Grarrl Stamp\",80,\"Fire, Mr. Fawlty, FIRE!!!!\",\"/images/items/stamp_tyrannia_night.gif\"],[\"Chunk of Meat Stamp\",50,\"Mmm... this stamp makes you want to rush to Tyrannia right now!\",\"/images/items/stamp_tyrannia_meat.gif\"],[\"Tyrannian Kyrii Stamp\",55,\"This stamp features a rather attractive Tyrannian Kyrii.\",\"/images/items/stamp_tyrannia_kyrii.gif\"],[\"Tyrannian JubJub Stamp\",58,\"Aww this little JubJub doesn't look too happy to be on a stamp.\",\"/images/items/stamp_tyrannia_jubjub.gif\"],[\"Tyrannian Korbat Stamp\",60,\"This stamp depicts a Tyrannian Korbat soaring through the skies.\",\"/images/items/stamp_tyrannia_korbat.gif\"],[\"Tyrannian Blumaroo Stamp\",80,\"Ugga ugga ugg...\",\"/images/items/stamp_tyrannia_blum.gif\"],[\"Tyrannian Plateau Stamp\",86,\"A beautiful scene of the Tyrannian Plateau in daylight.\",\"/images/items/stamp_tyr_plateau.gif\"],[\"Flying Korbats Stamp\",88,\"Three Tyrannian Korbats are performing various aerial tricks in this picture.\",\"/images/items/stamp_tyr_korbat.gif\"],[\"Stone Armchair Stamp\",70,\"Ooh this chair looks just grand in this picture!\",\"/images/items/stamp_tyrannia_furn1.gif\"],[\"Giant Leaf Curtains Stamp\",80,\"A delicate picture of a pair of Giant Leaf Curtains.\",\"/images/items/stamp_tyrannia_furn2.gif\"],[\"Bone Chair Stamp\",79,\"A fragile yet beautiful piece of furniture is the focus of this great stamp.\",\"/images/items/stamp_tyrannia_furn3.gif\"],[\"Tyrannian Usul Stamp\",85,\"This stamp depicts a beautiful Tyrannian Usul in her natural habitat.\",\"/images/items/stamp_tyrannia_usul.gif\"],null,null,null,[\"Shiny Monoceraptor Stamp\",97,\"This stamp is extra special, its shiny!\",\"/images/items/stamp_tyrannia_mono.gif\"],[\"Stone Stamp\",98,\"Wow... this is the rarest stamp in the collection!\",\"/images/items/stamp_tyr_stone.gif\"]]")
    database[4] = JSON.parse("[[\"Brain Tree Stamp\",80,\"Do you know when and where Alstaf Poogle died?\",\"/images/items/stamp_hal_brain.gif\"],[\"Esophagor Stamp\",70,\"Always hungry, the Esophagor is one of the providers of quests in Neopia.\",\"/images/items/stamp_hal_esoph.gif\"],[\"Fetch! Stamp\",60,\"That poor Blumaroo doesn't have much of a life does he?\",\"/images/items/stamp_hal_fetch.gif\"],[\"Haunted Mansion Stamp\",92,\"JOSH!!! JOOOOSSSHHHHHH!!!\",\"/images/items/stamp_hal_house.gif\"],[\"Spyder Stamp\",90,\"What was that noise under your bed? It must have been the wind... right?\",\"/images/items/stamp_hal_spyder.gif\"],null,[\"Hubrid Nox Stamp\",85,\"*CACKLE* I shall turn your Neopets to pate and eat them with some low calorie crackers!\",\"/images/items/stamp_haunted_hubrid.gif\"],[\"Mutant Usul Stamp\",76,\"Cute, in a kind of mutated way...\",\"/images/items/stamp_haunted_mutantusul.gif\"],[\"Rock Stamp\",70,\"Just hope it doesn't end up at the dead-letter office.\",\"/images/items/stamp_haunted_petrock.gif\"],[\"Carnival of Terror Stamp\",80,\"Watch out, they are full of custard!\",\"/images/items/stamp_haunted_carnival.gif\"],[\"Korbats Lab Stamp\",70,\"Korbats Lab, the game where you have to destroy the boxes in Sloths Lab, is quite fun!\",\"/images/items/stamp_hal_korbatslab.gif\"],[\"Luperus Left Head Stamp\",92,\"Luperus is a three heade..\",\"/images/items/stamp_haunted_cerbekusleft.gif\"],[\"Luperus Centre Head Stamp\",93,\"...d Lupe who guards a particularly deep a...\",\"/images/items/stamp_haunted_cerbekuscenter.gif\"],[\"Luperus Right Head Stamp\",94,\"...nd nasty dungeon in the Haunted Woods.\",\"/images/items/stamp_haunted_cerbekusright.gif\"],[\"Halloween Aisha Stamp\",70,\"When Aishas go bad...\",\"/images/items/stamp_hal_aishahal.gif\"],[\"Spooky Gravestone Stamp\",78,\"If you look closely at the moon you can see a Korbat flying across the sky.\",\"/images/items/stamp_hal_rip.gif\"],[\"Moonlit Werelupe Stamp\",80,\"Eep! This is one scary character.\",\"/images/items/stamp_hal_were.gif\"],[\"Moonlit Esophagor Stamp\",82,\"Rawr! ... its the Esophagor!\",\"/images/items/stamp_hal_eso.gif\"],[\"Edna the Zafara Stamp\",90,\"This spooky little Zafara spends most of her time brewing bizarre foods and spells.\",\"/images/items/stamp_edna.gif\"],[\"Glowing Brain Tree Stamp\",88,\"Thie stamp looks altogether eerie!\",\"/images/items/stamp_hal_tree.gif\"],[\"ARGH!!!! DONNA STAMP\",99,\"AIEEEEEE!!!!!! ITS TOO HIDEOUS FOR WORDS!!!\",\"/images/items/stamp_hal_scary.gif\"],[\"Count Von Roo Stamp\",98,\"This rare stamp features the evil Count von Roo himself!\",\"/images/items/stamp_haunted_vonroo.gif\"],[\"Misprint Meuka Stamp\",99,\"Oops, I am sure they meant Neopoints instead of... whatever that is!\",\"/images/items/stamp_hal_meucapound.gif\"],[\"Holographic Magax Stamp\",99,\"Magax\",\"/images/items/stamp_hal_magax.gif\"],[\"Foil Slorg Stamp\",99,\"Looks more embossed than foil, but oh well...\",\"/images/items/stamp_hal_slorg.gif\"]]")
    database[5] = JSON.parse("[[\"Alien Aisha Vending Stamp\",80,\"The Alien Aishas really have no clue when it comes to cookery.\",\"/images/items/stamp_neo_alienvend.gif\"],[\"Orange Skeith Stamp\",50,\"Who are you calling girly?\",\"/images/items/stamp_skeith_orange.gif\"],[\"Skeith Bank Manager Stamp\",70,\"Good morning Sir, would you care to open an account?\",\"/images/items/stamp_skeith_bank.gif\"],[\"Robot Skeith Stamp\",50,\"You haven't experienced pain until a Robot Skeith steps on your foot.\",\"/images/items/stamp_skeith_robot.gif\"],[\"Huberts Hot Dogs Stamp\",70,\"Seller of the greatest hotdogs in the whole of Neopia!\",\"/images/items/stamp_neo_hotdog.gif\"],[\"Wishing Well Stamp\",65,\"Be careful what you wish for...\",\"/images/items/stamp_neo_well.gif\"],[\"Money Tree Stamp\",60,\"Sometimes ghosts will steal money from you and place it on the Money Tree.\",\"/images/items/stamp_neo_money.gif\"],[\"Rainbow Pool Stamp\",90,\"When your Neopet comes out, he or she could be any colour in the rainbow!\",\"/images/items/stamp_neo_rainbow.gif\"],[\"Kauvara Stamp\",80,\"Neopias resident magic potion maker Kauvara can brew something to change your colour and your species!\",\"/images/items/stamp_neo_kauvara.gif\"],[\"Shop Wizard Stamp\",85,\"Want a good deal? He is the guy to talk to!\",\"/images/items/stamp_neo_shopwiz.gif\"],[\"Book Shop Nimmo Stamp\",70,\"The blu.. blue... chia pla.. plays with the b.. a... ll\",\"/images/items/stamp_neo_book.gif\"],null,null,[\"Neolodge Stamp\",73,\"Mmmm... doesn't this stamp make you want to book a deluxe room now?\",\"/images/items/stamp_nc_lodge.gif\"],null,[\"Deluxe Money Tree Stamp\",85,\"This stamp is much better than your basic Money Tree stamp, its hand painted for a start :)\",\"/images/items/stamp_nc_tree.gif\"],[\"Neopian Hospital Stamp\",87,\"If your pet is feeling less than chipper, take them to the hospital and they will soon be feeling back to normal.\",\"/images/items/sta_gelert_doctor.gif\"],[\"Jelly Pop Stamp\",86,\"How pretty, this stamp has three jelly pops on it.\",\"/images/items/stamp_jelly_pop.gif\"],[\"Jelly World Stamp\",90,\"Wow... so this is what Jelly world looks like!\",\"/images/items/stamp_jelly_world.gif\"],[\"Usukiland Stamp\",88,\"Usuki! Usuki! Usuki!\",\"/images/items/sta_usukiland.gif\"],[\"Super Bright Rainbow Pool Stamp\",89,\"Goodness... could this stamp be any more colourful?!!?\",\"/images/items/stamp_nc_rain.gif\"],[\"Foil Food Shop Stamp\",99,\"OMG! It's Foil! Must be super expensive!\",\"/images/items/stamp_neo_food_foil.gif\"],[\"Chocolate Factory Stamp\",89,\"Mmm... this stamp makes it look as if the chocolate factory is really made of chocolate...\",\"/images/items/sta_chocfactory.gif\"],null,[\"Neopia Central Scene Stamp\",89,\"This aerial shot of Neopia Central is just the thing to complete your set.\",\"/images/items/sta_aerial.gif\"]]")
    database[6] = JSON.parse("[[\"NeoQuest Logo Stamp\",98,\"NeoQuest is a very popular game in Neopia, and can be exceedingly frustrating towards the higher levels.\",\"/images/items/stamp_nq_logo.gif\"],[\"NeoQuest Hero Stamp\",98,\"The hero of NeoQuest!!!\",\"/images/items/stamp_nq_hero.gif\"],[\"Jahbal Stamp\",98,\"He looks scary, even in two dimensions.\",\"/images/items/stamp_nq_jahbal.gif\"],[\"Rotting Skeleton Stamp\",50,\"Not only is it rotting, its also on fire!\",\"/images/items/stamp_neoquest_skeleton.gif\"],[\"Mist Kougra Stamp\",60,\"Hey, they never said we could get a mist paintbrush!\",\"/images/items/stamp_neoquest_mistkougra.gif\"],[\"Plains Aisha Stamp\",70,\"Last thing you want to meet when you are down to one hit point with no healing potions!\",\"/images/items/stamp_neoquest_aisha.gif\"],[\"Two Rings Archmagus Stamp\",70,\"Masters of magic, the archmagi of the Two Rings command armies of lesser wizards, but are themselves formidable foes who may summon the elements to do their bidding.\",\"/images/items/stamp_neoquest_archmagus.gif\"],[\"Boraxis the Healer Stamp\",74,\"A long-time resident of Neopia City, Boraxis is there to heal your wounds and injuries whenever you need his assistance.\",\"/images/items/stamp_neoquest_boraxis.gif\"],[\"Two Rings Crusader Stamp\",78,\"These ardent defenders of Jahbals realm patrol the hills and forests of the Two Rings mountains, defending against any who would intrude there.\",\"/images/items/stamp_neoquest_crusader.gif\"],[\"Pomanna Stamp\",80,\"A crazy old servant, Pomanna worked in the jungle research facility until it was overrun by monsters. Now, she hides in the deepest level, protecting her home from invasion by Rollays monstrous lizards.\",\"/images/items/stamp_neoquest_pomanna.gif\"],[\"Mokti and Rikti Stamp\",88,\"This mischievious pair may help you out on your travels through the NeoQuest realm.\",\"/images/items/stamp_mokti_rikti.gif\"],[\"Mr Irgo Stamp\",60,\"This black market dealer is now immortalised in stamp form!\",\"/images/items/stamp_neoquest_irgo.gif\"],[\"Black Bearog Stamp\",50,\"Eeek its a terrifying black Bearog\",\"/images/items/stamp_neoquest_bearog.gif\"],[\"Gatekeeper Stamp\",89,\"A fierce and noble guardian that will look great in your stamp album.\",\"/images/items/stamp_gatekeeper.gif\"],[\"Leirobas Stamp\",70,\"This Quiggle loves his swamp and has a rather bizarre hobby.\",\"/images/items/stamp_leirobas.gif\"],[\"Archmagus of Roo Stamp\",70,\"An ancient wizard, trapped within the desert-entombed Temple of Roo is now trapped in a stamp!\",\"/images/items/stamp_neoquest_archmagusroo.gif\"],null,[\"Zombie Faleinn Stamp\",87,\"Once a great ruler of Kal Panning, Faleinn will need your help if she is ever going to break her curse.\",\"/images/items/sta_faleinn.gif\"],[\"Kreai Stamp\",90,\"For something so small Kreai causes a whole lot of trouble!\",\"/images/items/sta_kreai.gif\"],[\"Morax Dorangis Stamp\",80,\"Moraxs armour has aided many an eager traveller.\",\"/images/items/sta_morgaxdorangis.gif\"],[\"Guardian Of Spectral Magic Stamp\",96,\"Why choose between light and dark when you can wield them both?\",\"/images/items/sta_spectralmagic.gif\"],[\"Tylix Stamp\",89,\"Keen student and sworn enemy of Gors the Mighty, Tylix can prove very helpful in your quest.\",\"/images/items/sta_tylix.gif\"],[\"Eleus Stamp\",90,\"You wouldn't get very far without the aid of Eleus!\",\"/images/items/sta_eleus.gif\"],[\"Gors The Mighty Stamp\",97,\"A gigantic mutated pygmy that you really wouldn't want to meet on a dark night.\",\"/images/items/sta_gors.gif\"],[\"Xantan Stamp\",99,\"Even being banished to the bottom of the Dank Cave didn't stop Xantan proving a real pain to beat.\",\"/images/items/sta_xantan.gif\"]]")
    database[7] = JSON.parse("[[\"Snow Wars Catapult Stamp\",58,\"Remember all those great Snow Wars tactics with this catapult stamp.\",\"/images/items/stamp_snowy_snowwars.gif\"],[\"Rainbow Slushie Stamp\",60,\"A colourful design that will look great in any stamp album!\",\"/images/items/stamp_snowy_slushie.gif\"],[\"Frosty Snowman Stamp\",75,\"It's a happy little snow man, how cute.\",\"/images/items/stamp_snowy_man.gif\"],[\"Wintery Petpet Shop Stamp\",79,\"Mmm... this house looks good enough to eat!\",\"/images/items/stamp_snowy_ginger.gif\"],[\"Wintery Bruce Stamp\",78,\"A jolly little Bruce brightens up this snowy scene.\",\"/images/items/stamp_snowy_bruce.gif\"],[\"Christmas Meerca Stamp\",83,\"This seasonal stamp will brighten up any album.\",\"/images/items/stamp_snowy_meerca.gif\"],[\"Terror Mountain Scene Stamp\",80,\"A beautiful scene taken from the top of Terror Mountain.\",\"/images/items/stamp_snowy_valley.gif\"],[\"Igloo Garage Sale Stamp\",80,\"Aww look its Mika and Carassa!\",\"/images/items/stamp_snowy_igloo.gif\"],[\"Rink Runner Stamp\",85,\"Hehe this is the Bruce from the Rink Runner game :)\",\"/images/items/stamp_snowy_rink.gif\"],[\"Christmas Kougra Stamp\",75,\"Behold the grace and elegance of the Christmas Kougra.\",\"/images/items/stamp_snowy_kougra.gif\"],[\"Christmas Uni Stamp\",70,\"This happy little Uni will add some seasonal cheer to any stamp album.\",\"/images/items/sta_christmasuni.gif\"],[\"Christmas Zafara Stamp\",80,\"This angelic looking Zafara makes this stamp look simply stunning.\",\"/images/items/stamp_snowy_zafara.gif\"],[\"Scratchcard Kiosk Stamp\",84,\"A cute photo of the Wocky that runs the Scratchcard Kiosk :)\",\"/images/items/stamp_snowy_wocky.gif\"],[\"Candychan Stamp\",79,\"Now you can own a Candychan stamp, even if you don't have one as a Petpet.\",\"/images/items/stamp_snowy_candychan.gif\"],[\"Grundo Snow Throw Stamp\",82,\"It almost makes you want to run outside and pick up a snowball.\",\"/images/items/sta_grundothrow.gif\"],[\"Stocking Stamp\",80,\"It looks like someone has hung their stocking up wishing it will magically be filled with presents.\",\"/images/items/sta_stocking.gif\"],[\"Cliffhanger Stamp\",88,\"Don't get the letters wrong or the Tuskaninny will plummet to his doom!\",\"/images/items/sta_cliffhanger.gif\"],[\"Christmas Scene Stamp\",89,\"This little Kougra looks very happy that it is snowing.\",\"/images/items/sta_winter_christmas_kougra.gif\"],[\"SHFISS Stamp\",80,\"All kinds of frozen treats can be purchased at this shop!\",\"/images/items/sta_winter_snow_shop.gif\"],[\"Negg Faerie Stamp\",90,\"A pretty watercolour of the Negg Faerie and her favourite Negg.\",\"/images/items/stamp_snowy_neggfaerie.gif\"],[\"Snow Faerie Stamp\",80,\"Ahh... the beautiful Snow Faerie...\",\"/images/items/stamp_snowy_faerie.gif\"],[\"Ski Lodge Stamp\",86,\"Nobody talks about what went on one dark, cold winter ago...\",\"/images/items/sta_winter_ski_lodge.gif\"],[\"Snowager Stamp\",89,\"Eeek the Snowager looks awfully angry in this picture!\",\"/images/items/stamp_snowy_snowager.gif\"],[\"Snowbunny Stamp\",99,\"A cute little Snowbunny has hopped right into this stamp!\",\"/images/items/sta_winter_snowbunny.gif\"],null]")
    database[8] = JSON.parse("[[\"Meridell Heroes Stamp\",94,\"The heroes of the story, the ones that discovered the lost realm of Meridell.\",\"/images/items/stamp_destruct_fight.gif\"],[\"Darigan Citadel Stamp\",93,\"How does it stay in the air?\",\"/images/items/stamp_destruct_castle3.gif\"],[\"Meridell Castle Stamp\",92,\"What a lovely castle, shame it is about to be reduced to rubble.\",\"/images/items/stamp_destruct_castle2.gif\"],[\"Green Knight Stamp\",91,\"The Green Knight fighting a Draconian Skeith\",\"/images/items/stamp_destruct_greenknight.gif\"],[\"Lisha vs Zombie Lisha Stamp\",90,\"Lisha, fighting her zombified self!\",\"/images/items/stamp_destruct_aisha.gif\"],[\"Morris Stamp\",96,\"Hey, its everyones favourite Quiggle!\",\"/images/items/stamp_meridell_morris.gif\"],[\"Skeith Defender Stamp\",98,\"Loyal, gruff and incredibly large, it's no wonder nobody disagrees with him.\",\"/images/items/stamp_meridell_skeithdefender.gif\"],[\"Darigan Moehog Stamp\",97,\"One of many loyal Moehog warriors that fought for the freedom of Darigan.\",\"/images/items/stamp_meridell_darmoehog.gif\"],[\"Boris Stamp\",90,\"Yikes! He is scary!\",\"/images/items/sta_bfm_lastone.gif\"],[\"Draik Guard Stamp\",84,\"Without the loyal Draik guards Meridell Castle would be defenceless.\",\"/images/items/sta_meridell_draikguard.gif\"],[\"Yellow Knight Stamp\",95,\"The only prisoner to escape the dungeons of Darigan beams smugly from this stamp.\",\"/images/items/sta_meridell_yellowknight.gif\"],[\"Meridell Shield Stamp\",89,\"A symbol of honour and pride to all of Meridell.\",\"/images/items/sta_meridell_shield.gif\"],[\"Drackonack Stamp\",97,\"Possibly the cutest thing to come out of Darigan.\",\"/images/items/sta_meridell_drackonack.gif\"],[\"Darigan Shield Stamp\",86,\"This shield seems to have some bad anti-aliasing around it. I wonder if that was on purpose?\",\"/images/items/stamp_darigan_shield.gif\"],[\"Darigan Eyrie Stamp\",79,\"Swooping down from the sky this Eyrie terrified many a Meridell resident before the war was over.\",\"/images/items/stamp_meridell_dareyrie.gif\"],[\"Turmaculus Stamp\",89,\"Ooops looks like someone got a little hungry while making this stamp!\",\"/images/items/stamp_meridell_turmaculus.gif\"],[\"Darigan Elemental Stamp\",80,\"Dark, brooding and mysterious, this Elemental is something you don't want to mess with.\",\"/images/items/stamp_darigan_elemental.gif\"],[\"Illusen Stamp\",90,\"The stamps border contrasts perfectly with Illusen's chestnut hair, almost as if she planned it.\",\"/images/items/stamp_meridell_illusen.gif\"],[\"Golden Orb Stamp\",80,\"A glistening enchanting gem that holds many mysterious powers.\",\"/images/items/stamp_orb.gif\"],[\"Zombified Heroes Stamp\",93,\"Its our lovable heroes in zombie form!\",\"/images/items/stamp_darigan_zombies.gif\"],[\"Lord Darigan Stamp\",82,\"Once a proud ruler of a fair kingdom, Lord Darigan searched for the orb to restore peace to his citadel.\",\"/images/items/stamp_darigan.gif\"],[\"King Skarl Stamp\",90,\"King Skarl, ruler of Meridell and possibly the grumpiest king in Neopia.\",\"/images/items/stamp_meridell_skarl.gif\"],[\"Master Vex Stamp\",85,\"Master Vex is a prison warden who is incredibly bored. Lord Darigan has entrusted him to keep his dungeons safe and secure.\",\"/images/items/stamp_vex.gif\"],[\"Darigan Spectre Stamp\",99,\"The twisted demonic version of Lord Darigan brings tears to most Neopets eyes.\",\"/images/items/sta_meridell_dariganspect.gif\"],[\"Jeran Stamp\",90,\"The loyal Jeran, defender of all things true and fair.\",\"/images/items/stamp_darigan_jeran.gif\"]]")
    database[9] = JSON.parse("[[\"Golden Khamette Stamp\",62,\"This glossy stamp has a cute Khamette on a holographic background.\",\"/images/items/stamp_desert6.gif\"],[\"Desert Petpet Stamp\",60,\"A collection of four Petpets in a cute Lost Desert setting.\",\"/images/items/stamp_desert5.gif\"],[\"Pyramid Sun Rise Stamp\",58,\"This sun has just risen over the giant pyramid in the Lost Desert.\",\"/images/items/stamp_desert4.gif\"],[\"Lost Desert Grarrl Stamp\",70,\"A friendly Grarrl is waving to you in this picture.\",\"/images/items/stamp_desert3.gif\"],[\"Advisor Wessle Stamp\",60,\"Oooh it's that sneaky Advisor Wessle from the Usurper game.\",\"/images/items/stamp_desert_wessle.gif\"],[\"Senator Palpus Stamp\",60,\"Palpus is an old retired general in the Sakhmet Defence Force.\",\"/images/items/stamp_desert_palpus.gif\"],[\"Midnight Desert Lupe Stamp\",80,\"A beautiful night scene featuring a majestic Desert Lupe.\",\"/images/items/stamp_desert2.gif\"],[\"Ummagine Stamp\",90,\"It's an Ummagine - how nice.\",\"/images/items/stamp_desert_ummagine.gif\"],[\"Osiris Pottery Stamp\",76,\"This stamp is decorated with a design from one of Osiris world famous pieces of art.\",\"/images/items/stamp_desert_pottery.gif\"],[\"Senator Barca Stamp\",80,\"Senator Barca requested a sepia tone stamp to show off her complexion.\",\"/images/items/stamp_desert_barca.gif\"],[\"Desert Paintbrush Stamp\",89,\"This dazzling paint brush design is much sought after.\",\"/images/items/stamp_desert_pb.gif\"],[\"Peopatra Stamp\",78,\"This kind Peophin runs the Lost Desert Petpet shop where she cares for Petpets until they can find good homes.\",\"/images/items/stamp_desert_peopatra.gif\"],[\"Grackle Bug Stamp\",60,\"A bit of a delicacy in the Lost Desert, Grackle Bugs are best cooked over an open fire.\",\"/images/items/sta_gracklebug.gif\"],[\"Princess Sankara Stamp\",80,\"This stamp features the beautiful yet treacherous Princess Sankara.\",\"/images/items/stamp_desert_sankara.gif\"],[\"Lost Desert Scroll Stamp\",90,\"This stamp looks a little bit tatty around the edges. It must be very old!\",\"/images/items/stamp_desert1.gif\"],[\"Lost Desert Sphinx Stamp\",76,\"Nobody knows how it got there or who made it but it is very impressive.\",\"/images/items/sta_kacheeksphinx.gif\"],[\"Tug Of War Stamp\",79,\"Heave... heave... splash!\",\"/images/items/sta_tugowar.gif\"],[\"Fruit Machine Stamp\",80,\"Everyone loves the Fruit Machine, especially this happy little Kougra.\",\"/images/items/sta_fruitmachine.gif\"],[\"Sakhmet Palace Stamp\",80,\"Princess Vyssa gave special permission to allow this stamp to be printed.\",\"/images/items/stamp_desert_sakhmet.gif\"],[\"Holographic Sakhmet City Stamp\",89,\"A lovely sunset secene captured forever on this delightful stamp.\",\"/images/items/sta_sakhmet.gif\"],[\"Geb Stamp\",84,\"This cute Geb stamp is actually pretty rare.\",\"/images/items/stamp_desert_geb.gif\"],[\"Coltzan Stamp\",101,\"Sorry Donna I borrowed this for a Lenny Conundrum prize!\",\"/images/items/stamp_desert_coltzan.gif\"],[\"Scarab Stamp\",93,\"A real piece of art, this scarab is made from very delicate hand made paper.\",\"/images/items/stamp_desert_scarab.gif\"],[\"Lucky Coin Stamp\",92,\"Ooh this stamp features the legendary Lucky Coin that Brucey B used to win all those Cheat games...\",\"/images/items/stamp_desert_coin.gif\"],[\"Holographic Coltzans Shrine Stamp\",99,\"A mystical place where some say they can still feel King Coltzans presence.\",\"/images/items/stamp_desert_shrine.gif\"]]")
    database[10] = JSON.parse("[[\"Jewelled Scarab Stamp\",88,\"A dazzling, sparkly stamp that really makes this weapon look stunning.\",\"/images/items/stamp_jeweledscarab.gif\"],[\"Sword of Skardsen Stamp\",88,\"Ok so it can't help you in the Battledome, but it will look pretty snazzy in your stamp collection.\",\"/images/items/sta_bd_swordofscardsen.gif\"],[\"Attack Pea Stamp\",76,\"Many people laugh at the Attack Pea and many people get hit by it!\",\"/images/items/sta_bd_attackpea.gif\"],[\"Slorg Flakes Stamp\",68,\"Mmm Slorg Flakes, everyone loves them right?\",\"/images/items/sta_bd_slorgflakes.gif\"],[\"Faerie Slingshot Stamp\",70,\"How can something so pretty hurt so much?\",\"/images/items/sta_bd_slingshot.gif\"],[\"Hubrids Puzzle Box Stamp\",72,\"What a harmless looking thing, but press the wrong switch and this box turns into a lethal weaopon...\",\"/images/items/sta_bd_puzzlebox.gif\"],[\"Eraser of the Dark Faerie Stamp\",87,\"Wow what a long name for such a little thing...\",\"/images/items/sta_bd_darkfaerieeraser.gif\"],[\"Jhudoras Bewitched Ring Stamp\",86,\"Argh get it away from me, its cursed you know!\",\"/images/items/sta_jhudoraring.gif\"],[\"Everlasting Crystal Apple Stamp\",84,\"Ooh this stamp is very shiny! Even the crystal ball has sparkly bits inside it!\",\"/images/items/sta_crystalapple.gif\"],[\"Sword of the Air Faerie Stamp\",85,\"An elegant edition to any stamp album!\",\"/images/items/sta_airsword.gif\"],[\"Rod Of Dark Nova Stamp\",89,\"Aiii.... this rod is scary looking...\",\"/images/items/stamp_rodofdarknova.gif\"],[\"Jade Scorchstone Stamp\",90,\"Ok so the real thing may be retired, but at least you can own the stamp.\",\"/images/items/stamp_jadescorchstone.gif\"],[\"Thyoras Tear Stamp\",80,\"You may not be able to get your hands on the real thing, but at least you can own the stamp.\",\"/images/items/sta_thyoras_tear.gif\"],[\"Exploding Space Bugs Stamp\",85,\"Whee.. Exploding Space Bugs are always fun...\",\"/images/items/sta_exploding_space_bugs.gif\"],[\"Monoceraptor Claw Stamp\",83,\"It even looks menacing on a stamp!\",\"/images/items/sta_monoceraptor_claw.gif\"],[\"Wand Of The Dark Faerie Stamp\",87,\"Betcha wish you had the real thing.\",\"/images/items/sta_bd_darkwand.gif\"],[\"Alien Aisha Myriad Stamp\",88,\"Ahh the legendary Alien Aisha Myriad...\",\"/images/items/sta_myriad.gif\"],[\"Alien Aisha Ray Gun Stamp\",86,\"Interesting design. I wonder what happens if I press thi... BLAM!\",\"/images/items/sta_bd_alienaishagun.gif\"],[\"Kings Lens Stamp\",87,\"The legendary Kings Lens, so named after King Coltzan himself.\",\"/images/items/sta_bd_kings_lens.gif\"],null,[\"Illusens Staff Stamp\",85,\"Far more than just a gnarled piece of wood.\",\"/images/items/sta_bd_staff_illusen.gif\"],[\"Shield Of Pion Troect Stamp\",80,\"This stamp will remind you to practice those anagrams so one day you may own the real thing!\",\"/images/items/sta_bd_pion_shield.gif\"],[\"Rainbow Sticky Hand Stamp\",96,\"It's your colourful flexible friend (unless it takes something from you that is).\",\"/images/items/sta_rainbowhand.gif\"],[\"Dark Battle Duck Stamp\",98,\"Quack!\",\"/images/items/sta_darkduck.gif\"],[\"Battle Slices Stamp\",99,\"Don't lick it too hard, your tongue may fall off.\",\"/images/items/sta_bd_slices.gif\"]]")
    // no stamps in coins
    database[12] = JSON.parse("[[\"Dark Graspberry Stamp\",86,\"Eww someone has dropped this graspberry in the mud!\",\"/images/items/sta_darkgraspberry.gif\"],[\"Gelert Prince Stamp\",84,\"Meridell, home of royalty, fine castles and slimy kissing things...\",\"/images/items/sta_gelertprince.gif\"],[\"Sunblade Stamp\",90,\"Jerans legendary sword sparkles magnificently on this shiny stamp.\",\"/images/items/sta_sunblade.gif\"],[\"Meridell Gardens Stamp\",87,\"How pretty, dont you just want to go there.\",\"/images/items/sta_meridellgardens.gif\"],[\"Petpet Growth Syrup Stamp\",83,\"One of Kaylas more successful potions...\",\"/images/items/sta_growth_syrup.gif\"],[\"Zafara Princess Stamp\",85,\"Will she ever find her prince?\",\"/images/items/sta_zafara_princess.gif\"],[\"Gallion Stamp\",80,\"Aww how cute, this stamp has a Gallion on it!\",\"/images/items/sta_gallion.gif\"],[\"Quiggle Scout Stamp\",85,\"This brave look out watches the skies of Meridell and warns the king of any danger.\",\"/images/items/sta_quiggle_scout.gif\"],[\"Blugthak Stamp\",96,\"Blugthak smash, Blugthak destroy!\",\"/images/items/sta_bfm_blugthak.gif\"],[\"Castle Defender Stamp\",90,\"Stern protector of Meridell, this spectre has come in handy on many an occasion.\",\"/images/items/sta_bfm_defender.gif\"],[\"Usul-in-waiting Stamp\",89,\"If you need to keep up with the castle gossip, just talk to this little Usul.\",\"/images/items/sta_bfm_usul.gif\"],[\"Blumaroo Court Jester Stamp\",92,\"Keeping King Skarl happy is anything but easy!\",\"/images/items/sta_bfm_jester.gif\"],[\"King Skarl Plushie Stamp\",89,\"Funny, he even looks grumpy as a plushie!\",\"/images/items/sta_bfm_skarlplush.gif\"],[\"Nova Storm Stamp\",88,\"A brilliant sparkling stamp that will be the pride of your collection.\",\"/images/items/sta_bfm_nova.gif\"],[\"105 Castle Secrets Stamp\",87,\"Old castles are simply full of secret passages you know!\",\"/images/items/sta_bfm_secrets.gif\"],[\"Exploding Acorns Stamp\",86,\"A handful of these will have your opponents running for cover.\",\"/images/items/sta_bfm_acorns.gif\"],null,null,[\"Court Dancer Stamp\",98,\"What a pretty little thing, how can she be bad?\",\"/images/items/sta_bfm_court_dancer.gif\"],[\"Hadrak Stamp\",98,\"This devious little Mycni has been responsible for many a great battle!\",\"/images/items/sta_bfm_hadrak.gif\"],[\"Morguss Stamp\",98,\"This withered old Moehog has many tricks up her sleeves.\",\"/images/items/sta_morguss.gif\"],null,null,null,[\"The Three Stamp\",99,\"This is the rarest and most expensive stamp in the whole set!\",\"/images/items/sta_three.gif\"]]")
    // no stamps here
    // no stamps here
    database[15] = JSON.parse("[[\"Valentine Stamp\",99,\"Be mine?\",\"/images/items/stamp_valentine.gif\"]]")


    const table = document.querySelector(`table[width="450"]`)
    const cells = table.querySelectorAll("td img")

    // Double click for a shop wizard searchg
    table.addEventListener('dblclick', e => {
        // Any element with 'name' in its dataset is considered shop wizard searchable
        const name = e.target?.dataset?.name
        if (name) {
            // A stamp was clicked
            e.stopPropagation()
            e.preventDefault()
            // Open the shop wizard in a new tab
            searchWizard(name)
        }
    })

    table.addEventListener('click', e => {
        const slot = e?.target?.dataset?.position
        if (typeof slot === "string") {
            updateInfo(+slot)
        }
    })


    // The url stores a query parameter page_id=? which indicates the current album
    const page = +new URLSearchParams(window.location.search).get("page_id")

    // Update the album slots
    for (let slot=0; slot < cells.length ; slot++) {
        // This identifies if we have a stamp, wheteher it is collected and a database entry
        const cell = cells[slot]
        const collected = cell.title
        const databaseEntry = database[page] ? database[page][slot] : undefined
        // Update the dataset for the shop wizard functionality
        if (databaseEntry) {
            cell.dataset.position = slot
            cell.dataset.name = databaseEntry[0]
            cell.dataset.rarity = databaseEntry[1]
            cell.dataset.description = databaseEntry[2]
            cell.dataset.collected = !!collected
        }
        // Uncollected stamp fill the slot with database info
        if (databaseEntry && !collected) {
            cell.src = databaseEntry[3]
            cell.title = `${databaseEntry[0]} - r${databaseEntry[1]} : ${databaseEntry[2]}`
            cell.style.opacity = 0.25
        }
    }




    function searcher(url, value, select) {
        return function(query) {
            const w = window.open(url)
            w.addEventListener("DOMContentLoaded", (e) => {
                // Fill the shop wizard form with the name of the stamp and set it to
                // identical search
                const IDENTICAL_TO_MY_PHRASE = value
                const searchMethod = w.document.querySelector(`select[name='${select}']`)
                const queryInput = w.document.querySelector("input[name='query']")
                if (searchMethod && queryInput) {
                    searchMethod.value = IDENTICAL_TO_MY_PHRASE
                    queryInput.value = query
                }
            })
        }
    }

    function encodeQuery(key, value) {
        const tmp = new URLSearchParams()
        tmp.set(key, value)
        return tmp.toString()
    }

    const searchWizard = searcher('/market/wizard', 1, 'search_method')
    const searchTradingPost = searcher('/island/tradingpost/browse/', 2, 'category')
    const searchAuctionHouse = () => window.open("/auctions")
    const searchSDB = (query) => window.open(`/safetydeposit/?page=1&${encodeQuery("query", query)}&category=0`)
    const searchJellyneo = (query) => window.open(`https://items.jellyneo.net/search/?${encodeQuery("name", query)}`)

    // Show a rich info box at the bottom
    table.insertAdjacentHTML("beforeend", `<tbody>
    <tr>
    <td colspan="5">
      <div id="stampinfo" hidden>
        <div class="name">name</div>
        <div class="rarity"></div>
        <div class="cols">
        <div class="arrow" data-delta="-1"><</div>
        <div class="image"><img src=""/></div>
        <div class="labels">
           <div><label>Position: </label><span class="position"></span></div>
           <div><label>Status: </label><span class="status"></span></div>
           <div class="links">
             <img data-search="wizard" src="https://raw.githubusercontent.com/kreotsai/npcShopTools/main/shopwiz.gif" />
             <img data-search="trading" src="https://raw.githubusercontent.com/kreotsai/npcShopTools/main/trade_offer.png" />
             <img data-search="auction-house" src="https://i.ibb.co/vYzmPxV/auction25.gif" />
             <img data-search="sdb" src="https://i.ibb.co/gRQ24Jx/sdb25.gif" />
             <img data-search="jn" src="https://i.ibb.co/cvGsCw4/fishnegg25.gif" />
           </div>
        </div>
        <div class="arrow" data-delta="1">></div>
        </div>
      </div>
    </td>
    </tr>
    </tbody><style>
    #stampinfo {
      margin-top: 1em;
      padding: 1em;
      border: 1px solid #aaa;
    }
    #stampinfo .arrow {
       font-size: 2em;
       display: flex;
       align-items: center;
       user-select: none;
       cursor: pointer;
    }
    #stampinfo > div {
       text-align: center;
    }
    #stampinfo .labels {
       text-align: left;
       display: grid;
       row-gap: 0.5em;
    }
    #stampinfo .image {
       padding: 0 2em 0 1em;
       user-select: none;
    }
    #stampinfo label,
    #stampinfo .name {
       font-weight: bold;
    }
    .cols {
       display: grid;
       grid-template-columns: min-content auto 1fr min-content;
    }
    [data-collected="true"] { color: darkgreen }
    [data-collected="false"] { color: darkred }

    </style>`)

    const stampinfo = table.querySelector("#stampinfo")

    const infos = {
        img : stampinfo.querySelector("img"),
        name : stampinfo.querySelector(".name"),
        rarity : stampinfo.querySelector(".rarity"),
        position : stampinfo.querySelector(".position"),
        status : stampinfo.querySelector(".status")
    }

    let currentPos = 0

    function updateInfo(pos) {
        const stampImage = cells[pos]
        if (!stampImage) return
        const { src, dataset } = stampImage
        if (!dataset) return
        const { name, rarity, collected } = dataset
        if (!name) return
        infos.img.src = src
        infos.name.textContent = name
        infos.rarity.textContent = "r" + rarity
        infos.position.textContent = pos + 1
        infos.status.textContent = collected === "true" ? "collected" : "not collected"
        infos.status.dataset.collected = collected
        stampinfo.hidden = false
        currentPos = pos
        return true
        // links: ssw, sw, tp, auc, sdb, jn
    }

    stampinfo.addEventListener("click", (e) => {
        // Move left or right to the next stamp, skipping over empty slots
        let delta = parseInt(e?.target?.dataset?.delta, 10)
        if (Math.abs(delta) !== 1) return;
        let target = currentPos + delta
        while (true) {
            if (updateInfo(target)) break; // returns true if the info was updated
            if (target < 0) break;
            if (target > 25) break;
            target = target + delta
        }
    })

    stampinfo.addEventListener("click", (e) => {
        const search = e.target.dataset.search
        const query = cells[currentPos].dataset.name
        const searchFunction = {
            "wizard" : searchWizard,
            "trading" : searchTradingPost,
            "auction-house" : searchAuctionHouse,
            "sdb" : searchSDB,
            "jn" : searchJellyneo
        }[search]
        if (searchFunction) {
            return searchFunction(query)
        }
    })

    const jellyneoLinks = {
        [1] : "https://items.jellyneo.net/search/mystery-island-album-avatar-list/",
        [2] : "https://items.jellyneo.net/search/virtupets-album-avatar-list/",
        [3] : "https://items.jellyneo.net/search/tyrannia-album-avatar-list/",
        [4] : "https://items.jellyneo.net/search/haunted-woods-album-avatar-list/",
        [5] : "https://items.jellyneo.net/search/neopia-central-album-avatar-list/",
        [6] : "https://items.jellyneo.net/search/neoquest-album-avatar-list/",
        [7] : "https://items.jellyneo.net/search/snowy-valley-album-avatar-list/",
        [8] : "https://items.jellyneo.net/search/meridell-vs-darigan-album-avatar-list/",
        [9] : "https://items.jellyneo.net/search/lost-desert-album-avatar-list/",
        [10] : "https://items.jellyneo.net/search/battledome-album-avatar-list/",
        [12] : "https://items.jellyneo.net/search/battle-for-meridell-album-avatar-list/",
    }

    const jellyneoLink = jellyneoLinks[page]
    if (jellyneoLink) {
            table.nextElementSibling?.insertAdjacentHTML("afterend", `<a href="${jellyneoLink}" target="_blank"/><center><img src="https://i.ibb.co/cvGsCw4/fishnegg25.gif" /> Album info <img src="https://i.ibb.co/cvGsCw4/fishnegg25.gif" /></center></a>`)
    }
    // debug
    // updateInfo(8)
})();