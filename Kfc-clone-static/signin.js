let email=document.getElementById("username")
let password=document.getElementById("password")
let loginbtn=document.getElementById("signInBtn")

let data ;

function loadData(){
    let saveData= JSON.parse(localStorage.getItem("data"))

    if(saveData){
        data=saveData
    }
   
}
loginbtn.addEventListener("click",()=>{
    let emailuser=email.value
    let passworduser=password.value
    

    let narr= data.filter((ele,i)=>{
        return (ele.email===emailuser) && (ele.password===passworduser) 

    })

    if(narr.length > 0){
        alert("logged in succesfully")
        window.location.href="index.html"
    }else{
        alert("wrong credential")
    }

    

    console.log(narr)
})

loadData()