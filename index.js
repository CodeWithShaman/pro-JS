var userValue = prompt("Inter Any Table Number");

for (var i = 1; i <= userValue; i++){
    for(var j = 1; j <= 10; j++){
        console.log (i + "x" + j + "=" + i * j);
    }
}