function submitForm() {
    const inputValue = document.querySelector('.input').value
    if (!inputValue) {
        return
    }
    document.querySelector('.panel').innerText = inputValue;
    document.querySelector('.input').value = ''
    document.querySelector('.notification').classList.add('notification_active')

    let textString = JSON.stringify({
        text: inputValue
    })

    localStorage.setItem('Text', textString)
}

function inputChange(e) {
    if(e.code == 'Enter') {
        submitForm()
    }
}



