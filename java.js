
let image = document.querySelector('.image');
let src = ['4.png' , '5.jpg' , '6.jpg' , '7.jpg' , '8.jpg' , '9.jpg' , '10.jpg'];
let i = 0;

function sorces() {
 console.log('تم تحديرك');

  image.setAttribute('src' , src[i]);
  i++;
  if(i >= src.length){
    i = 0;
  }
  setTimeout(function(){
    sorces()
  },90)
}
sorces()