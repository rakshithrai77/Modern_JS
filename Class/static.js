class User{
    static Name()
    {
        console.log("hello");
    }
}
console.log(User.Name());

class Number2{
    constructor(name,no)
    {
        this.name=name;
        this.no=no;
    }

    static compare(a,b)
    {
        return a.no-b.no
    }
}

let Number1=[new Number2('two',2),new Number2('one',1), new Number2('three',3)]

Number1.sort(Number2.compare)
console.log(Number1);

//

class Article{
    static name="hello"
    constructor(article,date)
    {
        this.article=article;
        this.date=date;
    }

    static create()
    {
       return new Article("Todays",new Date())
    }

}

let article= Article.create()
console.log(article)

//static callable on clases not on object

//static properties
console.log(Article.name)

class Article2  extends Number2{
    sayhi()
    {
        console.log("hello")
    }
}

let articles2=[new Article2("hello",5),new Article2("hello",2)]

articles2.sort(Article2.compare)
console.log(articles2)

