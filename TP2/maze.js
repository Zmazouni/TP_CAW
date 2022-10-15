
console.log("Lets start ! ");
   
var failed=1;
var s=0;
      const cbox = document.querySelectorAll(".boundary ");

for (let i = 0; i < cbox.length; i++) {
   cbox[i].addEventListener("mouseover", function() {
     for (let i = 0; i < cbox.length; i++){
          cbox[i].style.backgroundColor = "red";
          var message= document.getElementById("status").innerHTML = "You Lose!";
          failed=0;
          s=0;
      } 
       
        
             
   });  
    }

     if( failed === 1 )
     {
         var k;
         k = document.querySelector("#start");
         k.addEventListener("mouseover", e => {
        s=1;
        
            
        })  

         j = document.querySelector("#end");
         j.addEventListener("mouseover", function(){
           if(s === 1)
           {
            if(failed ==1)
            {
                 message= document.getElementById("status").innerHTML = "You win!";
        
            //alert("congratulations you win")
                s=0;
            }else{
                alert("you lost, restart!")
            }
           
           }
            
            })
         
        }
    
        var strt=document.querySelector("#start");
        strt.addEventListener("click", function() {
        const cbox = document.querySelectorAll(".boundary ");
        for (let i = 0; i < cbox.length; i++){
            cbox[i].style.backgroundColor = "#eeeeee";
            s=1;
        failed=1;
            message= document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
        } 
       // *****************exercice 7***************************
        var cheating=document.querySelector("#maze");
        cheating.addEventListener("mouseleave", function() {
            for (let i = 0; i < cbox.length; i++){
            cbox[i].style.backgroundColor = "red";
            failed=0;
            s=0;
            message= document.getElementById("status").innerHTML = "you can't cheat!";}

        })
       
    });  





