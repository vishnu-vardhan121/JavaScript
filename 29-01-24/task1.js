// age greater than 25

a=[{name:"vishnu" , age:25}, {name:"vardhan" , age:26},{name:"mahendra" , age:35},{name:"bhanu" , age:24}, {name:"sahith" , age:36}, {name:"naveen" , age:24}]

for(k of a){
    if(k["age"]>25){
        console.log(`hii ${k['name']},your ang is greater than 25, your age is:
    ${k['age']}`)
    }
}