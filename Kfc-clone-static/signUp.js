let form = document.querySelector("form")

let data = []

// function savedData(key,arr){
//     localStorage.setItem(key,JSON.stringify(arr))
// } 

function saveData(){
    localStorage.setItem('data',JSON.stringify(data))
}

function loadData(){
    let savedData=JSON.parse(localStorage.getItem("data"))
    if(savedData){
        data=savedData
    }
}

function handleSubmit(e) {
    e.preventDefault()
    let targetElement = e.target
    let userName = targetElement[0].value
    let email = targetElement[1].value
    let password = targetElement[2].value;
    let confirmPassword = targetElement[3].value;

    if (password == confirmPassword) {
        let obj = {
            user: userName,
            email: email,
            password: password
        }
        data.push(obj)
        saveData()
        alert("signup sucessfull")
        window.location.href="signin.html"
    }else{
        alert("Password not matching")
    }

}

form.addEventListener("submit", function (event) {
    handleSubmit(event)
})