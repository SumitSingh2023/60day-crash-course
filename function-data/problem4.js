// Problem 4: Write a function to check if the char is a small case or not.

let smallCase = (input)=>{

    let smalletter ="abcdefghijklmnopqrstuvwxyz"
    let found = false
    for(let i=0;i<smalletter.length;i++){
        if(smalletter[i] == input){
            found=true
        }
    }
    if(found==true){
        console.log("true")
    }else{
        console.log("false")
    }
    

}

smallCase("z")
// let output = smallCase()
// console.log(output)