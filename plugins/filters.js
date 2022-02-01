/* Copyright (C) 2020 farhan-dqz.
julie 
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919495889589@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['Hi','Hlo','Aarulle','Ayn','Block','Bott chathu','Dii','Dora','Fan','Fayas','Food','Good night','Group active','Happy','I hate you','I love you','Ijjathi','Insult','Ivan','Kannappi','Kollam','Kollatte','Kozhi','Kunna','Manassilayo','Miss you','Mm','Mng','Nee','Ok da','Patti','Poli','Pottan','Pova','Povalle','Rip','Sarasu','Sed','Seen','Sorry','Start','Sticker','Time','Unda','Undakanni','Va','Vada','Vaza','Veno','Vilikk','Wow','baby','broken','mathiyo','poda','saralla','Liza','Poda','Da','alive','help','Jocker','ayn','patti','poli','Adi','Age','Air','Album song','Album','Bgm','Breakup','Hacker','Janu','Koye','Life','Line','status','Marannu','Mole','Noob','Pavam','Podi','Sed akki','Sed song','Senti','Thair','Umma','Venda','What','age','air','bgm','breakup','dii','i love you','janu','kannappi','kazichilla','kollam','life','line','love status','marannu','miss you','mole','noob','podi','rip','sarasu','sed akki','sed song','senti','sorry','thair','umma','vaza','venda','vilikk','what','Aara','Andi','Business','Chaya','Dude','Chathu','Happy Birthday','Home','Kollum','Mandan','Name','Nee etha','Nikk','Njan vannu','Parayatte','Poyo','Sry','Troll','Uff','Verupikkalle','aara','andi','business','chaya','group chathu','kollum','mandan','nee etha','nikk','njan vannu','parayatte','poyo','sry','troll','uff','verupikkalle','Aliya','Friend','Mass','Naayi','Njan','Vazha','Verupikal','aliya','friend','mass','njan','pova','vazha','verupikal','Baby','Jerry','Love','Nithin','Myr','Bot','bot','Bro','bro','Girls','Kanja','Kanjav','Kili','kanjav','kanja','mudiyan','Xxx','vedi','Love','problem','bayankara','Cr7','mute','pedi','fuck','sed','amru','broken sir','Peaky','Warn','Name','tts','Amruser','alive','ambada','update','Remove','removebg','Don','avastha','bad boy','bgm','bot noobe','bot','breakup','bro','business','chat','com','cristiano','gm','gn','good','group','hacker','hello','help','hi','Happy','indo','kollam','kollamo','kooi','lalettan','line','love me','Love','love','mm','modesh','muthe','myr','nanban','nanbans','neymer','njr','noorin','noorin shereef','of','off','owner','photo','pm','potte','remove','report','ronaldo','school','seen','sex','singel','spam','sticker','umma','welcome','wine','you','neymar','Adi','Aliya','Aliyo','Alone','Ano','Araa','Area','Arulle','Ayin','Baa','Bad','Bey','Bgmi','Bhasi','Black','Blaze boss','Blind','Block','Bomb','Bot sed','Bot','Breakup','By','Call','Chunks uyir','Chunk','Chunks','Cr7 back','Cr7','Cristiano','Da','Daa','Darshana','Dj','Do','E bull jet','Eda','Editing','Ee','Eee','Ellam poyi','Exam','fans','From','Full','Girl','Good morning','Good night','Ha','Hacker','Hai','Help','Hi','Hii','Hum','Humm','I love you','I','Idd','Indo','Kaliyannam','Kanjavu','Kannan','Kaztro','Kgf','Kill','Kiss','Kozhi','Kundan','Kutta','Kuttu','Line undo','Loo','Love vendada','Love you bot','Love you molu','Love','Mamma','Mine','Mm','Mood of','Mood','Myr','Myre','Nadakko','Nanban uyir','Nanban','Nanbans','Nb','Nee','Neymar','Njan ano','Njan eilla','Njan ind','Njan killadi alle','Njan nannayi','Njan poyi','Njan seen ane','Njan verum','Njr','No g','list','myre','uyire','menu','No','Noorin shereef','Noorin','Of','Ohh','Oii','Ok','On','Onam','Onn','Oo','Op','Ozhivaki','Paavam','Pavam','Pinne','Poda','Podimon','Polayat','Poli','Pova','Power','Powli','Pro','Pubg','Remix','Romantic','Ronaldo','Sara','Sed life','Set','Sex','Singel','Sir','Smile','Sorry','Supper','Thayoli','Theap','Theri','Tq','Umb','Umbi','Uyir','Va','Vaa','Vadaa','Vid','Welcome','Xxx','Free fire','free fire','call','6','Sed','Pm','Messi','Bgm','Aysheri','Hlo','darshana','git','Sad','Christmas','christmas','ban','bye','Aa','Hello']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919495889589@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['amru','broken sir','Peaky','Warn','Name','tts','Amruser','alive','ambada','update','Remove','removebg','Don','avastha','bad boy','bgm','bot noobe','bot','breakup','bro','business','chat','com','cristiano','gm','gn','good','group','hacker','hello','help','hi','Happy','indo','kollam','kollamo','kooi','lalettan','line','love me','Love','love','mm','modesh','muthe','myr','nanban','nanbans','neymer','njr','noorin','noorin shereef','of','off','owner','photo','pm','potte','remove','report','ronaldo','school','seen','sex','singel','spam','sticker','umma','welcome','wine','you','neymar','Adi','Aliya','Aliyo','Alone','Ano','Araa','Area','Arulle','Ayin','Baa','Bad','Bey','Bgmi','Bhasi','Black','Blaze boss','Blind','Block','Bomb','Bot sed','Bot','Breakup','By','Call','Chunks uyir','Chunk','Chunks','Cr7 back','Cr7','Cristiano','Da','Daa','Darshana','Dj','Do','E bull jet','Eda','Editing','Ee','Eee','Ellam poyi','Exam','fans','From','Full','Girl','Good morning','Good night','Ha','Hacker','Hai','Help','Hi','Hii','Hum','Humm','I love you','I','Idd','Indo','Kaliyannam','Kanjavu','Kannan','Kaztro','Kgf','Kill','Kiss','Kozhi','Kundan','Kutta','Kuttu','Line undo','Loo','Love vendada','Love you bot','Love you molu','Love','Mamma','Mine','Mm','Mood of','Mood','Myr','Myre','Nadakko','Nanban uyir','Nanban','Nanbans','Nb','Nee','Neymar','Njan ano','Njan eilla','Njan ind','Njan killadi alle','Njan nannayi','Njan poyi','Njan seen ane','Njan verum','Njr','No g','list','myre','uyire','menu','No','Noorin shereef','Noorin','Of','Ohh','Oii','Ok','On','Onam','Onn','Oo','Op','Ozhivaki','Paavam','Pavam','Pinne','Poda','Podimon','Polayat','Poli','Pova','Power','Powli','Pro','Pubg','Remix','Romantic','Ronaldo','Sara','Sed life','Set','Sex','Singel','Sir','Smile','Sorry','Supper','Thayoli','Theap','Theri','Tq','Umb','Umbi','Uyir','Va','Vaa','Vadaa','Vid','Welcome','Xxx','Free fire','free fire','call','6','Sed','Pm','Messi','Bgm','Aysheri','Hlo','darshana','git','Sad','Christmas','christmas','ban','bye','Aa','Hello','Daa']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/files/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: true },quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Alone','Ariyo','Ayin','Bie','Bomb','Bot','Bote','Cute','Hate','Hi','Hoi','Lub','Myr','Myre','Oh','Poda','Police','Poocha','Sed','Work','Wow','Z','aara','aayo','air','alla','alone','anthas','ariyo','ayin','aysheri','bie','bye','charge','chathu','cheyalle','chunk','colony','committed','cute','dance','dead','eda','eh','entha','exam','fan','fans','girl','girls','give','hate','hi','hlo','hoi','important','indo','killadi','kozhi','kunna','kutti','list','love','madthu','mama','marichu','mention','mood','morning','muthe','myr','myre','nee alle','njan','number','oh','ok','oombi','ooo','pedicho','pever','pidi','pm','powersh','powli','poyi','remove','sad','saved','scene','search','sed','shaad','sheri','shut','sry','teach','test','thech','think','thund','uff','umma','uyir','vada','vannu','vibe','work','wow','z']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

