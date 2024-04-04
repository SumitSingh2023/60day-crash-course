let name = ["Rice", "Dal", "Salt"]
let quantity = [2, 3, 1]
let price = [60, 50, 20]


let obj = {
    data: [
        { name: "Rice", quantity: 2, price: 60 },
        { name: "Dal", quantity: 3, price: 50 },
        { name: "Salt", quantity: 1, price: 20 }
    ],

    total: function () {

        let totalValue = 0
        let sum = 0
        for (let i = 0; i < this.data.length; i++) {
            totalValue = this.data[i].quantity * this.data[i].price
            sum = sum + totalValue
        }
        console.log(sum)

    }
}


obj.data
obj.total()



// let food = ["Rice", "Dal", "Salt"]
// let quantity = [2, 3, 1]
// let price = [60, 50, 20]

// let data = []

// for (let i = 0; i < food.length; i++) {
//     let obj = {}
//     obj.name = food[i]
//     obj.quantity = quantity[i]
//     obj.price = price[i]
//     //data.push(obj)

//     total = function () {
//         let sum = 0
//         let product = 1
//         for (let i = 0; i < data.length; i++) {
//             product = quantity[i] * price[i]
//             sum = sum + product
//         }
//         console.log(sum)
//     }
//     data.push(obj)
// }

//total()