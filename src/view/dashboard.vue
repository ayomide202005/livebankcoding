<template>
  <div class="accounts-dashboard">
    <!-- Account Summary Cards -->
    <div class="summary-cards">
      <div class="summary-card">
        <div class="card-header">
          <i class="fas fa-wallet"></i>
          <h3>Total Balance</h3>
        </div>
        <div class="card-body">
          <h2>$24,589.32</h2>
          <span class="positive">+2.4% from last month</span>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-header">
          <i class="fas fa-arrow-up"></i>
          <h3>Income</h3>
        </div>
        <div class="card-body">
          <h2>$5,420.00</h2>
          <span class="positive">+12% from last month</span>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-header">
          <i class="fas fa-arrow-down"></i>
          <h3>Expenses</h3>
        </div>
        <div class="card-body">
          <h2>$3,245.50</h2>
          <span class="negative">-5% from last month</span>
        </div>
      </div>
    </div>
    
    <!-- Account List -->
    <div class="account-section">
      <div class="section-header">
        <h3>My Accounts</h3>
        <button class="add-account-btn">
          <i class="fas fa-plus"></i> Add Account
        </button>
      </div>
      
      <div class="account-list">
        <div 
          v-for="account in accounts" 
          :key="account.id" 
          class="account-card"
          :class="account.type"
        >
          <div class="account-icon">
            <i :class="account.icon"></i>
          </div>
          <div class="account-details">
            <h4>{{ account.name }}</h4>
            <p>{{ account.number }}</p>
          </div>
          <div class="account-balance">
            <h3>{{ account.balance }}</h3>
            <p>Available</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick Transfer -->
    <div class="transfer-section">
      <h3>Quick Transfer</h3>
      <div class="transfer-form">
        <div class="form-group">
          <label>From Account</label>
          <select>
            <option>Main Checking (•••• 4582)</option>
            <option>Savings Account (•••• 3021)</option>
          </select>
        </div>
        <div class="form-group">
          <label>To Account</label>
          <input type="text" placeholder="Enter account number">
        </div>
        <div class="form-group">
          <label>Amount</label>
          <input type="text" placeholder="$0.00">
        </div>
        <button class="transfer-btn">Transfer Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        {
          id: 1,
          name: "Main Checking",
          number: "•••• •••• •••• 4582",
          balance: "$12,458.50",
          type: "primary",
          icon: "fas fa-university"
        },
        {
          id: 2,
          name: "Savings Account",
          number: "•••• •••• •••• 3021",
          balance: "$8,750.00",
          type: "savings",
          icon: "fas fa-piggy-bank"
        },
        {
          id: 3,
          name: "Investment Portfolio",
          number: "•••• •••• •••• 5567",
          balance: "$24,309.12",
          type: "investment",
          icon: "fas fa-chart-line"
        },
        {
          id: 4,
          name: "Credit Card",
          number: "•••• •••• •••• 2245",
          balance: "-$1,245.80",
          type: "credit",
          icon: "fas fa-credit-card"
        }
      ]
    }
  }
}
</script>

<style scoped>
.accounts-dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.summary-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.card-header i {
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  background: #e0f2fe;
  color: #0369a1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-header h3 {
  margin: 0;
  font-size: 1rem;
  color: #64748b;
}

.card-body h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.75rem;
  color: #2c3e50;
}

.positive {
  color: #10b981;
  font-size: 0.85rem;
}

.negative {
  color: #ef4444;
  font-size: 0.85rem;
}

.account-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.add-account-btn {
  background: #0369a1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.account-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.account-card {
  padding: 1.25rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.account-card.primary {
  background: #e0f2fe;
  border-left: 4px solid #0369a1;
}

.account-card.savings {
  background: #dcfce7;
  border-left: 4px solid #10b981;
}

.account-card.investment {
  background: #f3e8ff;
  border-left: 4px solid #8b5cf6;
}

.account-card.credit {
  background: #fee2e2;
  border-left: 4px solid #ef4444;
}

.account-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.account-icon i {
  color: #2c3e50;
}

.account-details {
  flex-grow: 1;
}

.account-details h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #2c3e50;
}

.account-details p {
  margin: 0;
  font-size: 0.8rem;
  color: #64748b;
}

.account-balance {
  text-align: right;
}

.account-balance h3 {
  margin: 0;
  font-size: 1.1rem;
}

.account-balance p {
  margin: 0;
  font-size: 0.75rem;
  color: #64748b;
}

.transfer-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.transfer-section h3 {
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.transfer-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #64748b;
}

.form-group select, 
.form-group input {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
}

.transfer-btn {
  background: #0369a1;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-end;
  grid-column: 1 / -1;
}
</style>