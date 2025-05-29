//Q 01
interface Product 
{
    name : string ;
    price : number ;
    instock : boolean;
}

// Q 02
function logproducts(product : Product): void
{
    console.log(`name : ${product.name}`);
    console.log(`price : ${product.price}`);
    console.log(`instock : ${product.instock ? `Yes` :`No`}`); 
}

//Q 03
type productormessage = Product | string ; 

//Q 04
function putInArray<T>(value :T): T[]
{
    return [value];
}

// Q5
interface ResponseData<T>
{
    data : T ;
    success : boolean ; 
    message : string ;
}