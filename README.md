# Automatización de Login con Playwright

Este proyecto es una automatización de prueba funcional de un formulario de login, utilizando **Playwright**. Forma parte de mi portafolio de aprendizaje sobre QA Automation.

El objetivo de este proyecto fue simular el inicio de sesión en un sitio web de práctica, verificando que el usuario pueda acceder correctamente usando credenciales válidas.

---

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

3. Ejecuta el test:
	```bash
	npx playwright test

4. Para ver la traza del test:
	```bash
	npx playwright show-trace trace.zip

## ¿Qué se testea?

- Que el sitio cargue correctamente.
- Que se ingresen correctamente usuario y contraseña.
- Que se muestre un mensaje de login exitoso o que redirija a la página esperada.

## El sitio web que usé para testear:

https://practicetestautomation.com/practice-test-login/

## Trazas

En el archivo **trace.zip** se pueden ver las trazas que se generan luego de ejecutar el test, incluye todos los pasos que siguió.

## Fin

Este es de mis primeros proyectos, a medida de que aprenda más iré mejorando y agregando nuevas funciones también a proyectos futuros. Gracias por visitarlo.

Para ver más visita mi [portafolio de Github.](https://github.com/Estefany3/Portfolio-QA)


