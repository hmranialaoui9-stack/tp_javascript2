const inputnom = document.getElementById("nom");
const inputprenom = document.getElementById("prenom");
const inputage = document.getElementById("age");
const inputtel = document.getElementById("telephone");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");


console.log(inputnom);
console.log(inputprenom);
console.log(inputage);
console.log(inputtel);
console.log(inputemail);
console.log(inputpassword);

inputsubmit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked!");
    console.log("nom : " + inputnom.value);
    console.log("prenom : " + inputprenom.value);
    console.log("age : " + inputage.value);
    console.log("telephone : " + inputtel.value);
    console.log("email : " + inputemail.value);
    console.log("password : " + inputpassword.value);


    alert(
        "nom: " + inputnom.value +
        "\nprenom: " + inputprenom.value +
        "\nage: " + inputage.value +
        "\ntelephone: " + inputtel.value +
        "\nemail: " + inputemail.value +
        "\npassword: " + inputpassword.value
    );
}); 