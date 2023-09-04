import { inputNumber } from './importers.js'

import { primeNumbers } from './states.js'

export const randomNumberButtonHandler = () => {
    const randomNum = Math.floor(Math.random()*100000)
    inputNumber!.value = randomNum.toString();
}

export const showArrayButtonHandler = () => {
    
    const inputNum = parseInt(inputNumber!.value)

    for (let number = 1 ; number <= inputNum ; number++ ) {
        let prime = 'y'
        for (let i = 2; i < number ; i++) {
            if (number % i === 0) {
                prime = 'n' 
                break
            }
        }
        if (prime === 'y') {
            primeNumbers.push(number)
        } 
    }
    console.log('Prime Numbers:', primeNumbers)
}

export const clearButtonHandler =  () => {
    inputNumber!.value = ''
    primeNumbers.splice(0,primeNumbers.length)
    console.log('The array is being cleared',primeNumbers)
}