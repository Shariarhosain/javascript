// var a = 5;
// var b = 6;
// var c = a++;
// var d = ++b;
// console.log(c);
// console.log(d);
// console.log(a);

//date type
// var a = 154;
// var result = a.toString();
// console.log(result);

//convert binnery,octal,decimal,hexadecimal
// var number = 56;
// var result = number.toString(2);
// console.log(result);

// prection
// var x = 2.369;
// var y = x.toPrecision(3);
// console.log(y);


// int to string convert
// var x = 10;
// var y = x.toString();
// console.log(y);
// var a = parseInt(y);
// console.log(a)

//string  to int convert
// var b = "3.256987"
// var c = parseFloat(b);
// console.log(c)

// var x = 3.1456;
// var y = x.toString();
// console.log(y);
// var result = parseFloat(y.toString());
// console.log(result);


// var c = "2.55555556";
// var b = parseFloat(c);
// console.log(b);
// var y = b.toString();
// console.log(y);


// var x = "sanny kamon acho kamon is man kamon oo man kamon"
// var y = x.match(/kamon/g);
// var z = x.replace("sanny", "hi");
// console.log(z);
// console.log(y);
// var x = 0.2 + 0.1;
// console.log(x)


// var x = 12;
// console.log(isNaN(x));


// var a = 25;
// var b = isNaN(a);
// console.log(b);

// var str = String('hi i am shariar hosain sanny'); // string constructor
// console.log(str);
// document.write(str);


// var a = 20;
// var x = a + '';
// console.log(x);




// Escape notation

// var a = ' hi i am \'sanny\'';
// var x = "hi this is \n\"sanny\"";
// console.log(a, x);

// var str="I love my bangladesh";
// var arr = str.split(" ");
// console.log(arr);

// var arr=['I', 'love', 'my', 'bangladesh'];
// var str=arr.join(" ");
// console.log(str);

// // Array to string
// var arr=['I', 'love', 'my', 'bangladesh']
// var str=arr.join(" ");
// console.log(str);


// // string to array convert
// var arr1=str.split(" ");
// console.log(arr1);

// // array add and delete
// arr1.push("and"," coding");
// console.log(arr1);
// arr1.unshift("I am non");
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);


// let arr =[5,6,50,100,8,90];

// console.log(arr.sort());


// function maxFinder(arr1){

// let max= arr1[0];
// for(let x of arr){

//     if(max<arr1[x]){
      
//          max=arr1[x];

//     }
  
// }
//  return max;

// }

// let show= maxFinder(arr.sort());
// console.log(show);

// let vowel="abcDefGhiJklmNOP";
// let arr=vowel.split("");
// arr.push("Q");
// arr.push("R");
// arr.push("s");
// arr.push("t");
// arr.push("x");
// arr.pop();
// arr.unshift("z");
// arr.shift();
// console.log(arr);
// let arr2=['a', 'e', 'i', 'o', 'u'];
// let lo= arr.map(value=>{
// return value.toLocaleLowerCase();

// });
//  console.log(lo);



// function vowelFinder(arr3,lo){
//   let arr4=[];
// for(let i=0;i<lo.length;i++){
// for(let j=0;j<arr3.length;j++){
// if(lo[i]==arr3[j]){

// arr4.push(lo[i]);

// }else
// {
//     continue;
// }
// }
// }
// return arr4;
// }
// let v= vowelFinder(arr2,lo)
// console.log(v);



// let str='1234456778956699999';
// const arr=str.split('');
// console.log(arr);
// const arr1=arr.filter((value,index)=>{
// return arr.indexOf(value)==index;

// });
// console.log(arr1);

// class person {

// constructor(name,db){
// this.name=name;
// this.db=db;
// }

// fun(){

// return `Name:${this.name} and date of birth ${this.db}`;

// }

// }


// let person1= new person();
// person1.name= "sanny";
// person1.db="28-12-2001";
// console.log(person1.fun());



// let liNew;
// liNew= document.createElement('li');
// liNew.className="new";
// console.log(liNew);

// liNew.appendChild(document.createTextNode("hosain"));
// let li = document.querySelector('ul').appendChild(liNew);



// let  s= document.querySelector('ul');
// console.log(arr);
// console.log(s);





let list= document.createElement('li');
let link =document.createElement('a');
link.setAttribute('href','http://www.facebook.com');
link.setAttribute('target','_blank');
link.appendChild(document.createTextNode('Facebook'));
console.log(
link);
list.appendChild(link);
link.style.color = 'red';
link.style.textDecoration = 'none';

let litems = document.querySelector('ul');
litems.appendChild(list);


let all =document.getElementsByTagName('li');
let dd= Array.from(all);
litems.replaceChild(list,dd[1]);

document.querySelector('.button').addEventListener('click', message);
document.querySelector('.button').style.background = 'red';
function message(e) {

   this.style.background= `#${e.offsetX}`;
   //this.style.background= `#${e.offsetY}`;

}
document.querySelector('#fname').addEventListener('keyup',function(){
    let x= this.value;
   

    document.getElementById('write').innerHTML= x.toLowerCase();
})

    