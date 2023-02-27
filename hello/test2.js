// let a=5;
// let b=5.7;
// let c="I'm TB King"
// let d= "dao van tainhu   "
// console.log(`ok daovantai ${c+d}`);
// console.log(d.split())
// console.log(d.toUpperCase())
// console.log(`urf:/api/tb/${a}`)

// document.write(`ok ${d}`, 'hahaha')

// for (let i=0; i<5; i++){
//     console.log(`${i}taibu`)
// }

let cars= ['mec','bmw','lambo','vkl','bmw22']
// cars.forEach(function(car){
//     console.log(car)
// })

// cars.forEach((car) => {
//     console.log(car)
// })

// for (const ok of cars) {
//     console.log(`name:${ok}`)
// }

// cars.forEach((car,index,arr) =>{
//     console.log(`i =${index} car= ${car}`)
// })

// cars.push("vario")
// let filterCar = cars.filter(function(car) {
//     return car.toLowerCase().includes("bmw")
// })
// console.log(filterCar.length)
// console.log(`filterCar= ${filterCar}`)   

let someNumbers= [3,5,7,1,5,9]
// let squareNumbers= someNumbers.map(eachNumber => {
//     return eachNumber * eachNumber
// })
// console.log(`squareNumbers= ${squareNumbers}`)

// console.log(squareNumbers)

// someNumbers= someNumbers.filter(eachNumber => 
//     eachNumber >=5
// )
// console.log(someNumbers)


// function sayHello(name, dc){
//     console.log(`Hello ${name} ${dc}`)
// }

// sayHello(8,"ad")


// const multiply= function(a,b){
//     return a*b
// }
// console.log(`multiply ${multiply(4,6)}`)

// let divide= (a,b) => (a/b).toFixed(2)
// console.log(divide(9,7))

// let s=0
// setInterval(function(){
//     s+=1
//     console.log(`${s} call Tb`)
// },1000)

// let point={}
// point.a="haha"
// point.b="hihi"

// let {a,b} = point
// console.log(`${a} ${b}`)
// console.log(point.a)

// point.a="vkl"
// console.log(point)
// console.log( typeof point, typeof a)


const myCar ={
    maker: 'Mercedes',
    model: 'G63',
    year: 2023
}
// console.log(myCar)
// alert(JSON.stringify(myCar))

// for (const key in myCar) {
//    console.log(`${key}`)
// }

// for (const item of Object.values(myCar)) {
//     console.log(`${item}`)
// }


// const myCar2= {... myCar}
// myCar2.model="nung'"
// console.log(myCar2.model)



function Car(maker,model,year,color){
    this.maker=maker
    this.model=model
    this.year= year
    this.color=color
}
let car1= new Car('TB',"NP",2001,"vkl")
let car2= new Car('Mazda',"md2",2012,"red")
let car3= new Car('Lexus',"lxjp",2018,"blu")


// car1.run= function(speed){
//     console.log(`speed: ${speed}`)
// }
// car1.run(123)
// car1.des= function(){
//     console.log(`make: ${this.maker}, model: ${this.model}`)
// }

// console.log(car2)


// delete car2.color

// console.log(car2)


// class Persion {
//     constructor (name, email, age){
//         this.name= name || 'no name'
//         this.email= email || 'no email'
//         this.age= age || 18 
//     }
// }


// class Employee extends Persion{

//     constructor(name,email,age,department){
//         super(name,email,age)
//         this.departmentName= department ?? 'No department'
//     }
// }

// let employeeA= new Employee('tb','tda@gmail',21,'depart')

// console.log(employeeA)

// console.log(`employee: ${JSON.stringify(employeeA)}`)


// let persionC= new Persion('persion1','mailpersion','ageps')


const urlGetEntries= 'https://api.publicapis.org/entries'
const urlGetCategories= 'https://api.publicapis.org/categories'



async function fetchDataFromAPIServer(url){
    return new Promise((resolve, reject) =>{
        debugger
        // console.log('begin sending request')
        fetch(url).then(response => {
            // console.log('received response')
            // debugger
            response.json().then(data =>{
                // console.log('changed response to json object')
                // debugger
                resolve({result: data, error: '', message: 'fetch data success'})
            })
        }).catch(error =>{
            // debugger
            // console.log('error:' +error)
            reject({error: error, message: 'cannot get data '})
        })
    })
}


// console.log('begin task 1')

// fetchDataFromAPIServer(urlGetEntries).then(result =>{
//     // debugger
//     console.log('end task 1')
// }).catch(error =>{
//     // debugger
// })

// console.log('begin task 2')

// fetchDataFromAPIServer(urlGetCategories).then(result =>{
//     // debugger
//     console.log('end task 2')
// }).catch(error =>{
//     // debugger
// })
async function do2AsyncTasks(){
    try {
        console.log('begin task 1')
        let result1= await fetchDataFromAPIServer(urlGetEntries)
        console.log('end task 1')
        console.log('begin task2')
        let result2= await fetchDataFromAPIServer(urlGetCategories)
        console.log('end task 2')
    } catch (exception) {
        console.log('error:' + JSON.stringify(exception))
    }
}

do2AsyncTasks()
