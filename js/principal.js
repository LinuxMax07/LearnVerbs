$('document').ready(function(){  

    // var res;

    var misverbos=[
        {
          "spanish": "Ser/estar",
          "infinitive": "be",
          "simplePast": "was",
          "pastParticiple": "been"
        },
        {
          "spanish": "Tener",
          "infinitive": "have",
          "simplePast": "had",
          "pastParticiple": "had"
        },
        {
          "spanish": "Hacer(mental)",
          "infinitive": "do",
          "simplePast": "did",
          "pastParticiple": "done"
        },
        {
          "spanish": "Decir algo",
          "infinitive": "say",
          "simplePast": "said",
          "pastParticiple": "said"
        },
        {
          "spanish": "Ir",
          "infinitive": "go",
          "simplePast": "went",
          "pastParticiple": "gone"
        },
        {
          "spanish": "Obtener",
          "infinitive": "get",
          "simplePast": "got",
          "pastParticiple": "got"
        },
        {
          "spanish": "Hacer(fisicamente)",
          "infinitive": "make",
          "simplePast": "made",
          "pastParticiple": "made"
        },
        {
          "spanish": "Saber",
          "infinitive": "know",
          "simplePast": "knew",
          "pastParticiple": "known"
        },
        {
          "spanish": "Pensar",
          "infinitive": "think",
          "simplePast": "thought",
          "pastParticiple": "thought"
        },
        {
          "spanish": "Tomar/Agarrar",
          "infinitive": "take",
          "simplePast": "took",
          "pastParticiple": "taken"
        },
        {
          "spanish": "Ver",
          "infinitive": "see",
          "simplePast": "saw",
          "pastParticiple": "seen"
        },
        {
          "spanish": "Venir",
          "infinitive": "come",
          "simplePast": "came",
          "pastParticiple": "come"
        },
        {
          "spanish": "Querer",
          "infinitive": "want",
          "simplePast": "wanted",
          "pastParticiple": "wanted"
        },
        {
          "spanish": "Usar",
          "infinitive": "use",
          "simplePast": "used",
          "pastParticiple": "used"
        },
        {
          "spanish": "Buscar",
          "infinitive": "find",
          "simplePast": "found",
          "pastParticiple": "found"
        },
        {
          "spanish": "Dar",
          "infinitive": "give",
          "simplePast": "gave",
          "pastParticiple": "given"
        },
        {
          "spanish": "Decir a alguien/contar",
          "infinitive": "tell",
          "simplePast": "told",
          "pastParticiple": "told"
        },
        {
          "spanish": "Trabajar",
          "infinitive": "work",
          "simplePast": "worked",
          "pastParticiple": "worked"
        },
        {
          "spanish": "Llamar",
          "infinitive": "call",
          "simplePast": "called",
          "pastParticiple": "called"
        },
        {
          "spanish": "Intentar/tratar",
          "infinitive": "try",
          "simplePast": "tried",
          "pastParticiple": "tried"
        },
        {
          "spanish": "Preguntar",
          "infinitive": "ask",
          "simplePast": "asked",
          "pastParticiple": "asked"
        },
        {
          "spanish": "Necesitar",
          "infinitive": "need",
          "simplePast": "needed",
          "pastParticiple": "needed"
        },
        {
          "spanish": "Sentir",
          "infinitive": "feel",
          "simplePast": "felt",
          "pastParticiple": "felt"
        },
        {
          "spanish": "Llegar a ser",
          "infinitive": "become",
          "simplePast": "became",
          "pastParticiple": "become"
        },
        {
          "spanish": "Deja/Salir/Abandonar",
          "infinitive": "leave",
          "simplePast": "left",
          "pastParticiple": "left"
        },
        {
          "spanish": "Poner",
          "infinitive": "put",
          "simplePast": "put",
          "pastParticiple": "put"
        },
        {
          "spanish": "Significar",
          "infinitive": "mean",
          "simplePast": "meant",
          "pastParticiple": "meant"
        },
        {
          "spanish": "Mantener/conservar",
          "infinitive": "keep",
          "simplePast": "kept",
          "pastParticiple": "kept"
        },
        {
          "spanish": "permitir",
          "infinitive": "let",
          "simplePast": "let",
          "pastParticiple": "let"
        },
        {
          "spanish": "Empezar/comenzar",
          "infinitive": "begin",
          "simplePast": "began",
          "pastParticiple": "begun"
        },
        {
          "spanish": "Parecer",
          "infinitive": "seem",
          "simplePast": "seemed",
          "pastParticiple": "seemed"
        },
        {
          "spanish": "Ayudar",
          "infinitive": "help",
          "simplePast": "helped",
          "pastParticiple": "helped"
        },
        {
          "spanish": "Mostrar",
          "infinitive": "show",
          "simplePast": "showed",
          "pastParticiple": "shown"
        },
        {
          "spanish": "Escuchar/oir",
          "infinitive": "hear",
          "simplePast": "heard",
          "pastParticiple": "heard"
        },
        {
          "spanish": "Jugar",
          "infinitive": "play",
          "simplePast": "played",
          "pastParticiple": "played"
        },
        {
          "spanish": "Correr",
          "infinitive": "run",
          "simplePast": "ran",
          "pastParticiple": "run"
        },
        {
          "spanish": "Mover/mudar",
          "infinitive": "move",
          "simplePast": "moved",
          "pastParticiple": "moved"
        },
        {
          "spanish": "Vivir",
          "infinitive": "live",
          "simplePast": "lived",
          "pastParticiple": "lived"
        },
        {
          "spanish": "Creer",
          "infinitive": "believe",
          "simplePast": "believed",
          "pastParticiple": "believed"
        },
        {
          "spanish": "Traer",
          "infinitive": "bring",
          "simplePast": "brought",
          "pastParticiple": "brought"
        },
        {
          "spanish": "Suceder/ocurrir",
          "infinitive": "happen",
          "simplePast": "happened",
          "pastParticiple": "happened"
        },
        {
          "spanish": "Escribir",
          "infinitive": "write",
          "simplePast": "wrote",
          "pastParticiple": "written"
        },
        {
          "spanish": "Sentarse",
          "infinitive": "sit",
          "simplePast": "sat",
          "pastParticiple": "sat"
        },
        {
          "spanish": "Estar de pie",
          "infinitive": "stand",
          "simplePast": "stood",
          "pastParticiple": "stood"
        },
        {
          "spanish": "Perder",
          "infinitive": "lose",
          "simplePast": "lost",
          "pastParticiple": "lost"
        },
        {
          "spanish": "Pagar",
          "infinitive": "pay",
          "simplePast": "paid",
          "pastParticiple": "paid"
        },
        {
          "spanish": "Conocer/reunir",
          "infinitive": "meet",
          "simplePast": "met",
          "pastParticiple": "met"
        },
        {
          "spanish": "Incluir",
          "infinitive": "include",
          "simplePast": "included",
          "pastParticiple": "included"
        },
        {
          "spanish": "Continuar",
          "infinitive": "continue",
          "simplePast": "continued",
          "pastParticiple": "continued"
        },
        {
          "spanish": "Colocar/establecer",
          "infinitive": "set",
          "simplePast": "set",
          "pastParticiple": "set"
        },
        {
          "spanish": "Aprender",
          "infinitive": "learn",
          "simplePast": "learned",
          "pastParticiple": "learned"
        },
        {
          "spanish": "Cambiar",
          "infinitive": "change",
          "simplePast": "changed",
          "pastParticiple": "changed"
        },
        {
          "spanish": "Dirigir/guiar",
          "infinitive": "lead",
          "simplePast": "led",
          "pastParticiple": "led"
        },
        {
          "spanish": "Entender/comprender",
          "infinitive": "understand",
          "simplePast": "understood",
          "pastParticiple": "understood"
        },
        {
          "spanish": "Observar",
          "infinitive": "watch",
          "simplePast": "watched",
          "pastParticiple": "watched"
        },
        {
          "spanish": "Seguir",
          "infinitive": "follow",
          "simplePast": "followed",
          "pastParticiple": "followed"
        },
        {
          "spanish": "Detener/parar/dejar",
          "infinitive": "stop",
          "simplePast": "stopped",
          "pastParticiple": "stopped"
        },
        {
          "spanish": "Crear",
          "infinitive": "create",
          "simplePast": "created",
          "pastParticiple": "created"
        },
        {
          "spanish": "Hablar",
          "infinitive": "speak",
          "simplePast": "spoke",
          "pastParticiple": "spoken"
        },
        {
          "spanish": "Leer",
          "infinitive": "read",
          "simplePast": "read",
          "pastParticiple": "read"
        },
        {
          "spanish": "Gastar",
          "infinitive": "spend",
          "simplePast": "spent",
          "pastParticiple": "spent"
        },
        {
          "spanish": "Crecer",
          "infinitive": "grow",
          "simplePast": "grew",
          "pastParticiple": "grown"
        },
        {
          "spanish": "Abrir",
          "infinitive": "open",
          "simplePast": "opened",
          "pastParticiple": "opened"
        },
        {
          "spanish": "Caminar",
          "infinitive": "walk",
          "simplePast": "walked",
          "pastParticiple": "walked"
        },
        {
          "spanish": "Ganar",
          "infinitive": "win",
          "simplePast": "won",
          "pastParticiple": "won"
        },
        {
          "spanish": "EnseÃ±ar",
          "infinitive": "teach",
          "simplePast": "taught",
          "pastParticiple": "taught"
        },
        {
          "spanish": "Ofrecer",
          "infinitive": "offer",
          "simplePast": "offered",
          "pastParticiple": "offered"
        },
        {
          "spanish": "Recordar",
          "infinitive": "remember",
          "simplePast": "remembered",
          "pastParticiple": "remembered"
        },
        {
          "spanish": "Considerar",
          "infinitive": "consider",
          "simplePast": "considered",
          "pastParticiple": "considered"
        },
        {
          "spanish": "Aparecer",
          "infinitive": "appear",
          "simplePast": "appeared",
          "pastParticiple": "appeared"
        },
        {
          "spanish": "Comprar",
          "infinitive": "buy",
          "simplePast": "bought",
          "pastParticiple": "bought"
        },
        {
          "spanish": "Servir/atender",
          "infinitive": "serve",
          "simplePast": "served",
          "pastParticiple": "served"
        },
        {
          "spanish": "Morir",
          "infinitive": "die",
          "simplePast": "died",
          "pastParticiple": "died"
        },
        {
          "spanish": "Enviar",
          "infinitive": "send",
          "simplePast": "sent",
          "pastParticiple": "sent"
        },
        {
          "spanish": "Construir",
          "infinitive": "build",
          "simplePast": "built",
          "pastParticiple": "built"
        },
        {
          "spanish": "Quedarse/permanecer",
          "infinitive": "stay",
          "simplePast": "stayed",
          "pastParticiple": "stayed"
        },
        {
          "spanish": "Caer",
          "infinitive": "fall",
          "simplePast": "fell",
          "pastParticiple": "fallen"
        },
        {
          "spanish": "Cortar",
          "infinitive": "cut",
          "simplePast": "cut",
          "pastParticiple": "cut"
        },
        {
          "spanish": "Alcanzar/llegar",
          "infinitive": "reach",
          "simplePast": "reached",
          "pastParticiple": "reached"
        },
        {
          "spanish": "Matar",
          "infinitive": "kill",
          "simplePast": "killed",
          "pastParticiple": "killed"
        },
        {
          "spanish": "Aumentar/levantar",
          "infinitive": "raise",
          "simplePast": "raised",
          "pastParticiple": "raised"
        },
        {
          "spanish": "Pasar",
          "infinitive": "pass",
          "simplePast": "passed",
          "pastParticiple": "passed"
        },
        {
          "spanish": "Vender",
          "infinitive": "sell",
          "simplePast": "sold",
          "pastParticiple": "sold"
        },
        {
          "spanish": "Decidir",
          "infinitive": "decide",
          "simplePast": "decided",
          "pastParticiple": "decided"
        },
        {
          "spanish": "Regresar",
          "infinitive": "return",
          "simplePast": "returned",
          "pastParticiple": "returned"
        },
        {
          "spanish": "Explicar",
          "infinitive": "explain",
          "simplePast": "explained",
          "pastParticiple": "explained"
        },
        {
          "spanish": "Esperar(esperar)",
          "infinitive": "hope",
          "simplePast": "hoped",
          "pastParticiple": "hoped"
        },
        {
          "spanish": "Desarrollar",
          "infinitive": "develop",
          "simplePast": "developed",
          "pastParticiple": "developed"
        },
        {
          "spanish": "Llevar/trasnportar",
          "infinitive": "carry",
          "simplePast": "carried",
          "pastParticiple": "carried"
        },
        {
          "spanish": "Romper/quebrar",
          "infinitive": "break",
          "simplePast": "broke",
          "pastParticiple": "broken"
        },
        {
          "spanish": "Recibir",
          "infinitive": "receive",
          "simplePast": "received",
          "pastParticiple": "received"
        },
        {
          "spanish": "Estar de acuerdo",
          "infinitive": "agree",
          "simplePast": "agreed",
          "pastParticiple": "agreed"
        },
        {
          "spanish": "Apoyar",
          "infinitive": "support",
          "simplePast": "supported",
          "pastParticiple": "supported"
        },
        {
          "spanish": "Golpear/pegar",
          "infinitive": "hit",
          "simplePast": "hit",
          "pastParticiple": "hit"
        },
        {
          "spanish": "Producir",
          "infinitive": "produce",
          "simplePast": "produced",
          "pastParticiple": "produced"
        },
        {
          "spanish": "Comer",
          "infinitive": "eat",
          "simplePast": "ate",
          "pastParticiple": "eaten"
        },
        {
          "spanish": "Cubrir/tapar",
          "infinitive": "cover",
          "simplePast": "covered",
          "pastParticiple": "covered"
        },
        {
          "spanish": "Atrapar/agarrar",
          "infinitive": "catch",
          "simplePast": "caught",
          "pastParticiple": "caught"
        },
        {
          "spanish": "Dibujar",
          "infinitive": "draw",
          "simplePast": "drew",
          "pastParticiple": "drawn"
        },
        {
          "spanish": "Elegir/escoger",
          "infinitive": "choose",
          "simplePast": "chose",
          "pastParticiple": "chosen"
        }
      ]

    var inputInfinitive = document.getElementById('infinitivo');
    var inputSimple = document.getElementById('simplePast');
    var inputParticiple = document.getElementById('pastParticiple');
    inputInfinitive.disabled = true;
    inputSimple.disabled = true;
    inputParticiple.disabled = true;



 var verbosDescargados=Array.from(misverbos);

 
 function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  arr = shuffle(verbosDescargados);
  console.log(arr);

  $('#total').html(verbosDescargados.length); 
   var contador=0;
   var correctos=0;
   console.log(verbosDescargados[contador]["infinitive"])

     var correcto1=false;
     var correcto2=false;
     var correcto3=false;


   $("#infinitivo").keyup(function(){
    var infinitivo=$('#infinitivo').val();
    // console.log(infinitivo);
   
    if(infinitivo===verbosDescargados[contador-1]["infinitive"]){
        
        $('#infinitivo').removeClass('incorrecto');
            $('#infinitivo').addClass('correcto');
            correcto1=true;
       
    }else{
        
        $('#infinitivo').removeClass('correcto');
        $('#infinitivo').addClass('incorrecto');
        correcto1=false;
    }

    if(correcto1===true && correcto2===true && correcto3==true){
        $('#cambiarBoton').html('<div class="boton" id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');
        }else{
            $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
        }
    
})

$("#simplePast").keyup(function(){
  
    var simplePast=$('#simplePast').val();
    // console.log(infinitivo);
   
    if(simplePast===verbosDescargados[contador-1]["simplePast"]){
        $('#simplePast').removeClass('incorrecto');
            $('#simplePast').addClass('correcto');
            correcto2=true;
       
    }else{
        $('#simplePast').removeClass('correcto');
        $('#simplePast').addClass('incorrecto');
        correcto2=false;
    }

    if(correcto1===true && correcto2===true && correcto3==true){
        $('#cambiarBoton').html('<div class="boton" id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');
        }else{
            $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
        } 
    
})

$("#pastParticiple").keyup(function(){
  
    var pastParticiple=$('#pastParticiple').val();
    // console.log(infinitivo);
   
    if(pastParticiple===verbosDescargados[contador-1]["pastParticiple"]){
        $('#pastParticiple').removeClass('incorrecto');
            $('#pastParticiple').addClass('correcto');
            correcto3=true;
       
    }else{
        $('#pastParticiple').removeClass('correcto');
        $('#pastParticiple').addClass('incorrecto');
        correcto3=false;
    }
    if(correcto1===true && correcto2===true && correcto3==true){
        $('#cambiarBoton').html('<div class="boton" id="botonCorrecto"><h1 class="go">Siguiente</h1></div>');
        }else{
            $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
        }
    
})
     

    $(document).on('click','#botonEmpezar',function(){
        inputInfinitive.disabled = false;
        inputSimple.disabled = false;
        inputParticiple.disabled = false;
        $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
        var verbo= verbosDescargados[contador]["spanish"]
       
        $('#verb').html(verbo);
        contador++
        $('#totalSuma').html(contador);
      });

      $(document).on('click','#botonCorrecto',function(){
        $('#enviarDatos').trigger('reset');
        $('#infinitivo').removeClass('correcto');
        $('#simplePast').removeClass('correcto');
        $('#pastParticiple').removeClass('correcto');
        $('#cambiarBoton').html('<div class="botonBloqueado" id="botonSiguiente"><h1 class="go">Siguiente</h1></div>');
         correcto1=false;
         correcto2=false;
        correcto3=false;

                console.log(verbosDescargados.length)
                
                if(contador>verbosDescargados.length-1){
                  var termino="volver a empezar"
                  $('#verb').html(termino);
                }else{
                var verbo= verbosDescargados[contador]["spanish"]
               
                $('#verb').html(verbo);
                contador++;
                $('#totalSuma').html(contador);
                }
      });


      


      document.addEventListener('keypress', function(evt) {

        // Si el evento NO es una tecla Enter
        if (evt.key !== 'Enter') {
          return;
        }
        
        let element = evt.target;
      
        // Si el evento NO fue lanzado por un elemento con class "focusNext"
        if (!element.classList.contains('focusNext')) {
          return;
        }
      
        // AQUI logica para encontrar el siguiente
        let tabIndex = element.tabIndex + 1;
        var next = document.querySelector('[tabindex="'+tabIndex+'"]');
      
        // Si encontramos un elemento
        if (next) {
          next.focus();
          event.preventDefault();
        }
      });
})