
/********************** */
//c'est notre code complet

console.log("Lets start ! ");
   
var failed=1;
var s=0;
      const cbox = document.querySelectorAll(".boundary ");

for (let i = 0; i < cbox.length; i++) {
   cbox[i].addEventListener("mouseover", function() {
     for (let i = 0; i < cbox.length; i++){
          cbox[i].style.backgroundColor = "red";
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
        
            alert("congratulations you win")
                s=0;
            }else{
                alert("you lost, restart!")
            }
           
           }
            
            })
         
        }
    
var strt=document.querySelectorAll(".boundary.example");

for (let i = 0; i < strt.length; i++) {
    strt[i].addEventListener("click", function() {
       
        s=0;
        failed=false;
        console.log("you started");
       
    });  

}



