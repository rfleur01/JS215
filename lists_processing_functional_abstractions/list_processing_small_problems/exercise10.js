function transactionsFor(id, transactions) {
  let items = [];

  return transactions.filter(transaction => transaction.id === id);
}

function calculateQuanitity(transactions) {
  let quantity = 0;
  transactions.forEach(item => {
    if (item.movement === 'in') {
      quantity += item.quantity;
    } else {
      quantity -= item.quantity;
    }
  });

  return quantity;
}

function isItemAvailable(id, transactions) {
  if (calculateQuanitity(transactionsFor(id, transactions)) < 0) {
    return false
  }
  return true
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true