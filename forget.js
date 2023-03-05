
let newpassword = document.getElementById('newp')
let confirmpassword = document.getElementById('confirmnewp')
let email = document.getElementById('email')
let password = document.getElementById('old')


document.getElementById('submit').addEventListener('click', (e) => {
e.preventDefault()
let arr = JSON.parse(localStorage.getItem('array')) || []
let find = arr.findIndex(x => x.email == email.value && x.password == password.value)
if(find > -1){
 if(newpassword.value == confirmpassword.value){
    arr[find].password = newpassword.value
localStorage.setItem('array', JSON.stringify(arr))
 }
}else{
alert('msgavsi ar moidzebna ')
}
});

