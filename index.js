let email = document.getElementById('email');
let password = document.getElementById('password');
let h2 = document.getElementById('h2');


let confirmpassword = document.getElementById('confirmpassword');

document.getElementById('btn').addEventListener('click', (e) => {
  e.preventDefault();
  let passwordMatches = true;
  if (password.value !== confirmpassword.value) {
    passwordMatches = false
    alert('არ ემთხვევა პაროლი და confirmpassword ერთმანეთს')
  }
  if (password.value.length < 4) {
    passwordMatches = false
    alert('პაროლის სიგრძე ნაკლებია 4 ზე გაიმეორეთ თავიდან')
  }

  let toupper = false;
  if (password.value !== password.value.toLowerCase()) {
    toupper = true
  }



  let found = false;
  if (passwordMatches && toupper) {
    let object = {
      email: email.value,
      password: password.value,
      confirmpassword: confirmpassword.value,
    };
    for (let obj of array) {
      if (obj.email == object.email) {
        found = true
      }
    }
    if (!found) {
      array.push(object)
      localStorage.setItem('array', JSON.stringify(array))
    }
  }


});
let array = JSON.parse(localStorage.getItem('array')) || [];






let asd = document.getElementById('asd');
asd.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.assign('login.html')

})



let languages = 
  {
  ka: {
    title: 'რეგისტრაცია',
  },
  hy: {
    title: 'գրանցել',
  },
  en: {
    title: 'register',
  },
}



const Tegs = document.querySelectorAll('.a')
let title = document.querySelector('.title')
let buttonRegister = document.querySelector('.btn')
let local = localStorage.getItem('selectedlanguage') || 'ka' 

title.textContent = languages[local].title
buttonRegister.textContent = languages[local].title

Tegs.forEach((tg) => {
  tg.addEventListener('click' , () => {
  let attr = tg.getAttribute('language')
  title.textContent = languages[attr].title
  buttonRegister.textContent = languages[attr].title
  localStorage.setItem('selectedlanguage',attr)
  })
})                                          