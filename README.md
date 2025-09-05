
# Anyk_PruebaTecnica
Hola Andres!

Este repositorio contiene la solución a la prueba técnica, demostrando mis habilidades en el desarrollo full-stack con React.js en el frontend y Express.js en el backend.

La estructura del proyecto está organizada en dos ramas principales:

main: Esta rama incluye la implementación completa que cumple con todos los requisitos mínimos de la prueba técnica, además de incorporar funcionalidades adicionales como persistencia de datos con la BD, autenticación de usuarios y despliegue de la aplicación.

minimos: Esta rama contiene el proyecto base, enfocado exclusivamente en cumplir con los requisitos mínimos especificados en el documento de la prueba.

Como vi en la entrevista, comprendo que no tienes tiempo de revisar ambas ramas, pero por si lo deseas aca hay un url con un usuario y su password, esto lo hago con la intencion de ir mas alla de lo minimo y demostrar al 100% de lo capaz que soy para afrontar un nuevo desafio como lo podria ser AnyLink en mi carrera.

https://any-k-frontend.vercel.app/

Usuario:test@test.com

Password:Colombia2025*




## Requisitos Previos

Antes de todo, tener Node.js y Git instalados en tu pc. Puedes verificar si ya los tienes ejecutando estos comandos en tu terminal:

```bash
  node -v
  npm -v
  git --version
```
Para revisar las ramas en tu IDE de preferencia, clona el repositorio.
 
**Si quieres empezar con la version basica:**
    
```bash
git clone -b minimos  https://github.com/CristianMejiaMoreno/PruebaTecnicaAnyK.git PruebaTecnica_CristianMejia
```
**Para revisar la version completa:**
 ```bash
git clone -b main https://github.com/CristianMejiaMoreno/PruebaTecnicaAnyK.git PruebaTecnica_CristianMejia
```

## Guía de Despliegue Local
## Rama minimos
Una vez con la rama en tu pc para correr este proyecto en un entorno local, deberas ejecutar los siguientes comandos en consola.

**Importante**: Deberas abrir una consola por proyecto.

## Express.js(Backend)

```bash
  cd backend
```
```bash
  npm i
```
```bash
  npm run dev
```
## React.js(Frontend)
```bash
  cd frontend
```
```bash
  npm i
```
```bash
  npm run dev
```
Con estos comando seran mas que suficiente para correr cada proyecto por separado y verificar los requiriemientos minimos del proyecto.


## Documentacion API
El servidor de la API se ejecuta en el puerto 4001. Esta API implementa un CRUD (Create, Read, Update, Delete) completo para la gestión de datos. El postman del CRUD, estara en esta url https://drive.google.com/file/d/1kv5-6RMOZifk8y0Vzhqy-WOFUt1skX7r/view, pero tambien en la carpeta del repositorio, de igual forma aca hay una guia de los endpoints disponibles.

#### Este endpoint te permite obtener una lista de todos los productos disponibles.

```http
  GET /products
```



#### Este endpoint permite obtener los detalles de un producto por su id.

```http
  GET /products/${id}
```

| Parametro| Tipo    | Observación                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Obligatorio**.  El identificador único del ítem |

#### Este endpoint permite crear un nuevo producto. Los datos del producto deben ser enviados en el body de la request.

```http
  POST /products/
```
| Body | Tipo    | Observación                       |
| :--------- | :------- | :-------------------------------- |
| `name`     | `string` | **Obligatorio**. Nombre del producto |
| `price`    | `number` | **Obligatorio**. Precio mayor a 0    |

#### Este endpoint permite actualizar un producto existente por su id. Los datos a actualizar se envían en el cuerpo de la solicitud.

```http
  PUT /products/${id}
```

| Parametro | Tipo     | Observación                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `number` | **Obligatorio**. Id del producto a actualizar |

| Body | Tipo     | Observación                              |
| :--------- | :------- | :----------------------------------------- |
| `name`     | `string` | (Opcional) Nuevo nombre del producto       |
| `price`    | `number` | (Opcional) Nuevo precio del producto (> 0) |

 #### Este endpoint permite eliminar un producto de forma permanente utilizando su id.

```http
  DELETE /products/${id}
```
| Parametro | Tipo     | Observación                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `number` | **Obligatorio**. Id del producto a eliminar |






