# TypeScript进阶
## 类型别名
作用：类型别名可以用来给类型取一个新的名字。<br/>
常用于联合类型。
#### 使用type关键字取别名
```
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

#### 字符串字面量类型
用来约束取值只能是某几个字符串中的其中一个。
```
// 张三 李四 王五 
// 让这个names的值只能为这几个值的其中一个
type stringType ="张三"|'李四'|'王五';
// 报错 type stringType ="张三"|'李四'|'王五';
let names:stringType = '1';
```

## 元祖 Tuple
ts中数组合并了相同类型的对象，而元祖可以合并不同类型的对象。可以在里面添加不同类型的对象。<br/>
**注意：** 元祖声明里面的值时候，必须与[]中声明的类型顺序对应。
```
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
```
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

#### 常数项和计算所得项
枚举项有2中类型，一种是 **常数项**，一种是**计算所得项**。<br/>
上面提到的 `enum week`则为常数项<br />
以下为计算所得项，即通过计算所得出的项<br/>
**注意：计算所得项后不能存放为手动赋值的枚举项** <br/>
因为它会因为没有获得初始值而报错，因为前一项是计算所得项，值还在计算，无法根据前一个值来计算得到当前的值。
```
enum a{
    red,
    blue='blue'.length,
    yellow
}
// 这里yellow 会报错，因为计算所得项后不能存放为手动赋值的枚举项
```

#### 常数枚举
常数枚举是通过`const enum`定义的枚举类型。<br />
**常数枚举与普通枚举的区别**<br />
1.常数枚举会在编译阶段被删除<br />
2.常数枚举不包含计算所得项<br />
```
const enum obj{
    one,two,three
}
console.log('obj', obj) //报错 obj已经没删除找不到了
console.log('obj', obj.one) // 0
``` 

#### 外部枚举
外部枚举是使用`declare enum`定义的枚举类型。<br/>
`declare`定义的类型会在编译的时候检查，编译结果中会被删除，这一点和常数枚举一样。<br/>
外部枚举常作用于 声明文件 中。
```
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
**同时使用外部枚举和常数枚举**
```
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

## 类




