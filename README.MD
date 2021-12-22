<p align="center">  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://o.remove.bg/downloads/a2bcbb23-2f2e-4dad-a07b-4f16d152d051/picture-180641674-removebg-preview.png" alt="bootstrap" width="120" height="120"/> </a>

<h1 align="center">Hi 👋, we are The Sauce Project</h1>
<h3 align="center">A platform to sell salsas with other people that have the same passion as you about food...</h3>

<br>
<hr>

# Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Instalación** para conocer como desplegar el proyecto.

<br>

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
-Fork this repo.
-Then clone this repo.
```

<br>

### Instalación 🔧

To run our application, you have to install all of its dependencies. So run the following command:

In your terminal run:

```
$ npm install
```

<br>
<hr>

# Deploy 📦

<h3 style="color: purple;"> Heroku: </h3>

Manages app deployments with Git, the popular version control system. You definitely don’t need to be a Git expert to deploy code to Heroku, but it’s helpful to learn the basics.

```

-Prerequisites:

Install Git and the Heroku CLI or connect your GitHub repository with heroku.


-Tracking your app in Git:

Before you can deploy your app to Heroku, you need to initialize a local Git repository and commit your application code to it.


-Creating a Heroku remote:

Git remotes are versions of your repository that live on other servers. You deploy your app by pushing its code to a special Heroku-hosted remote that’s associated with your app.


-For a new Heroku app:

For an existing Heroku app: if you have already created your Heroku app, you can easily add a remote to your local repository with the heroku git:remote command. All you need is your Heroku app’s name:



-Deploying code:

    a) To deploy your app to Heroku, you typically use the git push command to push the code from your local repository’s master or main branch to your heroku remote.

    b) Note that Heroku only deploys code that you push to master or main. Pushing code to another branch of the heroku remote has no effect.



```

<br>
<hr>

## Versionado 📌

Usamos [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/hiking-together/tags).

<hr>
<br>

## Construido con 🛠️

<h3 align="left">Languages and Tools:</h3>
<br>
<p align="left">   <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> </p>
<a href="https://es.reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

<br>
<hr>

## Autor ✒️

- **Javier** - _Founder & developer_ - [JavierHerrera](#fulanito-de-tal)

<br>
<hr>


# How does our project work?




## a. Estructura General
```

- Realizar la funcionalidad de cada ruta con su respectivo controller (Encriptacion, Validacion, Regex)

- Creacion de ruta para conexion de Api

- Desarrollo de un usuario con su respectivo modelo, y 

- Desarrollo de un producto con su respectivo modelo

- Integracion de rutas, Layout Middleware, Middlewares en index.js

- Verficar a traves de tokens

-Instalacion de dependencias (Package.json)

-Middlewares, para efecto de autorizacion de rutas.

```

## b. API's

    
- Crear producto: [Your heroku deploy link]/sauce/create
- Editar product: [Your heroku deploy link]//sauce/edit/id
- Leer producto: [Your heroku deploy link]/sauce/readall
- Borrar product: [Your heroku deploy link]//sauce/delete/id


-Crear usuario:  [Your heroku deploy link]/user/create
-Leer Usuario:   [Your heroku deploy link]/user/read



<br>



## e. Models 
```
  1. User
 

   2. Products

```

<br>


## f. Route-guard/Validaciones/Encriptación

```

a) Validacion de rutas privadas y publicas dependiendo estado del usuario.

b) Validaciones en formularios (Crear, Editar)

c) Encriptacion de contraseñas de usuarios

d) Regex


```


<br>

## g. Sessions


```

a) Configuracion basica de la sessiones:

  -Tokens

  -Validacion de tokens

```

<br>


## h. CRUD


```

Desarrollo completo del CRUD para los productos

a) Create

b) Read

c) Update

d) Delete

```




<br>
<hr>