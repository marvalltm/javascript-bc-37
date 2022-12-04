//https://www.npmjs.com/package/intl-tel-input
import intlTelInput from 'intl-tel-input';
import utils from 'intl-tel-input/build/js/utils.js';

const action = document.querySelector('.form');
const input = document.querySelector('#phone');
const iti = intlTelInput(input, {
  separateDialCode: true,
  utilsScript: utils,
});

action.addEventListener('submit', e => {
  e.preventDefault();

  console.log(iti.getSelectedCountryData());
  console.log(iti.getNumber());
});
