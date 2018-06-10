let fs = require('fs')

var files_array = fs.readdirSync('./books',(err,files)=>{
if(files.length==0) return ;
return files;
})
files_array = files_array.filter((ele)=>{
	return ele!=='.DS_Store';
})
function formateBook(arr){
	if(files_array.length==0) return;
	var res = [];
	for(let a of arr){
	  res.push({
	  filename:a,
	  path:`./books/`+a
	  })
  }
  return res
}
module.exports = formateBook(files_array);