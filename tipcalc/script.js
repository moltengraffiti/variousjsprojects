const calcTip = document
  .getElementById("calculate")
  .addEventListener("click", calculateTip);

function calculateTip() {
  const billTotal = document.getElementById("billTotal").value;
  const tipValue = document.getElementById("tipValue").value;
  const people = document.getElementById("persons").value;
  const tipTotal = document.getElementById("tipTotal");
  const tipTotalPP = document.getElementById("tipTotalPP");

  console.log(billTotal);
  console.log(tipValue);

  const totalTip = Math.round(billTotal * (tipValue / 100));
  const totalPerPerson = Math.round(totalTip / people);
  tipTotal.innerHTML = `$${totalTip}`;
  tipTotalPP.innerHTML = `$${totalPerPerson}`;
  console.log(totalTip);

  //TODO - needs to check inputs for 0 values
}
