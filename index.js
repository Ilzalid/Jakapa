let users = [];

const addUser = (ev)=>{
  ev.preventDefualt();
  let user = {
    name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("psw").value
  }
  users.push(user);
  document.forms[0].reset();

  console.warn('added' , {users} );
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

  localStorage.setItem('MyUserList', JSON.stringify(users) );
}
document.addEventListener('DOMcontentloaded', ()=>{
  document.getElementById('btn').addEventListener('click', addUser);
});
