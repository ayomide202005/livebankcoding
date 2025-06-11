<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1 class="auth-title">Welcome Back</h1>
      
      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            @blur="validateField('email')"
            :class="{ 'error': errors.email }"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
          <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
        </div>

        <div class="auth-options">
          <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Sign In</span>
          <span v-else>Signing In...</span>
        </button>

        <div class="auth-footer">
          Don't have an account? <router-link to="/signup" class="auth-link">Sign up</router-link>
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
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    validateField(field) {
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
      this.validateField('email')
      this.validateField('password')
      
      return !Object.values(this.errors).some(error => error !== '')
    },
    async handleSubmit() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      
      try {
        // Replace with your actual API call
        const response = await fetch('https://api.example.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        
        if (response.ok) {
          const data = await response.json()
          localStorage.setItem('authToken', data.token) // Store token
          this.$router.push('/dashboard') // Redirect after successful login
        } else {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Login failed. Please check your credentials.')
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
/* Shared auth styles - you can put these in a separate CSS file to reuse */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.auth-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.auth-form {
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

.auth-footer {
  text-align: center;
  margin-top: 1rem;
  color: #666;
}

.auth-link {
  color: #3498db;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}

.auth-options {
  display: flex;
  justify-content: flex-end;
  margin-top: -0.5rem;
}

.forgot-password {
  color: #666;
  font-size: 0.85rem;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
  color: #3498db;
}
</style>