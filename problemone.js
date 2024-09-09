function calculateMoney(ticketSale) {
  // যদি ইনপুট নেগেটিভ হয়, তাহলে error মেসেজ রিটার্ন করবে
  if (ticketSale < 0) {
    return "Invalid Number";
  }

  // টিকেট বিক্রি থেকে আয়ের হিসাব
  let ticketPrice = 120;
  let income = ticketSale * ticketPrice;

  // খরচের হিসাব
  let guardSalary = 500;
  let staffLunchCost = 50 * 8; // ৮ জন স্টাফ, জনপ্রতি ৫০ টাকা লাঞ্চ

  let totalExpenses = guardSalary + staffLunchCost;

  // বাকের ভাইর হাতে থাকা মোট টাকা
  let remainingMoney = income - totalExpenses;

  return remainingMoney;
}

// উদাহরণ ইনপুট এবং আউটপুট
console.log(calculateMoney(10)); // 300
console.log(calculateMoney(1055)); // 125700
console.log(calculateMoney(93)); // 10260
console.log(calculateMoney(-130));
