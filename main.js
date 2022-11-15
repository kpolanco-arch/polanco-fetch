

fetch('https://frontend-take-home.fetchrewards.com/form').then(response =>
    response.json()).then((data) => {

        let optionsOccupation =`<select id="occupation" name= "occupation"><option value="none" selected disabled hidden>--Select--</option>`
    let optionsState = `<select id="state" name= "state"><option value="none" selected disabled hidden>--Select--</option>`


    data.occupations.forEach(occupation => {
        optionsOccupation += 
            `<option id="occupation" required value="${occupation}">${occupation}</option>`
    
    }); ` </select >`

    data.states.forEach(state => {
            optionsState +=
                `<option id="state" required value="${state.name}">${state.name}</option>`
        }); ` </select >`

    document.getElementById("occupation-options").innerHTML = optionsOccupation;
    document.getElementById("state-options").innerHTML = optionsState;

})

var form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var occupation = document.getElementById('occupation').value
    var state = document.getElementById('state').value
    const data = {
        name: name,
        email: email,
        password: password,
        occupation: occupation,
        state: state,
}
console.log(data)
    
    fetch("https://frontend-take-home.fetchrewards.com/form", {

         headers: {
            "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
        
       
    }).then(response => response.json()).then(json => console.log(json)).catch((error)=> console.error(error));
    
});

function errorMessages() {
    
    var occupation = document.forms.UserForm.occupation.value
    var state = document.forms.UserForm.state.value

    if (occupation === "none"){
        document.getElementById("occupation").style.border = "3px solid red"
        window.alert("Please select an Occupation");
        return false; 
    }

    if (state === "none") {
        document.getElementById("state").style.border = "3px solid red"
        window.alert("Please select a State");
        return false;
    }
    window.alert("Succesful! form has been submitted");
    return true;

}

function resetColor() {
    var occupation = document.forms.UserForm.occupation.value
        if (occupation !== "none") {
            document.getElementById("occupation").style.border = "1px solid #ccc"
        }
}