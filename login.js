let email2 = document.getElementById('email2');
let password2 = document.getElementById('password2');
let chk = document.getElementById('chk');
    let object = JSON.parse(localStorage.getItem('array')) || []

document.getElementById('login').addEventListener('click', () => {
    let filter = object.filter(obj => obj.email == email2.value &&  obj.password == password2.value && chk.checked);
    if (filter.length > 0) {
        alert('emtxveva')
    } else {
        alert('error')
    }

})


