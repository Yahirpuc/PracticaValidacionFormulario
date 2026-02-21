const express = require('express');
const cors = require('cors');
const { findUserByEmail, findUserByUsername, saveUser } = require('./userModel');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword, captchaAnswer } = req.body;


    if (!username || !email || !password || !confirmPassword || captchaAnswer === undefined) {
        return res.status(400).json({ error: "Faltan datos obligatorios." });
    }


    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Las contraseñas no coinciden." });
    }


    if (parseInt(captchaAnswer) !== 13) {
        return res.status(400).json({ error: "Prueba de humanidad fallida." });
    }

    try {
         
        const userCheck = await findUserByUsername(username);
        if (userCheck) return res.status(400).json({ error: "El nombre de usuario ya existe." });


        const emailCheck = await findUserByEmail(email);
        if (emailCheck) return res.status(400).json({ error: "El email ya está registrado." });

        
        const newUser = await saveUser(username, email);
        res.status(201).json({ message: "Ciber-Ciudadano registrado con éxito", user: newUser });

    } catch (error) {
        res.status(500).json({ error: "Error en el servidor." });
    }
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));