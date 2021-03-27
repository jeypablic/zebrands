# zebrands
Resolución de Prueba Zebrands - Luuna

## Descripción

### Pre-requisitos

Para la ejecucion de este sistema, es necesario contar con la instalacion de docker en el equipo donde se ejecutara.

Ademas de contar con el software Postman, con la finalidad de ejecutar las llamadas a las API REST

### Ejecución

Para la ejecución de este contenedor se realiza con las siguientes instrucciones en un terminal (CMD para Windows):

```
docker-compose build
docker-compose up
```

una vez iniciado el contenedor, se visualizara el siguiente mensaje en el terminal:

```
backend  | [nodemon] 2.0.7
backend  | [nodemon] to restart at any time, enter `rs`
backend  | [nodemon] watching path(s): *.*
backend  | [nodemon] watching extensions: js,mjs,json
backend  | [nodemon] starting `node src / app.js apidoc -o doc/`
backend  | server iniciado
backend  | DB conectada a  mongo
```

Este mensaje nos indica que ya se encuentra disponible.
En un navegador de preferencia, entre a la siguiente URL

```
http://localhost:7000
```

Se desplegará la documentación de la API REST

Para la ejecucion de cada API, se debe utilizar el software Postman e importar el archivo que se encuentra en este repositorio, en la siguiente ruta:

```
./postman-examples/zebrands.postman_collection.json
```


El contenedor esta compuesto por una base de datos no relacional MongoDB y con una API desarrollada con NodeJs y Express