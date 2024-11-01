/*CREAR NUEVO JAVASCRIPT:
TITULO RECOMENDADO: Code - Fragment
POSICIÓN: En todas las páginas (para que se vea igual en preview topic)*/

$(document).ready(function(){  
  // INICIO ZONA EDITABLE
  let select_code = "seleccionar código"; // Mensaje que aparece en el botón de seleccionar código, puede incluir html, ej. iconos
  let copy_code = "copiado"; // Mensaje que aparece por unos segundos cuando se copia el código, puede incluir html, ej. iconos

  // Reemplazar por el código que tengan para agregar el color del usuario al tema
  $('.poster-name span').each(function(){
    var color = $(this).css('color');
    $(this).closest('.viewtopic-replies').attr('style', '--post-user: ' + color + ';');
  });
  
  // FIN ZONA EDITABLE
  $('cite').each(function() {
    $(this).closest('blockquote').append($(this)); 
  });
  
  $('.poster-delete').remove();
  
  $('.codebox').each(function(){
    if ($(this).hasClass('spoiler')) {$(this).removeClass('codebox') }
    if ($(this).hasClass('hidecode')) {$(this).removeClass('codebox') }
  });
  
  $('dl.spoiler > dt').each(function(){
    var h = document.createElement('div'); h.className = "code-header";
    h.innerHTML = "<span>"+$(this).text().replace(':','')+"</span>";
    $(this).html(h.outerHTML);
  }); 
  
  $('.spoiler_title').parent().addClass('spoiler-hidden');
  
  $('.spoiler_title').click(function() {
    if ($(this).parent().hasClass('spoiler-hidden')) {
      $(this).parent().removeClass('spoiler-hidden');
      $(this).parent().addClass('spoiler-visible');
    } else {
      $(this).parent().removeClass('spoiler-visible');
      $(this).parent().addClass('spoiler-hidden');
    }
  });

  // SOLO COPY CODE
  $('dl.codebox > dt').each(function(){
    var h = document.createElement('div'); h.className = "code-header";
    h.innerHTML = "<div class=\"select-code\">"+select_code+"</div>";
    $(this).replaceWith(h.outerHTML);
  }); 
  
  $('.select-code').click(function() {
    let selection = window.getSelection();
    let range = document.createRange();
    let code = $(this).closest('.codebox').find('code')[0];
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    $(this).html(copy_code); var t = $(this);
    setTimeout(function() {t.html(select_code);}, 2000);
  });
});
