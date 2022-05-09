const generatePasswordBtn = document.getElementById('generate-password')
const result = document.getElementById('result')

const specialCharacters = ['!', '"', '#', '@', '$', '%', '&', '(', ')', '+', '=', '+', '/', '[', ']', '}', '{']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

const generatePassword = (length, configuration) => {
    let password = '';
    let passwordConfig = []
    console.log(length, configuration)
    if (configuration.specialCharacters) passwordConfig = [...passwordConfig, ...specialCharacters]
    if (configuration.lowercaseCharacters) passwordConfig = [...passwordConfig, ...lowercaseCharacters]
    if (configuration.uppercaseCharacters) passwordConfig = [...passwordConfig, ...uppercaseCharacters]
    if (configuration.numbers) passwordConfig = [...passwordConfig, ...numbers]

    console.log(passwordConfig)

    for (let i = 0; i < length; i++) {
        password += passwordConfig[getRandomNumber(passwordConfig.length)]
    }

    result.textContent = password;
}


const getRadioLengthButtons = () => {
    const radioLengthButtons = document.querySelectorAll('input[name="length"');
    return radioLengthButtons
}

const getCheckboxButtons = () => {
    const checkboxButtons = document.querySelectorAll('input[name="characters"')
    return checkboxButtons
}

const getPasswordLength = (buttons) => {
    let selectedLength;
    for (const radioButton of buttons) {
        if (radioButton.checked) {
            selectedLength = radioButton.value;
            return selectedLength
        }
    }
}

const getPasswordConfiguration = (checkboxes) => {
    let configuration = {
        specialCharacters: false,
        uppercaseCharacters: false,
        lowercaseCharacters: false,
        numbers: false
    };

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            const value = checkbox.value;
            configuration[value] = true;
        }
    }
    return configuration;
}

const getRandomNumber = (passwordArrayLength) => {
    const randomNumber = Math.floor(Math.random() * (passwordArrayLength))
    return randomNumber;
}

generatePasswordBtn.addEventListener('click', () => {

    generatePassword(getPasswordLength(getRadioLengthButtons()), getPasswordConfiguration(getCheckboxButtons()))

    // console.log(getPasswordLength(getRadioLengthButtons()))
    // console.log(getPasswordConfiguration(getCheckboxButtons()))
})


