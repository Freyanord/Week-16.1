// const formElement = document.querySelector('.form');
// const formInput = formElement.querySelector('.form__input');

let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) 
		{errors.push('Поле' + input.placeholder + 'не заполнено'); }
    if (validity.patternMismatch) 
		{errors.push('Неверный формат заполнения!'); }
    if (validity.rangeOverflow) 
		{let max = getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше чем' + max); }
    if (validity.rangeUnderflow) 
        {let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть больше чем' + min); }        
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

document.getElementById('errorMessage').innerHTML = errors.join('. <br>');
}


form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    form.reset();
    checkAll();
});
