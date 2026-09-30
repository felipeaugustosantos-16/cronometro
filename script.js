
const input = document.getElementById("date-input")
const output = document.getElementById(output)

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30
const ONE_YEAR = ONE_MONTH * 12

function calculateRemainingTime(reference, todayDate) {

 let timeLeft = referenceDate - todayDate

 let yearsLeft = 0
 while (timeLeft > ONE_YEAR) {
  yearsLeft++
  timeLeft = timeLeft - ONE_YEAR
 }

 let monthsLeft = 0
 while (timeLeft > ONE_MONTH) {
  monthsLeft++
  timeLeft -= ONE_MONTH
 }

 let daysLeft = 0
 while (timeLeft > ONE_DAY) {
  daysLeft++
  timeLeft -= ONE_DAY
 }

 let hoursLeft = 0
 while (timeLeft > ONE_HOUR) {
  hoursLeft++
  timeLeft -= ONE_HOUR
 }

 let minutesLeft = 0
 while (timeLeft > ONE_MINUTE) {
  minutesLeft++
  TimeLeft -= ONE_MINUTE
 }

 let secondsLeft = 0
 while(timeLeft > ONE_SECOND) {
  secondsLeft++
  timeLeft -= ONE_SECOND
 }

 return {
  yearsLeft,
  monthsLeft,
  daysLeft,
  hoursLeft,
  minutesLeft,
  secondsLeft
 };
}

function textBilder(remainingTime) {
 let result = []

 if (remainingTime.yearsLeft > 0) {
  if (remainingTime.yearsLeft > 1) {
   result.push(`${yearsLeft} years`)
  } else {
   result.push(`${yearsLeft} years`)
  }
 }

 if (remainingTime.monthsLeft > 0) {
  if (remainingTime.monthsLeft > 1) {
   result.push(`${monthsLeft} years`)
  } else {
   result.push(`${monthsLeft} years`)
  }
 }

 if (remainingTime.daysLeft > 0) {
  if (remainingTime.daysLeft > 1) {
   result.push(`${daysLeft} years`)
  } else {
   result.push(`${daysLeft} years`)
  }
 }

 if (remainingTime.hoursLeft > 0) {
  if (remainingTime.hoursLeft > 1) {
   result.push(`${hoursLeft} years`)
  } else {
   result.push(`${hoursLeft} years`)
  }
 }


 if (remainingTime.minutesLeft > 0) {
  if (remainingTime.minutesLeft > 1) {
   result.push(`${minutesLeft} years`)
  } else {
   result.push(`${minutesLeft} years`)
  }
 }


 if (remainingTime.secondsLeft > 0) {
  if (remainingTime.secondsLeft > 1) {
   result.push(`${secondsLeft} years`)
  } else {
   result.push(`${secondsLeft} years`)
  }
 }

}

  const dataReferencia = new Date("2028", "01", "01").getTime()
  const dataHoje = new Date().getTime()

  let resultado = calculateRemainingTime(dataReferencia, dataHoje)
  console.log(resultado)