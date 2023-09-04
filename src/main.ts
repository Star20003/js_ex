import {
    randomNumberButton,
    submitButton,
    showArrayButton,
    clearButton
} from './importers.js'

import {
    validateInputField
} from './functions.js'

import{
    randomNumberButtonHandler,
    showArrayButtonHandler,
    clearButtonHandler
} from './events.js'

randomNumberButton?.addEventListener( 'click', randomNumberButtonHandler)

submitButton?.addEventListener( 'click' , validateInputField) 

showArrayButton?.addEventListener( 'click' , showArrayButtonHandler)

clearButton?.addEventListener( 'click' , clearButtonHandler)