# TypeScript基础
## 原始数据类型
JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。<br/>
原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。 

## 类型声明
**作用：指定 ts变量（参数、形参）的类型**<br/>
【案例】下面这一段代码在js是中可以正常执行的，但是在ts中编译器会进行类型检测，当`num`被赋值为数字后，ts默认它是数值类型，因此赋值字符串的时候会报错。同样的在执行方法时，传参与要求的类型不同时也会报错。
```
// hello.ts

let num = 30;
num = 'kolento';
//Type 'string' is not assignable to type 'number'

function hello(name:string){
    console.log(name);
}
hello(123)
//Argument of type 'number' is not assignable to parameter of type 'string'.
```
## 基础数据类型
### 布尔类型 boolean
```
let flag:boolean=true;
flag=false;
flag=123 //类型报错
```

### 数值类型 number
```
let a:number=10; //十进制
let b:number=0b1010 //二进制
let c:number=0o12 //八进制
let d:number = 0xa //十六进制
a=11;
```

### 字符串类型
```
let str:string='123';
str = '456';
str = 456 //类型报错
```

### undefined和null
这两个平时用的不多，了解即可。
这两个类型除了赋值`undefined`和`null`以外，还可以作为其他类型的子类型(严格模式下会报错)
```
let u:undefined = undefined;
let n:null=null;
u=123 //类型报错

let b:number=undefined; //严格模式才会报错
let c:string=null; //严格模式才会报错
```

## 引用数据类型
### 数组
```
// 定义数据1
let arr1:[]=[];
let arr2:number[]=[1,2,3];
arr2=['1']; //类型报错 数组中只能赋值数值类型

// 定义数组2 泛型(先声明数组，尖括号里声明数组元素的类型)
let arr3:Array<number>=[1,2,3];
```

### 对象 
表示非原始类型（除了number、string、boolean之外的类型）
```
let obj:object={}
obj=123 //报错 只能表示非原始类型
obj='123'; //报错 只能表示非原始类型
obj=false; //报错 只能表示非原始类型
obj=null;
obj=undefined;
obj=[];
obj=new String();
```

### any和void两种类型
`any`:表示任何类型<br />
当无法确定后台返回的值类型或者多种类型的情况下可以使用any类型，随意赋值都不会报错。
```
let a:any=123;
a=true;
a='123';
a=[];
a={};

//数组赋值
let arr:any[]=[1,'2',true];
```

`void`:表示空值，没有任何返回值的函数<br />
即表示函数返回`undefined`，类似方法中最后 `return undefined` 的效果，因此当函数没有返回值的时候，我们可以把他定义为`void`类型。
```
function a():void{
    console.log(1234)
    // return undefined
}
```

## 类型推论
如果没有明确指定类型，那么`typescript`会依照类型推论的规则，推断出一个类型,类似`go`的类型推导。
```
let x = 123;
x='hello'; 
//类型报错 此处ts已经推导x为数值类型，因此赋值字符串报错
```
1.定义变量时，给变量赋值，则定义类型为值所对应的类型。
2.定义变量时，没有赋值，则定义为`any`类型
```
let a = 123; //将a定义为数值 则推断为数值类型
a = ""; //类型报错

let b; // 定义变量不赋值 推断变量为any类型
// 以下所有赋值都可以执行
b=1;
b="2";
b=[];
b={};
```

## 联合类型
表示取值可以为 多种类型 中的一种。
```
//通过 | 进行多种类型的联合定义
let f:boolean | number | string= true;
f=1;
f=false;
f="123";
```
#### 注意
**由于联合类型中可能存在多个类型，因此只能访问次联合类型中多有类型里共有的属性或方法。**
```
let f:boolean | number | string= true;
// f=1;
// f=false;
// f="123";

f.toString();
f.length; // 报错 类型“true”上不存在属性“length”
f.split(''); // 报错 类型“true”上不存在属性“split”
```

## 接口 interfaces
接口是对对象行为的一种约束。
使用了 对应接口 后的对象，必须与接口的形状（属性名、属性值类型、树形个数）完全一致，否则会报错。<br>
#### 注意
1.接口的首字母需要大写<br>
2.定义的变量比接口少或者多了一些树形是不允许的
```
// 定义一个接口
interface Person{
    name:string,
    age:number
}

//正常使用 声明一个对象，设置接口为Person
let kolento:Person={
    name:'kolento',
    age:20
}

// 报错 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。
let kolento:Person={
    name:'kolento',
}

// 报错 不能将类型“{ name: string; age: number; sex: string; }”分配给类型“Person”。
  对象字面量只能指定已知属性，并且“sex”不在类型“Person”中。
let kolento:Person={
    name:'kolento',
    age:20,
    sex:'mail',
}

// 报错 不能将类型“string”分配给类型“number”。
let kolento:Person={
    name:'kolento',
    age:'20',
}
```

### 可选属性
在接口中的属性名后添加`?`，表示这个属性可有可无
```
// 定义一个接口
interface Person{
    name:string,
    age:number,
    sex?:string
}

// 在没有sex属性的情况下也不会报错
let kolento:Person={
    name:'kolento',
    age:20,
}
```

### 任意属性
在接口中设置 任意属性 后，可以在变量中添加对应类型的属性。<br />
**属性名：[propName:string]**
```
interface Person{
    name:string,
    age:number,
    sex?:string,
    [propName:string]:any
}

// 此时再添加一个新的属性 height 也不会报错了
let kolento:Person={
    name:'kolento',
    age:20,
    height:180
}
```
**注意：**<br/>
1.一旦定义了任意属性，那么其他属性（确定的属性和可选属性）的类型，都必须是它的子集。<br/>
2.一个接口中只能定义一个任意属性，如果有多个类型的属性，可以在任意属性中使用联合类型或者`any`类型
```
// 报错 类型“number”的属性“age”不能赋给“string”索引类型“string”
interface Person{
    name:string,
    age:number,
    sex?:string,
    [propName:string]:string
}

// 使用联合类型后 先前对于age的报错消失了
interface Person{
    name:string,
    age:number,
    sex?:string,
    [propName:string]:string | number | boolean
}
```
这里由于任意属性的类型为`string`，而`age`是`number`类型，并不是 任意属性string类型的子集，因此报错。

### 只读属性
只读属性意味着，属性只能被读取，不能被修改。在属性名前添加关键字`readonly`即可。
```
interface Person{
    readonly id:number,
    name:string,
    age:number,
    sex?:string,
    [propName:string]:string | number |boolean
}

// 报错 无法为“id”赋值，因为它是只读属性
kolento.id=123
```

### 接口-数组类型
使用任意属性的形式可以定义数组结构的接口，但是平时用到的场景不多。
```
// 由于数组的属性名默认为数字下标，所以设置类型为number
interface arr{
    [index:number]:number
}

let test:arr=[1,2,3,"5"]; // 报错 let test:arr=[1,2,3,"5"];
```

### 接口-函数类型
函数类型的接口主要配置参数的类型和函数返回值的类型。
```
// 定义一个函数类型的接口
interface search{
    // （参数：类型）：返回值的类型
    (a:string,b:string):boolean
}

// 将kolento方法设置为search接口的配置
const kolento:search=(a:string,b:string):boolean=>{
    return true
}

// 报错 类型错误
const kolento:search=(a:number,b:string):boolean=>{
    return true
}
```
**报错提示：**
不能将类型“(a: number, b: string) => boolean”分配给类型“search”。 参数“a”和“a” 的类型不兼容。 不能将类型“string”分配给类型“number”。

## 函数 
#### 在typescript中进行函数声明 <br />
**注意：在属于多余或者少于要求的参数时，是不被允许的** <br />
相比较js，只是多了一些参数和返回值的类型声明
```
// 命名函数
// a:number,b:number  参数的类型声明
// :number 返回值的类型声明
function add(a:number,b:number):number{
    return a+b
}

// 函数表达式 匿名函数
let add2 = function(a:number,b:number):number{
    return a+b
}

// 在ts中函数的完整写法,确实过于繁琐
let add3:(a:number,b:number)=>number=function(a:number,b:number):number{
    return a+b
}
```

### 可选参数和默认参数
* **可选参数** <br/>
1.通过在参数后面添加`?`的形式，将该参数设置为可选参数，方法和接口中的可选属性一样。<br />
2.**注意不能在可选属性后面添加参数**，即必选参数不能位于候选参数后
```
let getName = function(x:string,y?:string):string{
    return x+y
}
console.log(getName('kolento')); // 返回 kolentoundefined

// 报错 已声明“z”，但从未读取其值
// 必选参数不能位于可选参数后
let getName = function(x:string,y?:string,z:string):string{
    return x+y
}
console.log(getName('kolento','hello','world'));
```

* **默认参数** <br/>
默认参数可以放在必选参数和可选参数的后面
```
let getName = function(x:string="kolento",y?:string):string{
    return x+y
}
console.log(getName()); //返回 kolentoundefined

// 默认参数可以放在必选参数和可选参数的后面
let getName = function(x:string="kolento",y?:string,z:string="hello"):string{
    return x+y+z
}
console.log(getName()); //返回 kolentoundefinedhello
```

### 剩余函数和函数重载
* **剩余函数**<br />
在ES6中，可以使用```...rest```的方式获取函数中的剩余参数
```
// ...agrs为一个数组，定义数组中元素为数值的类型
function test(x:string,y:string,...args:number[]){
    console.log(x,y,args)
}

test('hello','world',1,2,3,4,5)
//返回 hello world [ 1, 2, 3, 4, 5 ]
```

* **函数重载**<br />
允许一个函数接受不同数量或者类型的参数时，做出不同的处理。
也就是同一个函数，通过不同类型的参数，返回不同的结果。
**但我觉得这种写法意义不大，甚至有点蠢**
```
function add(x:string,y:string):string
function add(x;number,y:number):number

// 参数为数字：相加
// 参数为字符串：拼接
function add(x:string|number,y:string|number):string|number{
    if(typeof x=='string' && typeof y =='string'){
        return x+y //字符串拼接
    }else if(typeof x=='number' && typeof y =='number'){
        return x+y //数值相加
    }
}

console.log(add(11,22)) //返回 33
console.log(add('前端','测试')) // 返回 前端测试
```

## 类型断言
#### 可以在语句中手动指定一个类型。<br />
1.使用`as` 变量 as 类型。<br />
2.使用 <类型>变量 的形式
```
// 定义一个获取数字或字符串长度的方法
function getLength(x:string|number):number{
    // 由于字符串拥有length属性
    // 可以通过判断是否有该属性来判断x的类型是字符串
    if(x.length){
        return x.length
    }else{
        // 数字类型没有length属性，需要转化为字符串
        return x.toString().length
    }
}
// 代码报错
// 类型“string | number”上不存在属性“length”。
// 因为联合类型上使用的属性和方法必须是共有的。

// 使用 as 进行类型断言指定字符串类型
function getLength(x:string|number):number{
    if((x as string).length){
        return (x as string).length
    }else{
        return x.toString().length
    }
}

// 使用 <类型>变量 的形式 指定字符串类型
function getLength(x:string|number):number{
    if((<string>x).length){
        return (<string>x).length
    }else{
        return x.toString().length
    }
}
```
#### 类型断言的另一个作用
将任何一个类型断言为any，any类型可以访问任何属性和方法
```
//报错 类型“Window & typeof globalThis”上不存在属性“a”
window.a=10;
//如果想在某个对象上增加一个属性，可以断言为any后添加
(window as any).a=11;

// 案例
let a = {x:1,y:2};
// 报错 类型“{ x: number; y: number; }”上不存在属性“z”。
a.z=10;
(a as any).z=11
```
**注意**<br/>
类型断言有可能会掩盖类型错误，如果不是非常确定，就不要使用。

#### 使用类型断言 将any断言为一个具体类型
当出现以下的代码时，很容易出错<br/>
当参数为数字和字符串之外的类型时，会报错。<br/>
因此我们可以将any断言为一个具体类型。<br/>
```
function add(x:any,y:any):any{
    return x+y
}
console.log(add(1,2) as number); // 3
console.log(add('1','2')as string) // 12
```


