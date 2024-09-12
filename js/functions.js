'use strict'

const calculate = () => {
    const MAX = 220
    const LOWER_LIMIT_MULTIPLIER = 0.65
    const UPPER_LIMIT_MULTIPLIER = 0.85
    const age = document.querySelector('input').value
    const lowerLimit = (MAX - age) * LOWER_LIMIT_MULTIPLIER
    const upperLimit = (MAX - age) * UPPER_LIMIT_MULTIPLIER
    document.querySelector('output').innerHTML = lowerLimit.toFixed(0) + "-" + upperLimit.toFixed(0)
}

document.querySelector('button').addEventListener('click', calculate)