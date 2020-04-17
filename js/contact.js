/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

function errorMsg(msg) {
  var error = document.getElementById('error');
  if (msg) {
    error.innerHTML = msg;
    error.style.cssText = 'color: red; border: 1px solid black; padding: 1em; font-size:20px';
  } else {
    error.innerHTML = '';
    error.style.cssText = 'padding: 1em';
  }
}

function validateForm() {
  var fname = document.getElementById('fname').value;
  if (fname === '') {
    errorMsg('First Name must be filled out');
    return false;
  }

  var lname = document.getElementById('lname').value;
  if (lname === '') {
    errorMsg('Last Name must be filled out');
    return false;
  }

  var email = document.getElementById('email').value;
  if (email === '') {
    errorMsg('Email must be filled out');
    return false;
  }

  var city = document.getElementById('city-choice').value;
  if (city === '') {
    errorMsg('City must be filled out');
    return false;
  }

  var address = document.getElementById('address').value;
  if (address === '') {
    errorMsg('Address Name must be filled out');
    return false;
  }

  var phone = document.getElementById('phone').value;
  if (phone === '') {
    errorMsg('Phone number must be filled out');
    return false;
  }

  var postal = document.getElementById('postal').value;
  if (postal === '') {
    errorMsg('Postal Code must be filled out');
    return false;
  }

  var question = document.getElementById('question');
  var comment = document.getElementById('comment');
  var order = document.getElementById('order');
  if (!question.checked && !comment.checked && !order.checked) {
    errorMsg('Purpose must be checked');
    return false;
  }

  var messages = document.getElementById('messages').value;
  if (messages === '') {
    errorMsg('Messages must be filled out');
    return false;
  }

  errorMsg();
  return true;
}

function addInputBox() {
  var orderNum = document.getElementById('orderNum');
  if (orderNum.childElementCount === 0) {
    var input = document.createElement('input');
    input.id = 'orderNum';
    input.type = 'text';
    input.name = 'orderNum';
    input.placeholder = ' order #';

    orderNum.appendChild(input);
    orderNum.appendChild(document.createElement('br'));
  }
}

function removeInputBox() {
  var orderNum = document.getElementById('orderNum');
  while (orderNum.firstChild) {
    orderNum.firstChild.remove();
  }
}
