// Problem 5: Write a function to replace spaces in a given string with - .

function removeSpace(a){
    let input=a
    
    let newInput=""
    for(let i=0;i<input.length;i++){
        if(input[i]==" "){
            newInput += "-"
        }else{
            newInput=newInput+input[i]
        }
        
    }
    return(newInput)

}

let string="S um i t"
let output=removeSpace(string)
console.log(output)




