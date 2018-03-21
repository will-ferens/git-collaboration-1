let numberArray = [1, 2, 3, 4, 5]

const evens = (array) => {
    let evenArray = []
    for(let i = 0; i <= array.length; i++){
        if(i % 2 === 0){
            evenArray.push(i)
            console.log(evenArray)
           
        } 
    }
    return evenArray
}

evens(numberArray)