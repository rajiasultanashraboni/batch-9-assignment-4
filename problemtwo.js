function checkName(name) {
  // প্রথমে চেক করবো ইনপুট কি স্ট্রিং টাইপের কিনা
  if (typeof name !== "string") {
    return "invalid";
  }

  // স্ট্রিং এর শেষের ক্যারেক্টার বের করা এবং ছোট হাতের অক্ষরে রূপান্তর করা
  let lastChar = name.slice(-1).toLowerCase();

  // ভালো নামের জন্য শেষ অক্ষর গুলোর তালিকা
  const goodChars = ["a", "y", "i", "e", "o", "u", "w"];

  // যদি শেষ অক্ষর ভালো নামের তালিকার মধ্যে থাকে, তাহলে "Good Name" রিটার্ন করবে
  if (goodChars.includes(lastChar)) {
    return "Good Name";
  }

  // অন্যথায় "Bad Name" রিটার্ন করবে
  return "Bad Name";
}

// উদাহরণ ইনপুট এবং আউটপুট
console.log(checkName("Salman")); // Bad Name
console.log(checkName("RAFEE")); // Good Name
console.log(checkName("Jhankar")); // Bad Name
console.log(checkName(199)); // invalid
console.log(checkName(["Rashed"])); // invalid
