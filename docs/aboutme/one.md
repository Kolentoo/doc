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
#### 布尔类型 boolean
```
let flag:boolean=true;
flag=false;
flag=123 //类型报错
```

#### 数值类型 number
```
let a:number=10; //十进制
let b:number=0b1010 //二进制
let c:number=0o12 //八进制
let d:number = 0xa //十六进制
a=11;
```

#### 字符串类型
```
let str:string='123';
str = '456';
str = 456 //类型报错
```

#### undefined和null
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
#### 数组
```
// 定义数据1
let arr1:[]=[];
let arr2:number[]=[1,2,3];
arr2=['1']; //类型报错 数组中只能赋值数值类型

// 定义数组2 泛型(先声明数组，尖括号里声明数组元素的类型)
let arr3:Array<number>=[1,2,3];
```

#### 对象 表示非原始类型（除了number、string、boolean之外的类型）
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

#### any和void两种类型
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

#### 可选属性
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

#### 任意属性
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

#### 只读属性
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
