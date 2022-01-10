//EVENTS - LINKS  
//I took every item required and proceded to add the event onclick to show a message in the console

function showConsole1(){
    console.log("clickTag1 OK");
}

function showConsole2(){
    console.log("clickTag2 OK");
}

function showConsole3(){
    console.log("clickTag3 OK");
}

function showConsole(){
    console.log("PDF file");
}


//SLIDE
//I selected every class needed and transformed it into a variable
var slides=document.querySelector('.slider').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

//I proceeded to add the event onclick to the arrows
nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

//I added a function so that the sections would slide with each click on the arrows
function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}