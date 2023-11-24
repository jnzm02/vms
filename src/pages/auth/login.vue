<template>
  <main>
    <img src="@/assets/login_back.jpg" alt="back">
    <div class="rhs">
      <div class="center">
        <div class="header">
          Log In to Panel
        </div>
        <div class="desc">Enter your username and password below</div>
        <div class="label">USERNAME</div>
        <input type="text" v-model="username">
        <div class="label">PASSWORD</div>
        <input type="password" v-model="password">
        <div v-if="errorMessage" class="error">{{ message }}</div>
        <div class="btn" @click="validateData"><div v-if="loading" class="loader"></div>Log In</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('')
const password = ref('')
const errorMessage = ref(false)
const message = ref('')
const loading = ref(false)

const getUser = (async (username: string, password: string) => {
  try {
    if (username === 'asd' && password === 'asd') {
      return {role: 'admin', token: '123'}
    }
    return null
    // const data = { username, password }
    // const response = await axios.get( process.env.BASE_URL + "/login", {params: data})
    // return response.data.user
  } catch(e) {
    return null
  }
})

const validateData = (async () => {
  if (!username.value || !password.value) {
    message.value = "Enter valid Username and Password"
    errorMessage.value = true
  } else {
    errorMessage.value = false
    loading.value = true
    const user = await getUser(username.value, password.value);
    loading.value = false;
    if (!user) {
      message.value = "User not Found!";
      errorMessage.value = true;
    } else if (user.role === 'admin') {
      errorMessage.value = false;
      localStorage.setItem('authToken', user.token)
      await router.push('/admin/profile')
    } else if (user.role === 'driver') {
      errorMessage.value = false
      await router.push('/driver/main')
    }
  }
});
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
}

.rhs {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  margin-right: 12px;
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  color: red;
  margin-bottom: 10px;
}

.header {
  color: black;
  font-size: 24px;
  font-weight: bold;
}

.desc {
  margin-top: 13px;
  color: #9FA2B4;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
}

.center {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 12px;
  text-align: left;
  font-weight: bold;
}

input {
  margin-top: 7px;
  padding: 6px 10px;
  width: 100%;
  border: 1.5px solid #E7E7E7;
  border-radius: 7px;
  margin-bottom: 24px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  border-radius: 7px;
  padding: 15px;
  cursor: pointer;
  //width: 10%;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

</style>
