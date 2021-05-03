<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="css/principal.css">
</head>
<body>

    <header class="header">

        <div class="articulos">

            <div class="titulo">
                <h1> <span>Learn</span>  verbs</h1>
            </div>
        </div>
        
       
    </header>

    <main>

        <div class="verbo">
            <h1 class="verb" id="verb">Preciona en Empezar!</h1>
        </div>

        <div class="contenedor">
             
            <form class="formulario" id="enviarDatos">
              
                 <div class="mb-3">
                   <label for="nombre" class="form-label ">Infinitivo</label>
                   <input type="text" tabindex="1" class="form-control focusNext" id="infinitivo" >
                 </div>
     
                 <div class="mb-3">
                     <label for="apellido" class="form-label">Simple Past</label>
                     <input type="text" tabindex="2" class="form-control focusNext" id="simplePast" >
                   </div>
     
                 <div class="mb-3 direccion">
                     <label for="direccion" class="form-label ">Past Participle</label>
                     <input type="text" tabindex="3" class="form-control focusNext" id="pastParticiple">
                 </div>
     
                
    
               </form>

           

        </div>
        <div id="cambiarBoton">

            <div class="botonEmpezar" id="botonEmpezar">

                <h1 class="go">Empezar</h1>
          
            </div>



        </div>

       

    </main>

     <footer>
         <div class="info">
            <div class="config">
                 <a href="configuracion.html"><img src="config.png" alt=""></a>
            </div class>

            <div class="contador">

                   <h2> <span id="totalSuma">0</span>/ <span id="total">0</span></h2>
            </div>

         </div> 
     </footer>

     <script src="js/principal.js"></script>
    
</body>
</html>