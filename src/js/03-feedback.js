import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
const userInfo = {};


const fillContactFormFields = () => {
    try {
        const userInfoFormLS = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (userInfoFormLS === null) {
        return
        }
        console.log(userInfoFormLS);

        for (const prop in userInfoFormLS) {
        contactFormEl.elements[prop].value = userInfoFormLS[prop];
        }
    } catch(err) {
        console.log(err);
    }
};  

fillContactFormFields();

const onContactFormFieldInput = event => {
const { target } = event;

// const fieldValue = target.value;
// const fieldName = target.name;

userInfo[target.name] = target.value;


localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
};

const onContactFormFieldSubmit = event => {
    event.preventDefault();
    contactFormEl.reset();
    localStorage.removeItem('feedback-form-state');
};

contactFormEl.addEventListener('input', throttle(onContactFormFieldInput, 500));
contactFormEl.addEventListener('submit', onContactFormFieldSubmit);
