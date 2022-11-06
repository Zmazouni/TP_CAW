const  fs= require("fs");
function chercherexp(exp,chemain){
    if (chemain.endsWith(".txt")){
        
        let text= fs.readFileSync(chemain);
        
try {  
    var a=text.includes(exp)
} catch (error) {
    
}
        if (a == true) 
        {   console.log("l expression existe dans " + chemain )
        }else{
            console.log("none" )
        }


    }

}
function chercherfichiers(exp,one,two,three)
{
    const fichiers=[one,two,three]
    l=fichiers.length
    for(var i=0;i<l;i++)
    {
        chercherexp(exp,fichiers[i])
    }
}
function direct(exp,dir){
    const chmn = require('path');
    fs.readdir(dir, (err, files) => {   
        if (err) {
          throw err
        }
        files.forEach(file => {
          var Path = chmn.join(dir, file);
          fs.readFile(Path, function (err, data) {
          if (err) throw err;
          if(data.includes(exp)){
           return console.log(file);
          }else {
           return console.log('none'); 
          }
        });
        })
      })



}
direct("inas","D:\inas")

chercherfichiers("bonjour","./a.txt","./b.txt","c.txt")