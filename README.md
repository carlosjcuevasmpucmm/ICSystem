# ICSytem


## Requerimientos

- Node
- Mongodb
- NPM


## Configuracion inicial

Las dependencias listan:

    -   bcrypt: para hash del password en la autenticacion
    -   body-parser: Para el manejo de requests, por medio de  req.body, visto en los controladores
    -   nodemailer: Para el envio de correos
    -   express: Para el levantamiento del servidor en Node js
    -   jsonwebtoken(JWT): Para la autenticacion y seguridad de data 
    -   morgan: Monitorear los sucesos en el servidor
    -   nodemon: Facilidad de correr servidor en desarrollo  al presentar cambios

Esta configuracion puede fue realizada por los comandos en un terminal con ruta en la carpeta del proyecto:

    npm install bcrypt body-parser express jsonwebtoken mongoose morgan --save
    npm install nodemon -g
    npm install nodemailer --save

Para lanzar el servidor durante desarollo, se utilizo la dependencia nodemon y el comando:

        nodemon server.js
    
    
## Estructura de archivos
Se utilizo el MVC Pattern en la organizacion de archivos. Revelantes son la carpeta app/api con los modelos que simulan las clases y los controladores con los metodos.

-   /app: Aqui residen los archivos relacionados a la logica de la apliacion
-   /controllers: El modelado de los "x"repositores mosrado en el diagrama de clases anexo. Aqui residen las acciones posibles.
-   /models: El modelado de las clases como objetos Schema (mongoose).

-   /config: Configurar conexiones, en el caso de base de datos
-   /data: Aqui se espera se direccione la creacion de la base de datos. No estaria disponible en el repositorio.

-   /node_modules: Configuraciones de node. No estaria disponible en el repositorio

-   /routes: Definicion de las rutas para la utilizacion de los controladores /controllers.

-   server.js: Configuracion del servidor y dependencias.

## Referencias al diagrama de clases proporcionado

Cada clase fue modelada utilizando objetos Schema a ser manejados por la base datos. Los "x"repository fueron modelados como rutas que son utilizadas por los controladores dentro del servidor. Las carpetas models, routes y controllers respectivamente.

## Historial de commits en Git

El proyecto puede ser encontrado en:
- https://github.com/carlosjcuevasmpucmm/ICSystem

Los commit suelen ser descriptivos. Al igual que las tecnologias, es la primera experiencia del autor usando Git para el control de un proyecto.

## Notas del autor

El siguiente proyecto es en respuesta a la asignacion pautada en clases. No se tenia mucho el manejo de las tecnologias requeridas, pero se consiguio cumplir con la mayoria de los requerimientos de los solicitados.

Espero sea comprensible lo realizado en el proyecto
