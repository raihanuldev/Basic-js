var numbers = [1, 12, 13, 14, 15, 16, 17,18,19,20,50,60,80];
for(var i =0; i<numbers.length; i++){
    var number = numbers[i];
    
    if (number <50) {
        continue      
    }
    console.log(number);
    
}