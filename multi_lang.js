// Code from https://webparts.cman.jp/string/lang/

window.onload = function() {
  var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
  langSet(wDef);
 
}

function langSet(argLang){
  var title = document.getElementsByClassName("about-title");
  var text = document.getElementsByClassName("about-text");
  var note = document.getElementsByClassName("about-text-notes");
  var note2 = document.getElementsByClassName("about-text-notes2");
  var bottom = document.getElementsByClassName("animation-btn");
  var heading = document.getElementsByClassName("heading");

  for (var i = 0; i < title.length; i++) {
    if(title[i].getAttribute("lang") == argLang){
      title[i].style.display = '';
    }
    else{
      title[i].style.display = 'none';
    }
  }

  for (var i = 0; i < text.length; i++) {
    if(text[i].getAttribute("lang") == argLang){
      text[i].style.display = '';
    }
    else{
      text[i].style.display = 'none';
    }
  }

  for (var i = 0; i < note.length; i++) {
    if(note[i].getAttribute("lang") == argLang){
      note[i].style.display = '';
    }
    else{
      note[i].style.display = 'none';
    }
  }

  for (var i = 0; i < note2.length; i++) {
    if(note2[i].getAttribute("lang") == argLang){
      note2[i].style.display = '';
    }
    else{
      note2[i].style.display = 'none';
    }
  }
}

  for (var i = 0; i < bottom.length; i++) {
    if(bottom[i].getAttribute("lang") == argLang){
      bottom[i].style.display = '';
    }
    else{
      bottom[i].style.display = 'none';
    }
  }
}

  for (var i = 0; i < heading.length; i++) {
    if(heading[i].getAttribute("lang") == argLang){
      heading[i].style.display = '';
    }
    else{
      heading[i].style.display = 'none';
    }
  }
}
