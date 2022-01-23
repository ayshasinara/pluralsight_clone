localStorage.removeItem("login");
function signin(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let data = JSON.parse(localStorage.getItem("userData"));
    let login = false;
    data.forEach(user => {
        if(user.email==email && user.password==password){
            login = true;
            localStorage.setItem("login", JSON.stringify(login));
            alert("Login Successful!");
        }
    });
}