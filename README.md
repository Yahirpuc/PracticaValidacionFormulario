# 🛡️ Registro de Ciber-Ciudadanos

Proyecto académico de validación de formularios con verificación en FrontEnd y BackEnd para garantizar registros seguros de usuarios.

## 🚀 Tecnologías

* **Frontend:** Vue.js, HTML5, JavaScript
* **Backend:** Node.js, Express
* **Base de datos:** SQLite

## ✅ Funcionalidades

* Validación HTML5 (`required`, `email`, `minlength`)
* Validación de contraseña con Regex (mayúscula + número)
* Bloqueo de envío si el formulario es inválido
* Verificación de email único en base de datos
* Confirmación de contraseña obligatoria
* Captcha lógico simple (pregunta matemática)

## ▶️ Ejecución

### Backend

```bash
npm install
node server.js
```

### Frontend

```bash
npm install
npm run dev
```

## 📚 Objetivo

Demostrar buenas prácticas de validación, seguridad básica en formularios y separación de responsabilidades entre cliente y servidor.
