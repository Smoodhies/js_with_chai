/*++++++++++++++++++++++++++++++ SCOPE +++++++++++++++++++++++++++++*/
// This is {} scope use in func object, loop , if else, 
//there types are local and global scope 
//means local can access global all properties but global cannot access local properties

debugger

var v1 ="value 1" 
const v2 = "value 2"
let global_scope = "this is global scope"

function example()
{

let l_scope="this is local scope"
return global_scope="this is update global scope inside example func "; 

}

// console.log(example());

// console.log(l_scope);// !! l_ scope is not defined because !! of scope this is defined inside example function that was it is accessible only that scope only


function example2()
{
let l_scope2="this is local scope"

function mini()
{
let mini_scope = "this is mini scope"
return `this inside the mini func ,this is ${ l_scope2},this ${ global_scope}` 
}

// console.log(mini()); 


//console.log(mini_scope); // mini_scope is not defined  parent func but parent func cannot access child property

 
return global_scope="this is update global scope inside example func ";
}
// console.log(example2());




// console.log(mini()); //mini is not defined because it is defined inside example func scope 


//child func can access every property of parent func but parent func cannot access child property






// console.log(this); 
