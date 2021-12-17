const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#rate")
const numberOfCompoundsBox = document.querySelector("#compounded")
const numberOfYearsBox = document.querySelector("#years")
const earnedSpan = document.querySelector("#earned")
const totalSpan = document.querySelector("#total")

function computeInterest() {
  const principal = principalBox.value
  const interest = interestRateBox.value
  const compound = numberOfCompoundsBox.value
  const years = numberOfYearsBox.value

  var multiplier = (interest / compound) + 1
  var multiplierPower = multiplier ** years
  var amount = principal * multiplierPower

  earnedSpan.textContent = amount - principal
  totalSpan.textContent = amount
}

document.getElementById("submit").addEventListener("click", computeInterest)
