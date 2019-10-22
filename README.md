# Automatización de

# pruebas

## Semana 2 : Proyecto Final.

### Pruebas

```
Osmar Garcia
```
```
21 - 10 - 2019
```

## Í ndice

- Resumen
- Introducción
- Consigna de la actividad
- Desarrollo
   - Node.js
   - Clonar proyecto
   - Iniciar la aplicación UI
   - Iniciar API
   - Instalar Cypress
   - Unit Test
   - Pruebas de Integracion
   - Pruebas de UI


## Resumen

Planear e implementar la pirámide de test para cualquier proyecto, puede ser uno real o uno
pequeño hecho solo como demo.

## Introducción

La automatización de las pruebas es una alternativa interesante para las empresas que quieren
asegurar cierto nivel de calidad antes de cada liberación de productos o versiones. Aportan
tranquilidad al ajustar y mejorar las principales funcionalidades, ya que brindan información
sobre el impacto de los cambios realizados.

## Consigna de la actividad

```
 5 pruebas unitarias (con la herramienta de preferencia Junit, Xunit, y segun el
lenguaje que usen)
 2 pruebas de integración usando cucumber para probar los endpoints.
 1 prueba de UI nada sofisticado con un pequeño formulario sería suficiente
```
Enviar un pequeño video mostrando las pruebas si el proyecto no se puede compartir, o enviar
el proyecto en GitHub con los pasos necesarios para ejecutar las pruebas.

## Desarrollo

### Node.js

Para que corran las pruebas diseñadas se debe tener instalado la última versión estable de
Node.js

```
 https://nodejs.org/es/download/
```
### Clonar proyecto

Clonar el proyecto del repositorio https://github.com/osumasum1/MsAutomation.git

### Iniciar la aplicación UI

Para poder seguir con las siguientes partes se debe compilar e iniciar la aplicación UI. Para esto
se debe abrir la línea de comando, ir hasta dentro del folder clonado y correr el siguiente
comando.

```
 npm run app
```

### Iniciar API

Para poder seguir con las siguientes partes se debe iniciar los servicios de API. Para esto se debe
abrir una línea de comando nueva, ir hasta dentro del folder clonado y correr el siguiente
comando.

```
 npm run api
```
### Instalar Cypress

Antes de continuar se deben instalar los paquetes necesarios para Cypress. Para esto se debe
abrir una línea de comando nueva, ir hasta dentro del folder clonado y correr el siguiente
comando.

```
 npm install
```

### Unit Test

Para correr las pruebas unitarias se debe abrir una línea de comando nueva, ir hasta dentro del
folder clonado y correr el siguiente comando.

```
 npm run unitTest
```
### Pruebas de Integracion

Para correr las pruebas unitarias se debe abrir una línea de comando nueva, ir hasta dentro del
folder clonado y correr el siguiente comando.

```
 npx cypress open
```
Esperar que Cypress UI este abierto, hacer click en “apiTest.feature” y esperar que las pruebas
de los end-points corran.


### Pruebas de UI

Para correr las pruebas unitarias se debe abrir una línea de comando nueva, ir hasta dentro del
folder clonado y correr el siguiente comando.

```
 npx cypress open
```
Esperar que Cypress UI este abierto, hacer click en “uiTest.feature” y esperar que las pruebas
de UI corran.


