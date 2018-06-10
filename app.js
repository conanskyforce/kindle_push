const nodemailer = require('nodemailer');
const config = require('./config')

let transporter = nodemailer.createTransport(config.transport);

function prom(obj){
	return new Promise((resolve,reject)=>{
		var options = {
		from: config.from,
		to:config.to,
		subject:'Convert',
		text:'Convert',
		html:"Convert",
		attachments:[
			obj
		]
	};
	transporter.sendMail(options,(err,info)=>{
		if(err){
			console.error(err);
			reject();
		}
		console.log('push '+obj.filename+' succeed!');
		resolve();
	})
	})
}


var books_array = require('./read.js');
if(!books_array){
	console.log('please put books in books directory!');
	process.exit(1)
}

(async function(){
	if(!books_array) return;
	for(var obj of books_array){
		await prom(obj);
	}
})();


