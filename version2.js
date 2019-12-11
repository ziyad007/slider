let right=document.getElementById('right');
let left=document.getElementById('left');
let slide=document.getElementsByClassName('slide');
var index=0;
slide=Array.from(slide); // fct qui change un node en tableau

function slide_animation_right()
{
  /*
  this function fade out left  slide[0];
  and fade in sile[1]
  */
  slide[index].classList.add("hidden");
  slide[index].classList.remove("animated" ,"fadeOutLeft");
if (index+1 == slide.length) {
index=0;

slide[index].classList.remove("hidden");
slide[index].classList.add("animated" ,"fadeInRight");

slide[index].addEventListener('animationend',slide_animation_end_right);
slide[slide.length - 1].removeEventListener('animationend',slide_animation_right);
}
else {
  index=index+1;

  slide[index].classList.remove("hidden");
  slide[index].classList.add("animated" ,"fadeInRight");

  slide[index].addEventListener('animationend',slide_animation_end_right);
  slide[index - 1].removeEventListener('animationend',slide_animation_right);
}

}
function slide_animation_end_right()
{
  slide[index].classList.remove("animated" ,"fadeInRight");
  slide[index].removeEventListener('animationend',slide_animation_end_right);
}

right.addEventListener("click",function()
{
    slide[index].classList.add("animated" ,"fadeOutLeft");
    slide[index].addEventListener('animationend',slide_animation_right);

    if(index + 1 == slide.length){
      slide[0].classList.remove("animated" ,"fadeInRight");
    }else {
      //index += 1;
      slide[index+1].classList.remove("animated" ,"fadeInRight");
    }

});
//------------------------------------------------------------------------------

function slide_2_animation_left()
{
  /*
  this function fade out right slide [2]
  and fade in left slide[1]
  */
  slide[2].classList.remove("animated","fadeOutRight");
  slide[2].classList.add("hidden");

  slide[1].classList.remove("hidden");
  slide[1].classList.add("animated","fadeInLeft");

  slide[1].addEventListener("animationend",slide_2_animation_end_left);
  slide[2].removeEventListener("animationend",slide_2_animation_left);
}
function slide_2_animation_end_left()
{
    slide[1].classList.remove("animated","fadeInLeft");
    slide[1].removeEventListener("animationend",slide_2_animation_end_left);
}




left.addEventListener("click",function()
{

  if (index==2)
  {
    slide[2].classList.add("animated","fadeOutRight");
    slide[2].addEventListener("animationend",slide_2_animation_left);
    index=1;
  }
  else
  {
    if (index==1) {
      slide[1].classList.add("animated","fadeOutRight");
      slide[1].addEventListener("animationend",slide_1_animation_left);

     index=0;
   }
  }

});
