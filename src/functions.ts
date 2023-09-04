import { inputNumber } from './importers.js'

export const validateInputField = () => {
    const inputValue = inputNumber!.value.trim()
    if (inputValue === '') {
        alert('Input Field Must Be Filled With A Value')
        throw Error ('The input field cant be null')
        }
    else if (isNaN(parseInt(inputValue)) || inputValue.length != 5) {
        alert('Input Field Must Be Filled With A Five Digit Number')
        throw Error ('The input field cant be filled with anything more than a five digit number')

    }
}