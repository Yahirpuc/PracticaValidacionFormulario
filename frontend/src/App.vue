<template>
  <div id="main-container">
    <h1 class="page-title">Ciber-Ciudadanos</h1>
    <RegistrationForm />
  </div>
</template>

<script setup>
import RegistrationForm from './components/RegistrationForm.vue';
</script>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: #0d1110; 
  font-family: 'Roboto', sans-serif;
}

#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  padding: 20px;
}

.page-title {
  color: #52ffca;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(82, 255, 202, 0.3);
}
</style>