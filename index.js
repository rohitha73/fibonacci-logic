function fibonacciGenerator (n) {

    if(n === 1){
        return [0];
    }
    else if(n === 2){
        return [0,1];
    }
    else if(n >= 3){

        var newArray = [0,1];
            
        for(var count = 3; count <= n; count++){
            var sumOf = newArray.slice(-2).reduce((a, b) => a + b, 0);
            newArray.push(sumOf);
        }
            
           

        return newArray;
    }
}
fibonacciGenerator()
