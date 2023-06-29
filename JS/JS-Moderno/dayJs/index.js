const dayjs = require ("dayjs")

require ("dayjs/locale/pt-br")

dayjs.locale('pt-br')

let birthYear = '2004-10-19'

function age (birthdate){

const format = 'DD/MM/YYYY'
const birthYear = dayjs(birthdate)
const now = dayjs()

const personAge = now.diff(birthYear,'y')
const nextBirthday = dayjs(birthYear).add(personAge+1,'y')

const daysLeft = nextBirthday.diff(dayjs(),'day')

console.log(`You'r ${personAge} years old`)
console.log(`Your next birthday will be on ${nextBirthday.format(format)}`)
console.log(`You just need to wait ${daysLeft} days.`)

}

age(birthYear)