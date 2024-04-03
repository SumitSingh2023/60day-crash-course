// Problem 1: Create a function to check if a number is Prime or Not

function checkprime(num){
    
    let factor=0
    for(let i=0 ; i<=num;i++){
        if(num%i==0){
            factor++
            
        }
        
    }
    if(factor==2){
        console.log("Prime Number")
    }else{
        console.log("Not Prime Number")
    }
}

checkprime(10)


