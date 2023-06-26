# 进阶
## 类型别名
作用：类型别名可以用来给类型取一个新的名字。<br/>
常用于联合类型。
#### 使用type关键字取别名
```ts
type s = string; // 给类型起别名
let str:s = '123';

//当类型较多比较重复的情况也可以使用
let a:string|number|boolean=123;
let b:string|number|boolean='hello';
let c:string|number|boolean=true;

// 使用别名后可以少写一些代码
type all = string|number|boolean;
let a:all=123;
let b:all='hello';
let c:all=true;
```

## 字符串字面量类型
用来约束取值只能是某几个字符串中的其中一个。
```ts
// 张三 李四 王五 
// 让这个names的值只能为这几个值的其中一个
type stringType ="张三"|'李四'|'王五';
// 报错 type stringType ="张三"|'李四'|'王五';
let names:stringType = '1';
```

## 元祖 Tuple
ts中数组合并了相同类型的对象，而元祖可以合并不同类型的对象。可以在里面添加不同类型的对象。<br/>
**注意：** 元祖声明里面的值时候，必须与[]中声明的类型顺序对应。
```ts
// ts中数组合并相同类型的对象
let arr1:number[]=[1,2,3,4,5]
// 元祖Tuple合并不同类型的对象
let arr2:[number,string]=[123,'123'];
// 在给元祖类型添加数据的时候 只要是联合类型中的类型就可以直接使用
arr2.push(111);
arr2.push('hello');
// 报错 类型“boolean”的参数不能赋给类型“string | number”的参数
arr2.push(false)
```

## 枚举 Enum
枚举类型用于取值被限定在一定的范围内的场景，比如一周只能有七天。<br />
#### 作用 <br />
1.可以通过名称去取值，也可以通过值去拿取名称。<br />
2.添加可读性强的属性名。<br />

**我们可以进行手动赋值，如果没有手动赋值 第一个值默认为0，后面的值递增+1**
```ts
// 用枚举类型给一组数值赋予名称
enum week {
    monday=1,
    tuesday,
    wednesday,
    thurday,
    friday,
    saturday,
    sunday
}
console.log('week',week)
//返回 第一个定义1，后面的值自动递增+1
monday: 1,
tuesday: 2,
wednesday: 3,
thurday: 4,
friday: 5,
saturday: 6,
sunday: 7

// 如果没有手动赋值 第一个值默认为0 即monday=0
enum week {
    monday,
    tuesday,
    wednesday,
    thurday,
    friday,
    saturday,
    sunday
}

// 可以通过名称去取值，也可以通过值去拿取名称。
console.log('week',week[tuesday]) //返回 2
console.log('week',week[2]) //返回 tuesday
```

### 常数项和计算所得项
枚举项有2中类型，一种是 **常数项**，一种是**计算所得项**。<br/>
上面提到的 `enum week`则为常数项<br />
以下为计算所得项，即通过计算所得出的项<br/>
**注意：计算所得项后不能存放为手动赋值的枚举项** <br/>
因为它会因为没有获得初始值而报错，因为前一项是计算所得项，值还在计算，无法根据前一个值来计算得到当前的值。
```ts
enum a{
    red,
    blue='blue'.length,
    yellow
}
// 这里yellow 会报错，因为计算所得项后不能存放为手动赋值的枚举项
```

### 常数枚举
常数枚举是通过`const enum`定义的枚举类型。<br />
**常数枚举与普通枚举的区别**<br />
1.常数枚举会在编译阶段被删除<br />
2.常数枚举不包含计算所得项<br />
```ts
const enum obj{
    one,two,three
}
console.log('obj', obj) //报错 obj已经没删除找不到了
console.log('obj', obj.one) // 0
``` 

### 外部枚举
外部枚举是使用`declare enum`定义的枚举类型。<br/>
`declare`定义的类型会在编译的时候检查，编译结果中会被删除，这一点和常数枚举一样。<br/>
外部枚举常作用于 声明文件 中。
```ts
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
**同时使用外部枚举和常数枚举**
```ts
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

## 类
typescript除了实现所有ES6中类的功能以外，还添加了一些新的用法。<br/>
### 类的概念/介绍
类 是描述了所创建的对象共同的属性和方法<br/>
类可以被理解为一个模板，然后通过这个模板去实例化对象。<br />
### ES6中类的用法
```ts
// 声明一个类
class Person{
    // 构造器/构造函数
	constructor(name,age){
		this.name=name;
        this.age=age;
	}
}

// 当new一个类的时候，会执行这个类里面的构造函数 constructor
new Person()
```
### 在typescript中的用法
需要要在类中定义要需要使用的属性，才能在构造函数中赋值
```ts
// 声明一个类
class Person{
    name:string
    age:number
    // 构造器/构造函数
	constructor(name:string,age:number){
		this.name=name;
        this.age=age;
	}
}

 constructor
new Person('kolento',20);
```
### 在类中定义方法
需要对参数的类型作类型的约束
```ts
// 声明一个类
class Person{
    name:string
    age:number
    // 构造器/构造函数
	constructor(name:string,age:number){
		this.name=name;
        this.age=age;
	}
    hello(str:string){
        console.log('hi'+str)
    }
}

// 当new一个类的时候，会执行这个类里面的构造函数 constructor
let p = new Person('kolento',20);
p.hello('kolento'); //返回 hikolento
```

### 类的继承
通过类的继承 可以扩展现有的类<br />

**总结** <br />
1.类与类质检可以存在集成关系，通过`extends`关键字继承<br />
2.子类可以调用父类的构造函数和方法，通过`super`关键字<br />
3.子类可以重写父类的方法
```ts
// 父类
class Animal{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    hello(str:string){
        console.log('hi,'+str)
    }
}

// 子类
class Dog extends Animal{
    constructor(name:string,age:number){
        // 使用super调用父类的构造函数,将父类的属性给到子类
        super(name,age);
    }
    // 1.构造函数中使用super后，子类也能调用父类的方法
    // 2.也可以重写父类的方法
    hello() {
        console.log('重写的方法')
        // 也可以在方法中调用父类的方法
        super.hello('中华田园犬',5);
    }
}

// 实例化对象
const cat = new Animal('猫咪',3);
cat.hello('波斯猫');
const d = new Dog('泰迪',2);
d.hello();

//返回
hi,波斯猫
重写的方法
hi,中华田园犬
```

### 存取器
使用`getter`和`setter`可以改编属性的赋值和读取行为<br />
可以帮助我们控制对对象成员的访问。<br />
* 通过`get`来设置读取器读取数据，`get`为只读属性
* 通过`set`来设置存储数据
* 在没有`set`的情况下，无法修改值
```ts
class Name{
    firstName:string
    lastName:string
    constructor(firstName:string,lastName:string){
        this.firstName=firstName
        this.lastName=lastName
    }
    //设置存取器 
    // 读取器作用：用来读取数据
    get fullName(){
        return this.firstName +'-'+ this.lastName;
    }
    // 设置器 用来设置数据
    set fullName(value){
        console.log(value)
    }
}
const n = new Name('张','伟');
console.log(n.fullName) //张-伟
// 这里会去调用类中 设置器 的set fullName方法
n.fullName='测试'; // 测试
```

### 静态方法/属性
通过关键字`static`将属性和方法设置成静态的属性/方法。<br />
```ts
class Test{
    static sex:string
    static hello(){
        console.log('hello');
    }
}
let a = new Test();

// 静态成员无法被访问
a.sex; // 属性“sex”在类型“Test”上不存在。
a.hello(); //属性“sex”在类型“Test”上不存在。

// 只能通过类自己进行访问
Test.sex;
Test.hello();
```

### 修饰符
`public` `private` 和 `protected`
* **public 修饰符表示属性或者方法是公有的**
* 可以在任何地方被访问到，默认所有属性和方法都是public
```ts
// 以下两种是一样的
class Kolento{
    name:string
    constructor(name:string){
        this.name=name
    }
    hello(){
        console.log('hello');
    }
}

class Amiee{
    public name:string
    public constructor(name:string){
        this.name=name
    }
    public hello(){
        console.log('hello');
    }
}
```

* **private只能在类的内部被访问**<br />
当把类中的name属性改成private类型后，通过k访问name就会报错。
```ts
class Kolento{
    private name:string
    constructor(name:string){
        // 类自己本身是可以访问到的
        this.name=name
    }
    hello(){
        console.log('hello');
    }
}
const k = new Kolento('kkk');
// 报错 属性“name”为私有属性，只能在类“Kolento”中访问
k.name;
```
* 当通过子类去继承父类时，父类的私有属性可以被继承，但是不能被读取。<br />
```ts
class Kolento{
    private name:string
    constructor(name:string){
        this.name=name
    }
    hello(){
        console.log('hello');
    }
}
const k = new Kolento('kkk');

class C extends Kolento{
    constructor(name:string){
        super(name);
    }
}
const Cindy = new C('happy');
// 报错 属性“name”为私有属性，只能在类“Kolento”中访问
console.log('Cindy',Cindy.name)

```
* **`protected`修饰符可以让被继承的子类访问，但是不能被自身和子类之外的地方访问**
```ts
class Kolento{
    protected name:string
    constructor(name:string){
        this.name=name
    }
    hello(){
        console.log('hello');
    }
}
// const k = new Kolento('kkk');

class C extends Kolento{
    constructor(name:string){
        super(name);
    }
    test(){
        // name在子类中可以被访问
        console.log(this.name)
    }
}
const Cindy = new C('happy');
// 报错 属性“name”受保护，只能在类“Kolento”及其子类中访问
console.log(Cindy.name)
// 可以通过子类方法中访问
Cindy.test()
```
**总结**<br/>
* `public` : 类 默认修饰符为public，可以被任意访问<br/>
* `private` : 只有自身可以访问，子类只能继承不能访问<br/>
* `protected` : 只有自身和子类可以访问，外部依旧不能访问。<br/>

#### readonly只读属性
1.`readonly`修饰符下的属性只能读取不能修改<br />
2.只读属性，但是在构造函数中可以修改
```ts
class X{
    //只读属性，但是在构造函数中可以修改
    readonly age:number
    constructor(age:number){
        this.age=age
    }
    update(){
        //报错 无法为“age”赋值，因为它是只读属性
        this.age=18
    }
}
```

### 抽象类
* 通过`abstract`关键字定义一个抽象类<br />
* 也可以通过这个关键字定义 抽象属性和抽象方法。<br />
1.抽象类不允许被实例化<br/>
2.抽象类的作用主要是服务与它的子类<br/>

**错误的写法：**
```ts
// 抽象类不能够被实例化
abstract class Y{
    abstract name:String
    //报错 不能在构造函数中访问类“Y”中的抽象属性“name”
    constructor(name){
        this.name=name
    }
    // 报错 方法“hello”不能具有实现，因为它标记为抽象
    abstract hello(){
        console.log('hello')
    }
    
}

//  报错 非抽象类不能继承抽象类的属性和方法
class Z extends Y{
    constructor(name){
        super(name)
    }
}
```

**写法思路与作用**<br/>
1.抽象类中的抽象属性和方法不能有具体实现，只能简单定义。<br />
2.抽象类的作用就是为子类服务，子类可以通过继承后具体实现抽象类中的属性和方法。<br/>

**正确的写法：**<br/>
```ts
// 抽象类不能够被实例化
abstract class Y{
    abstract name:String

    // 报错 方法“hello”不能具有实现，因为它标记为抽象
    abstract hello()
    
}

class Z extends Y{
    name: String
    constructor(name){
        super()
        this.name=name;
    }
    hello() {
        console.log('hello');
    }
}
```

#### 类的类型
1.类可以被作为类型声明使用。<br />
2.类中的属性方法和被声明的类 的属性方法必须相同才能使用。
```ts
class Car{
    name:string
    constructor(name:string){
        this.name=name
    }
}
class Food{
    name:string
    price:number
    constructor(name:string,price:number){
        this.name=name
        this.price=price
    }
}
// 把类Car 作为类型传给了car
const car :Car = new Car('bmw');

// 报错 类型 "Car" 中缺少属性 "price"，但类型 "Food" 中需要该属性
const car :Food = new Car('bmw');
```

## 类与接口
### 类和接口的应用
**接口与类的结合**<br />
通过接口的形式，对类的形状进行描述和约束。<br />
```ts
// 定义一个接口
interface Sing{
    sing()
}

// 通过implements 使得类来实现之前定义的接口
// 接口与类的结合，也是通过接口来约束这个类的格式形状
class Man implements Sing{
    sing() {
        console.log('蔡徐坤');
    }

}

class Woman implements Sing{
    sing() {
        console.log('鸡你太美');
    }
}
const man = new Man();
const woman = new Woman();
man.sing();
woman.sing();
```

### 一个类与多个接口
* 当使用一个类与多个接口时候，通过逗号`，`进行分割。
```ts
// 定义一个接口
interface Sing{
    sing()
}
interface Dance{
    dance()
}
interface Rap{
    rap()
}
interface Baskerball{
    basketball()
}

class Caixukun implements Sing,Dance,Rap,Baskerball{
    sing() {
        console.log('唱');
    }
    dance() {
        console.log('跳');
    }
    rap(){
        console.log('rap')
    }
    basketball(){
        console.log('篮球')
    }

}


const cai = new Caixukun();

cai.sing();
cai.dance();
cai.rap();
cai.basketball();

// 返回
// 唱
// 跳
// rap
// 篮球
```

### 接口继承接口
使用接口继承接口的方法，就不用像上面那样，当一个类设置多个接口的时候，使用逗号分割了。<br/>
* 用一个新的接口，继承其他几个接口<br />
* 类的格式使用新的接口进行规范设置即可

```ts
interface Sing{
    sing()
}

interface Dance{
    dance()
}

// 通过声明一个新的接口来继承原先的两个接口
interface Cool extends Sing,Dance{

}

class Caixukun implements Cool{
    sing(){
        console.log('唱歌')
    }
    dance(){
        console.log('跳舞')
    }
}
```

### 接口继承类
在ts中，接口可以继承类。<br />
因为在我们声明一个类的同时，其实也声明了一个类型。
```ts
// 这里我们既声明了一个类，又可以把类当做类型使用。
class Car{
    name:string
    constructor(name:string){
        this.name=name
    }
}
// 把类Car 作为类型传给了car
const car :Car = new Car('bmw');
```
**尝试通过接口继承类**
```ts
// 定义一个普通类
class Person{
    name:string
    constructor(name:string){
        this.name=name
    }
    hello(){
        console.log('hello')
    }
}
// 通过接口去继承这个类
interface Man extends Person{
    age:number
}
// 将接口Man设置在p上面
// 发现这个Man上面存在age name 和hello方法，说明都继承上了
// 报错 类型“{}”缺少类型“Man”中的以下属性: age, name, hello
let p:Man={}
// 正确的写法 必须要包含这些内容
let people:Man={
    name:'',
    age:18,
    hello(){

    }
}
```

## 声明合并
如果定义了两个相同名字的函数、接口或类，那么他们会合并成一个类型。<br/>
### 函数的合并
参照函数重载 <br/>
允许一个函数接受不同数量或者类型的参数时，做出不同的处理。 也就是同一个函数，通过不同类型的参数，返回不同的结果。<br/>
```ts
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
### 接口的合并
当出现两个同名的接口时，会合并他们变成一个接口<br/>
```ts
interface Cat{
    name:'小猫咪',
    sex:'mail'
}

interface Cat{
    name:'小猫咪',
    age:3
}
// 以上两个接口合并成了一个接口，这里有3个属性了
const cat:Cat={
    name:'小猫咪',
    age:3,
    sex:'mail'
}
```
### 类的合并
类的合并与接口的合并一致。

## 泛型
泛型是指在定义函数、接口或类的时候，不提前指定具体类型，而是在使用的时候再执行类型的一种特性。<br />
### 简单案例
**使用场景:** 在类型不确定的时候使用。<br/>
```ts
// 定义一个函数 参数1的类型不确定，参数2的类型为数值
// 返回一个数组
// T表示可以输入任意类型，等到执行时根据参数类型再指定当前类型
function test<T>(value:T,count:number):T[]{
    const arr:T[]=[];
    for(let i = 0;i < count;i++){
        arr.push(value);
    }
    return arr;
}
// 返回 [ 123, 123, 123, 123, 123 ]
console.log(test(123,5)) 
// 返回 [ '111', '111', '111', '111', '111' ]
console.log(test('111',5))
```
#### 注意<br/>
1.泛型的这个 T 字母可以随意替换，只要在方法中保持一致即可。<br />
2.使用泛型后，就会根据传参的具体参数类型，去在方法执行的时候指定类型。这一点不同于`any`，`any`不会指定类型，只是允许所有的类型。<br />
3.注意要先用`<T>`来标明泛型，才能在后面使用。

### 多个泛型参数
* 在尖括弧里面可以定义多个泛型
* 一般用在参数中包含多个不同类型，多个参数不确定类型的情况下<br/>
```ts
// 需求背景
// 将[123,'123'] 修改成 ['123',123]
// 因为这里t是一个元组，而元组里面的元素可能都是不同类型
// 因此需要在这里定义类型时，使用多个泛型
function update<T,U>(t:[T,U]):[U,T]{
    return [t[1],t[0]]
}
console.log(update(['111',222]));
// 返回 [ 2222, '1111' ]
```

### 泛型约束
理论上来说，泛型的类型是不确定的，但是可以通过方法中使用的属性，来确定一个范围<br />
例如下面的例子中`x.length`，如果`x`为数值，是不存在`length`属性的。<br />
那么我们可以通过这一点对这里的泛型进行约束。<br />
```ts
// 方法目的：获取参数的长度
// 由于不知道参数x是什么类型，因此使用泛型
function getLength<T>(x:T):number{
    // 报错 类型“T”上不存在属性“length”。
    // 因为数字不存在属性length
    return x.length
}
```
通过**泛型约束**来指定参数的类型，必须要有`length`属性<br/>
实现如下：<br />
```ts
// 首先定义一个接口，指定必须有length属性
interface HasLength{
    length:number
}
// 然后再方法后将泛型通过刚才指定的接口进行属性的约束
// 这样方法里的x.length就不会报错了
function getLength<T extends HasLength>(x:T):number{
    return x.length
}

console.log(getLength('123'))
// 报错 类型“number”的参数不能赋给类型“HasLength”的参数
console.log(getLength(456))
```
这样就成功约束了参数必须有length的属性。<br/>
当传入 数值456 的时候，就会报错提醒，456没有length的属性。<br/>

**总结**<br/>
实际上还是通过了泛型类型继承到接口上，被接口约束。这一点还挺妙的。

### 泛型接口
使用泛型接口去约束函数<br/>
1.定义一个泛型接口。<br/>
2.在函数表达式上，使用这个泛型接口。<br/>
* 第一种写法 将泛型卸载函数上<br/>
```ts
// 定义一个泛型接口 value参数和返回的数组 类型都不确定
interface Arr{
    <T>(value:T,count:number):T[]
}

// 通过泛型接口来约束我们的函数
let getArr:Arr = <T>(value:T,count:number):T[]{
    const arr:T[]=[];
    for(let i = 0;i<count;i++){
        arr.push(value)
    }
    return arr
}
```
* 第二种写法<br/>
如果将泛型卸载接口上了，那在使用接口约束函数表达式时，需要在设置的时候，指定泛型的具体类型。
```ts
// 定义一个泛型接口 value参数和返回的数组 类型都不确定
interface Arr2<T>{
    (value:T,count:number):T[]
}

// 通过泛型接口来约束我们的函数
let getArr2:Arr2<string> = <T>(value:T,count:number):T[]{
    const arr:T[]=[];
    for(let i = 0;i<count;i++){
        arr.push(value)
    }
    return arr
}
```

### 泛型类
1.简单的说就是创建一个泛型类，这个类中的属性存在不确定性，先使用泛型表示。<br />
2.在实例化声明的时候，这时候可以具体传参了，通过具体的参数，在尖括弧里进行具体的类型的声明。

```ts
// 创建一个泛型类，假定对这个age属性的类型不确定
class Person<T>{
    name:string
    age:T
    constructor(name:string,age:T){
        this.name=name
        this.age=age
    }
}

// 类型“number”的参数不能赋给类型“string”的参数
// 因为这里在传参的时候给泛型定义成了string所以报错
// 泛型是在传参的那一刻才明白参数类型的
const p1 = new Person<string>('kolento',20)
// 正常执行
const p2 = new Person<string>('kolento','20')
const p3 = new Person<number>('kolento',20)
```

**TS的学习笔记就此完结，后续有更新再进行补充。**

















