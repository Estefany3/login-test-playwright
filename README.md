# Automatización de Login con Playwright

Este proyecto es una automatización de prueba funcional de un formulario de login, utilizando Playwright. Forma parte de mi portafolio de aprendizaje sobre QA Automation.

El objetivo de este proyecto fue simular el inicio de sesión en un sitio web de práctica, verificando que el usuario pueda acceder correctamente usando credenciales válidas.

---

## Ejecución de los 3 casos de prueba

![Ejecución de login](https://s8.ezgif.com/tmp/ezgif-80cbc80527413a.gif)

## Tecnologías utilizadas

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript
- Visual Studio Code
- Git y GitHub

---

## ¿Cómo ejecutar este test?

1. Copia este repositorio:
   ```bash
   git clone https://github.com/Estefany3/login-test-playwright.git
   cd login-test-playwright

2. Instala las dependencias: 
	```bash
	npm install

3. Instalar solo para Chrome:
	```bash
	npx playwright install chromium

4. Ejecuta el test:
	```bash
	npx playwright test
 
## ¿Qué se testea?

- Que el sitio de login cargue correctamente.
- Que se pueda realizar un inicio de sesión exitoso con credenciales válidas:
  - Usuario: `student`
  - Contraseña: `Password123`
  - Se verifica:
    - Redirección a la URL correcta.
    - Mensaje de éxito visible en la pantalla.
    - Botón de "Log out" disponible.
- Que el login falle con un nombre de usuario inválido:
  - Usuario: `incorrectUser`
  - Contraseña: `Password123`
  - Se verifica:
    - Que se muestre el mensaje de error correcto: "Your username is invalid!"
- Que el login falle con una contraseña inválida:
  - Usuario: `student`
  - Contraseña: `incorrectPassword`
  - Se verifica:
    - Que se muestre el mensaje de error correcto: "Your password is invalid!"

## El sitio web que usé para testear:

https://practicetestautomation.com/practice-test-login/

## Fin

Este es de mis primeros proyectos, a medida de que aprenda más iré mejorando y agregando nuevas funciones también a proyectos futuros. Gracias por visitarlo.

Para ver más visita mi [portafolio de Github.](https://github.com/Estefany3/Portfolio-QA)


