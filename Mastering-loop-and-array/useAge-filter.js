// Given a list of user data with name and age, create a list of key-value pairs from the input
// From the generated data, print the users whose age is more than 30
// Sample Input
// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]

// Sample Data Stored [] - List {} - Key-Value Pairs
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// Sample Output
// Nrupul Yogesh

function getAge(name,age){
    let arr=[]

    for(let i=0;i<name.length;i++){
        let obj={}
        
        obj.names=name[i]
        obj.age=age[i]
        
        arr.push(obj)
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].age > 30){
            console.log(arr[i].names)
        }
    }
}

let name=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let age=[32, 30, 26, 28, 44]
getAge(name,age)


