
<template>
  <div class="m3-dark-container">
    <form @submit.prevent="handleSubmit" class="m3-card-dark">
      <h2 class="m3-title">Registro</h2>
      <p class="m3-subtitle">Seguridad de integridad y coherencia</p>

      <div class="m3-field">
        <label>Nombre de Usuario</label>
        <input 
          v-model="form.username" 
          type="text" 
          placeholder="Nombre de usuario único"
          required 
        >
      </div>

      <div class="m3-field">
        <label>Correo Electrónico</label>
        <input 
          v-model="form.email" 
          type="email" 
          placeholder="ejemplo@ciber.com"
          required 
        >
      </div>

      <div class="m3-field">
        <label>Contraseña</label>
        <input 
          v-model="form.password" 
          type="password" 
          placeholder="Mínimo 8 caracteres"
          required 
        >
        <div v-if="form.password && passwordErrors.length > 0">
          <span v-for="(error, index) in passwordErrors" :key="index" class="m3-error-text" style="display: block;">
            • {{ error }}
          </span>
        </div>
      </div>

      <div class="m3-field">
        <label>Confirmar Contraseña</label>
        <input 
          v-model="form.confirmPassword" 
          type="password" 
          placeholder="Repite tu contraseña"
          required
        >
        <span v-if="form.confirmPassword && form.password !== form.confirmPassword" class="m3-error-text">
          Las contraseñas no coinciden. 
        </span>
      </div>

      <div class="m3-captcha-card">
        <span class="captcha-label">Prueba de Humanidad</span>
        <p class="captcha-question">¿Cuánto es 9 + 4? </p>
        <input 
          v-model.number="form.captchaAnswer" 
          type="number" 
          placeholder="Respuesta" 
          required
        >
      </div>

      <button 
        type="submit" 
        :disabled="!isFormValid" 
        class="m3-btn-emerald"
      >
        Registrar Ciudadano
      </button>

      <div v-if="statusMsg" :class="['m3-alert', statusType === 'success' ? 'm3-alert-success' : 'm3-alert-error']">
        {{ statusMsg }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { registerUser } from '../services/api';
import '../assets/Registration.css';

const form = ref({
  username: '', email: '', password: '', confirmPassword: '', captchaAnswer: null
});

const statusMsg = ref('');
const statusType = ref('');


const passwordErrors = computed(() => {
  const errors = [];
  const p = form.value.password;
  if (!p) return errors;

  if (p.length < 8) {
    errors.push(`Faltan ${8 - p.length} caracteres.`);
  }
  if (!/[A-Z]/.test(p)) {
    errors.push("Falta una mayúscula.");
  }
  if (!/\d/.test(p)) {
    errors.push("Falta un número.");
  }
  return errors;
});


const isFormValid = computed(() => {
  return (
    form.value.username &&
    form.value.email.includes('@') &&
    form.value.password.length >= 8 &&
    passwordErrors.value.length === 0 &&
    form.value.password === form.value.confirmPassword &&
    form.value.captchaAnswer !== null
  );
});

const handleSubmit = async () => {
  try {
    const response = await registerUser(form.value);
    statusMsg.value = response.data.message;
    statusType.value = 'success';
  } catch (error) {
  
    statusMsg.value = error.response?.data?.error || "Error de conexión";
    statusType.value = 'error';
  }
};
</script>

