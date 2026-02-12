let cities=['Madhurai','Salem','Chennai','Namakkal','Coibatore','Erode']
let marks=[34,56,89,23]

//length or the array
console.log(cities.length);
console.log(marks.length);

//index of the elemenet
console.log(cities[3])
console.log(marks[1]);

//last Element
console.log(marks[marks.length-1]);

//mix of string and integer
let arr=[21,3,'q','abc',[3,4,6]]
console.log(arr[3]);
console.log(arr[4][1]);

//matrix

let array=[[23,67,98],[2,6,7],[3,8,5]]
console.log(array);
console.log(array[1][2])

//array methods
//push - add the element in end
let rio=['a','s','d','f','g']
rio.push('r')
console.log(rio)

//pop - remove the element in end
console.log(rio.pop())

//shift-remove the first element
console.log(rio.shift())
console.log(rio);

//unshift -add the element in first
console.log(rio.unshift('a'))
console.log(rio)

//splice-add and remove in the middle element
console.log(rio.splice('2','1'))
console.log(rio)

rio.splice(1,1,'m')
console.log(rio);






