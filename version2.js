let right=document.getElementById('right');
let left=document.getElementById('left');
let slide=document.getElementsByClassName('slide');
var index=0;
slide=Array.from(slide);

function slide_animation_right()
{
  /*
  this function fade out left  a curent slide and fade in right a next slide;

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
  this function fade out right a curent slide and fade in left the next slide
  */
  slide[index].classList.remove("animated","fadeOutRight");
  slide[index].classList.add("hidden");

  if (index == 0)
  {
    index=slide.length-1;
    slide[index].classList.remove("hidden");
    slide[index].classList.add("animated","fadeInLeft");

    slide[index].addEventListener("animationend",slide_2_animation_end_left);
    slide[0].removeEventListener("animationend",slide_2_animation_left);
  }
  else {
    index=index-1;
    slide[index].classList.remove("hidden");
    slide[index].classList.add("animated","fadeInLeft");

    slide[index].addEventListener("animationend",slide_2_animation_end_left);
    slide[index+1].removeEventListener("animationend",slide_2_animation_left);
  }
  // slide[1].classList.remove("hidden");
  // slide[1].classList.add("animated","fadeInLeft");
  //
  // slide[1].addEventListener("animationend",slide_2_animation_end_left);
  // slide[2].removeEventListener("animationend",slide_2_animation_left);
}
function slide_2_animation_end_left()
{
    slide[index].classList.remove("animated","fadeInLeft");
    slide[index].removeEventListener("animationend",slide_2_animation_end_left);
}




left.addEventListener("click",function()
{

  slide[index].classList.add("animated","fadeOutRight");
  slide[index].addEventListener("animationend",slide_2_animation_left);
  if(index == 0){
    slide[slide.length -1].classList.remove("animated" ,"fadeInRight");
  }else {
    //index += 1;
    slide[index-1].classList.remove("animated" ,"fadeInRight");
  }


});
