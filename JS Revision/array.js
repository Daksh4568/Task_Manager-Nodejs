// alert("Windows is being loaded")
// console.log("Hello Bhai")

// arrays and objects
// async js coding
// function return

var arr = [1 , 2 , 3 , 4 , 5 , 8 , 20];
// foreach map filter find  indexof

//foreach
arr.forEach((e)=>{
    console.log(e + " Daksh")
}) 

// map
var ans = arr.map((val)=>{
     return val+12/2;
})
console.log(ans)
// The main difference between foreach and map is that map always create a new resultant array after completing the operation

// filter
var ans1 = arr.filter((val)=>{
    if(val>3){
        return true;
    }
    else{return false}
})
console.log(ans1)

//find 
var ans2 = arr.find(function(val){
    if(val === 2) return val;
})
console.log(ans2);

// There is so much vast use of array as suppose there are many users in the array and then we have to find the particular user . Then in that case we can use indexof
 arr.indexOf(20);

 arr.indexOf(67);
 //if the member is not in the array than in that case it will give -1
 


