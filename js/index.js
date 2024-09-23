// donation section

function getInputFieldValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getTextFieldValueById(id) {
  const textField = parseFloat(document.getElementById(id).innerText);
  return textField;
}


// noakhali
document
  .getElementById("donate-for-noakhali")
  .addEventListener("click", function () {
    const empty = document.getElementById('noakhali-donation');
    const addMoney = getInputFieldValueById("noakhali-donation");
    const getBalance = getTextFieldValueById("noakhali-balance");
    const Balance = getTextFieldValueById("balance");

    if (!isNaN(addMoney) && addMoney > 0 && addMoney <= Balance) {
      let newBalance = addMoney + getBalance;
      let mainBalance = Balance - addMoney;
      document.getElementById("noakhali-balance").innerText = newBalance.toFixed(2);
      document.getElementById("balance").innerText = mainBalance.toFixed(2);
      document.getElementById('my_modal_1').showModal();
    } else {
      document.getElementById('my_modal_1').close();
      alert("Invalid Donation amount");
      return;
    }

    // history section

    const historyItem = document.createElement("div");
    historyItem.className = "p-4 rounded-lg border";

    historyItem.innerHTML = `
    <p class="text-lg font-medium">${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh</p>
    <p class="font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
    empty.value = '';
  });


// feni
document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    const empty = document.getElementById('feni-donation');
    const addMoney = getInputFieldValueById("feni-donation");
    const getBalance = getTextFieldValueById("feni-balance");
    const Balance = getTextFieldValueById("balance");

    if (!isNaN(addMoney) && addMoney > 0 && addMoney <= Balance) {
      let newBalance = addMoney + getBalance;
      let mainBalance = Balance - addMoney;
      document.getElementById("feni-balance").innerText = newBalance.toFixed(2);
      document.getElementById("balance").innerText = mainBalance.toFixed(2);
      document.getElementById('my_modal_1').showModal()
    } else {
      document.getElementById('my_modal_1').close();
      alert("Invalid Donation amount");
      return;
    }

    // history section

    const historyItem = document.createElement("div");
    historyItem.className = "p-4 rounded-lg border";

    historyItem.innerHTML = `
    <p class="text-lg font-medium">${addMoney} Taka is Donated for Flood at Feni, Bangladesh</p>
    <p class="font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    empty.value = '';
  });


// quota
document
  .getElementById("donate-for-quota")
  .addEventListener("click", function () {
    const empty = document.getElementById('quota-donation');
    const addMoney = getInputFieldValueById("quota-donation");
    const getBalance = getTextFieldValueById("quota-balance");
    const Balance = getTextFieldValueById("balance");

    if (!isNaN(addMoney) && addMoney > 0 && addMoney <= Balance) {
      let newBalance = addMoney + getBalance;
      let mainBalance = Balance - addMoney;
      document.getElementById("quota-balance").innerText = newBalance.toFixed(2);
      document.getElementById("balance").innerText = mainBalance.toFixed(2);
      document.getElementById('my_modal_1').showModal()
    } else {
      document.getElementById('my_modal_1').close();
      alert("Invalid Donation amount");
      return;
    }

    // history section

    const historyItem = document.createElement("div");
    historyItem.className = "p-4 rounded-lg border";

    historyItem.innerHTML = `
    <p class="text-lg font-medium">${addMoney} Taka is Donated for Quota at, Bangladesh</p>
    <p class="font-light text-gray-500">Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    empty.value = '';
  });

//   histor tab funtionality
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-btn-primary", "font-semibold", "border-none");
  donationBtn.classList.remove(
    "bg-btn-primary",
    "font-semibold",
    "border-none"
  );

  document.getElementById("main-content").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// donation tab funtionality
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-btn-primary", "font-semibold", "border-none");
  donationBtn.classList.add("bg-btn-primary", "font-semibold", "border-none");

  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
