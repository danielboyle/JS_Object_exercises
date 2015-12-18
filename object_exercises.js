// Question 1
var invoices = {
  unpaid: []
};

// Question 2
invoices.add = function(name, amount) {
  this.unpaid.push({
    name: name,
    amount: amount
  });
};

// Question 3
invoices.totalDue = function() {
  var total = 0;
  for (var i = 0; i < this.unpaid.length; i++) {
    total += this.unpaid[i].amount;
  }
  return total;
};

// Question 4
invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());

// Question 5
invoices.paid = [];

invoices.payInvoice = function(name) {
  var new_unpaid = [];

  for (var i = 0; i < this.unpaid.length; i++) {
    if (name === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i]);
    } 
    else {
      new_unpaid.push(this.unpaid[i]);
    }
  }
  this.unpaid = new_unpaid;
};

// Question 6
invoices.totalPaid = function() {
  var total = 0;
  for (var i = 0; i < this.paid.length; i++) {
    total += this.paid[i].amount;
  }
  return total;
};

// Question 7
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
