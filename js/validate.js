var formSubmit = document.querySelector('#formSubmit');
formSubmit.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
    var input = document.querySelector('input');
    var err = document.querySelector('#error');
    

    if (!input.value.includes('@')) {
        var errText = 'Please enter valid E-mail';
    }
    if (input.value === '') {
        var errText = 'Input field is empty'; 
    }

    if (!input.value.includes('@') || input.value === '') {
        event.preventDefault();
        err.textContent = errText;
        input.style.cssText = 'border: 2px solid hsl(0, 93%, 68%); padding: 14px 39px 14px 19px;';
    }

    input.addEventListener('input', () => {
        err.textContent = '';
        input.style.cssText = ''; 
    });
};
