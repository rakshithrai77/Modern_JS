//Function declaration
function showMessage()
{
    console.log("hello")
}

//Function expression

let show= function()
{
    console.log("world")
}

//scoping function declaration which is not visible

let age=10;

if(age>8)
{
    function window()
    {
        console.log("Open")
    }
}
let window;
//window()--error
if(age>8)
{
    window=function()
    {
        console.log("Open")
    }
}
window();
