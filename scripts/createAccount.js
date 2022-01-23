function createAccount(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let email2 = document.getElementById("email2").value;
    let country = document.getElementById("residence").value;
    let company = document.getElementById("company").value;
    if(email!=email2){
        alert("Invalid Data!");
        console.log(email,email2);
        return;
    }
    let data = JSON.parse(localStorage.getItem("userData"));
    if(!data)
    data = [];
    data.forEach(user =>{
        if(user.email==email){
            alert("User already exists!")
            return;
        }
    })
    data.push({firstname, lastname, email, password:"password", country, company});
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.href = "../pages/signin.html";
}