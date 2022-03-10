const Links = {
  setColor:function(color){
    $('a').css('color', color);
  }
}
const Body = {
  setColor:function(color){
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    $('body').css('backgroundColor', color);
  }
}
function NightDayHandler(self){
  const target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value ='Day';
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value ='Night';
    Links.setColor('black');
  }
}
