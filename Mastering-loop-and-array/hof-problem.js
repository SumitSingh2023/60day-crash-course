let numbersArray = [2,3,7,8,10.13,15,18,34,25]

// double arry with map
let doubleArray = numbersArray.map((el,i)=>{
    return el*2
})

console.log(doubleArray)
console.log(numbersArray)

//filter events

let evenNumberArray = numbersArray.filter((el)=>{
    return el%2==0
})

console.log(evenNumberArray)
console.log(numbersArray)

//summation with the help of reduce

let sum = numbersArray.reduce((acc, currentValue)=>{

    return acc+currentValue
})

console.log(sum)