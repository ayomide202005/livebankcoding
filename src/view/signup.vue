<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1 class="signup-title">Create Account</h1>
      
      <form @submit.prevent="handleSubmit" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            @blur="validateField('username')"
            :class="{ 'error': errors.username }"
          />
          <span class="error-message" v-if="errors.username">{{ errors.username }}</span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            @blur="validateField('email')"
            :class="{ 'error': errors.email }"
          />
          <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            @blur="validateField('password')"
            :class="{ 'error': errors.password }"
          />
          <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Sign Up</span>
          <span v-else>Creating Account...</span>
        </button>

        <div class="login-link">
          Already have an account? <router-link to="/signin">Sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      errors: {
        username: '',
        email: '',
        password: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    validateField(field) {
      if (field === 'username') {
        this.errors.username = this.form.username.length < 3 
          ? 'Username must be at least 3 characters' 
          : ''
      }
      
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        this.errors.email = emailRegex.test(this.form.email) 
          ? '' 
          : 'Please enter a valid email'
      }
      
      if (field === 'password') {
        this.errors.password = this.form.password.length < 6 
          ? 'Password must be at least 6 characters' 
          : ''
      }
    },
    validateForm() {
      this.validateField('username')
      this.validateField('email')
      this.validateField('password')
      
      return !Object.values(this.errors).some(error => error !== '')
    },
    async handleSubmit() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      
      try {
        // Replace with your actual API call
        const response = await fetch('https://api.example.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        
        if (response.ok) {
          this.$router.push('/dashboard') // Redirect after successful signup
        } else {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Signup failed')
        }
      } catch (error) {
        alert(error.message)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.signup-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.signup-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #333;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  height: 1rem;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: #2980b9;
}

.submit-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
  color: #666;
}

.login-link a {
  color: #3498db;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>