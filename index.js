const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = { id: this.transactions.length + 1, amount, type };
    return transaction;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Withdrawal is not possible, insufficient funds.');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id);
  },

  getTransactionTotal(type) {
    return this.transactions.reduce((total, transaction) => {
      if (transaction.type === type) {
        total += transaction.amount;
      }
      return total;
    }, 0);
  },
};