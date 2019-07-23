/**
 * JSON con las cadenas traducidas a los diferentes idiomas.
 * No hay español, por ser el default.
 */
frases = {
  "en": {
    "Español": "Spanish",
    "Inglés": "English",
    "TECNOLOGÍA PARA ACABAR CON EL HAMBRE": "TECHNOLOGY TO FINISH HUNGER",
    "Menú": "Menu",
    "Inicio": "Start",
    "NUT4Health": "NUT4Health",
  }
};

/**
 * Función que cambia todos los elementos al nuevo idioma.
 *
 * @param {string} lang
 */
function cambiarIdioma(lang) {
  // Habilita las 2 siguientes para guardar la preferencia.
  // lang = lang || sessionStorage.getItem('app-lang') || 'es';
  // sessionStorage.setItem('app-lang', lang);

  var elems = document.querySelectorAll('[data-tr]');
  for (var x = 0; x < elems.length; x++) {
    elems[x].innerHTML = frases.hasOwnProperty(lang)
      ? frases[lang][elems[x].dataset.tr]
      : elems[x].dataset.tr;
  }
  if (lang == 'es') {
    document.getElementById('btn-es').src="images/spain.png"
    document.getElementById('btn-en').src="images/united-kingdom_disabled.png"
  } else if (lang == 'en') {
    document.getElementById('btn-es').src="images/spain_disabled.png"
    document.getElementById('btn-en').src="images/united-kingdom.png"
  } else if (lang == null) {
    var ln = x=window.navigator.language||navigator.browserLanguage;
    //document.getElementById('app-title').innerHTML = 'hola'; 
    span = document.getElementById("app-title");
    //txt = document.createTextNode("your cool text");
    //span.appendChild('txt');
    cambiarIdioma.bind(null, ln);
  }
}

window.onload = function(){
  cambiarIdioma();
  
  document
    .getElementById('btn-es')
    .addEventListener('click', cambiarIdioma.bind(null, 'es'));

  document
    .getElementById('btn-en')
    .addEventListener('click', cambiarIdioma.bind(null, 'en'));

}