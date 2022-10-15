console.log("Lets start ! ");
   
 
const cbox = document.querySelectorAll(".boundary ");

 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("mouseover", function() {
       
            cbox[i].style.backgroundColor = "red";
               
     });}  