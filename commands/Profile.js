const Jimp = require("jimp");
const prefix =('-')
const fs = require('fs');
const Canvas = require("canvas");
module.exports = {
  name: "profile",
  execute(client, message) {
 if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "profile")) {
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    var ment = message.mentions.users.first();
    var getvalueof;
    if (ment) {
      getvalueof = ment;
    } else {
      getvalueof = message.author;
    }
    var mentionned = message.mentions.users.first();

    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const credits = JSON.parse(fs.readFileSync("./Database/Credits.json", "utf8"));
    if (!credits[getvalueof.id]) credits[getvalueof.id] = {points: 0,reps: "No Reps", credits: 1, level: 1,tite: "userr", rep: 0, lastDaily: "NOT COLLECTED"};
    
    if (!credits[getvalueof.id]) credits[getvalueof.id]
    if (!credits[getvalueof.id]) credits[getvalueof.id]
    let Image = Canvas.Image,
      canvas = Canvas.createCanvas(300, 300),
      ctx = canvas.getContext("2d");
    const rg = ['./Images/Profile.png'];
    fs.readFile(`${rg[Math.floor(Math.random() * rg.length)]}`, function(
      err,
      Background
    ) {
      if (err) return console.log(err);
      let BG = Canvas.Image;
      let ground = new Image();
      ground.src = Background;
      ctx.drawImage(ground, 0, 0, 300, 300);
    });
  let url = getvalueof.displayAvatarURL({
    format: "webp",
    dynamic: true,
    size: 1024
  })
    ? getvalueof.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })
    : getvalueof.displayAvatarURL({
        format: "png",
        dynamic: true,
        size: 1024
      });
    Jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
      ava.getBuffer(Jimp.MIME_PNG, (err, buf) => {
        if (err) return console.log(err);

        //ur name
        ctx.font = "bold 13px Comic Sans MS"; // حجم الخط و نوعه
        ctx.fontSize = "24px"; // عرض الخط
        ctx.fillStyle = "#000000"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${getvalueof.username}`, 151, 165); // احداثيات اسمك

        //ur name
        ctx.font = "bold 13px Comic Sans MS"; // حجم الخط و نوعه
        ctx.fontSize = "30px";
        ctx.fillStyle = "#f1f1f1";
        ctx.textAlign = "center";
        ctx.fillText(`${getvalueof.username}`, 149, 165); // احداثيات اسمك

        //credit
        ctx.font = "bold 12px Arial"; // نوع الخط وحجمه
        ctx.fontSize = "10px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`$${credits[getvalueof.id].credits}`, 228, 150); // احداثيات المصاري

        const points = JSON.parse(fs.readFileSync("./Database/Xp.json", "utf8"));
        ctx.font = "bold 12px Arial"; // ن
        ctx.fontSize = "10px"; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${points[getvalueof.id].points}`, 65, 149); // احداثيات النقاط

        //Level
        ctx.font = "bold 28px Arial"; // نوع الخط و حجمه
        ctx.fontSize = "30px"; // عرض الخط
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${points[getvalueof.id].level}`, 228, 99); // احداثيات اللفل

        const Title = JSON.parse(fs.readFileSync("./Database/Title.json", "utf8"));
        ctx.font = "italic 14px  Arial"; // ن
        ctx.fontSize = "15px"; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#000000"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${Title[getvalueof.id].tite}`, 156, 186); // احداثيات النقاط

        //info
        ctx.font = "italic 14px  Arial"; // ن
        ctx.fontSize = "15px"; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#f1f1f1"; // لون الخط
        ctx.textAlign = "center"; // محاذا ة النص
        ctx.fillText(`${Title[getvalueof.id].tite}`, 155, 185); // احداثيات النقاط
        if (!rep[getvalueof.id]) rep[getvalueof.id]= {reps: "No Reps"};
        const rep = JSON.parse(fs.readFileSync("./Database/Rep.json", "utf8"));
        ctx.font = "bold 24px  Arial";
        ctx.fontSize = "40px";
        ctx.fillStyle = "#f1f1f1";
        ctx.textAlign = "center";
        ctx.fillText(`+${rep[getvalueof.id].rep}`, 65, 99);

        // P O I N T S
        ctx.font = "italic 10px Arial";
        ctx.fontSize = "10px";
        ctx.fillStyle = "#f1f1f1";
        ctx.textAlign = "center";
        ctx.fillText(`${points[getvalueof.id].points}`, 150, 271);
        
        ctx.font = "Sample 10px Arial";
        ctx.fontSize = "14px";
        ctx.fillStyle = "#f1f1f1";
        ctx.textAlign = "center";
        ctx.fillText(`RANK XP`, 150, 257);

        let Avatar = Canvas.Image;
        let ava = new Avatar();
        ava.src = buf;
        ctx.beginPath();
        ctx.beginPath();
        ctx.arc(151.5, 103.3, 42, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(ava, 108.1, 60, 87, 86);
        if (message.author.bot) return;

        
        message.channel.startTyping();
       setTimeout(() => {
        message.channel.stopTyping();
        message.channel.sendFile(canvas.toBuffer());
      }, 3000)
    
	
                    
        
      });
    });
  }
}
}
