let item={
    name:'phone',
    price:'25000',
    quantity:1,
    category:['Electronics','phones'],
    dimension:{
        length:7,
        breadth:5,
        height:5,
    }
}
console.log(item)
item.price=26000
console.log(item.price)
console.log(item.category[1]);
console.log(item.dimension.length)

//another way to create objects

let item2=new Object();
item2.name='charger'
item2.price=700
item2.quantity=1
console.log(item2);

//add the property
item.retunable=true
console.log(item);

//square bracket notation
console.log(item2['price'])
let key ='price'
item[key]=28000
console.log(item);

//for in.....
let may={
    name:'rio',
    age:21,
    dept:'IT'
}
for(let key in may){
    console.log(may[key])
}





