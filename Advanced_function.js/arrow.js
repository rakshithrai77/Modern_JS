let user={
    name:"rakshith",
    students:[1,2,3],
    hi(){
       this.students.forEach((id)=>console.log(this.name)) //error with regular function
    }
}

user.hi();

//arrow doesnt support arguments
