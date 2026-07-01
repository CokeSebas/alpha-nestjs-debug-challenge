# Alpha ICG NestJS Debug Test

Small NestJS API for candidate evaluation.

Run locally:

```bash
npm install
npm run start:dev
```

## Ejecutar con Docker

## Requisitos

- Docker Desktop o Docker Engine instalado.

### 1. Construir la imagen

```bash
docker build -t projects-api .
```

### 2. Ejecutar el contenedor

```bash
docker run -p 3000:3000 projects-api
```

La API quedará disponible en:

```
http://localhost:3000
```
El puerto a utilizar se puede configurar en el archivo Dockerfile.

Por ejemplo:

- `GET http://localhost:3000/projects`
- `POST http://localhost:3000/projects`


## Problemas encontrados
1.- el endpoint GET /projects/:id. al no existir el proyecto no retornaba ningun objeto y respondia 200.
2.- endpoint POST /projects no validaba datos desde el body e insertaba los datos aunque esten todos vacios creando un nuevo objeto solo con id autoincrementable y la fecha.
3.- endpoint PATCH /projects/:id no validaba si el id ingresado existia y devolvia un estado 200 sin importar si llegaba a modificar el objeto o no.
4.- endpoint PATCH /projects/:id modificaba el objeto sin validar si se recibian todos los datos o no, en caso de no recibir un dato lo dejaba en blanco.
5.- endpoint DELETE /projects/:id no validaba si el id ingresado existia y devolvia un estado 200 sin importar si se elimino el objeto o no.

## Correcciones aplicadas
1.- Se genero un service para encapsular las validaciones de los input al momento de insertar o modificar un projecto.
2.- Se importo el service creado en el project.module para utilizar las validaciones requeridas.
3.- Para evitar problema de mayuscula/minuscula se utilizo toUpperCase para validar que el status projectStatus sea correcto.
4.- Antes de obtener un proyecto, modificar o eliminar, se verifica su existencia en la lista de proyectos almacenados.
5.- Se optimizó el Dockerfile para mejorar el proceso de construcción utilizando la caché de Docker al instalar las dependencias.
6.- Se configuró el Dockerfile para compilar el proyecto y ejecutar la aplicación compilada, exponiendo el puerto 3000 para su acceso desde el contenedor.