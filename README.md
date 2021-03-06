# wd-tools-utils

一个常用的工具库

## validate

### 说明

校验类

### 方法

validate.IdCard(arg)
validate.Mobile(arg)

### 用法

```javascript
import { validate } from "wd-tools-utils";

validate.IdCard('110221222255555566') // 返回 true
validate.Mobile('15999931234') // 返回 true
```

## formatDateTime（时间戳转时间）

### 说明

时间戳转时间

### 参数

filterTime(timestamp,format)

### 支持的格式

YY-MM-DD HH:MM:SS
YY-MM-DD HH:MM
YY-MM-DD
YY-MM
YY/MM/DD HH:MM:SS
YY/MM/DD HH:MM
YY/MM/DD
YY/MM

### 用法

```javascript
import { formatDateTime } from "wd-tools-utils";

formatDateTime(1589279121,'YY-MM-DD HH:MM:SS')
```

## storage（本地存储）

### 说明

由于项目中常需用到本地storage存储，复杂的数组、对象等，每次都需要JSON.stringify()和JSON.parse()进行序列化、反序列化操作，再者，存入storage的数值，取出来就变成字符串了，因此，对storage简单封装，使取出的值类型和存入时保持一致，也可以存入整个object对象。

1、存储单个值

```javascript
storage.set('name', 'esther');
```

2、获取单个值

```javascript
storage.get('name');
```

3、删除单个值

```javascript
storage.remove('name');
```

4、清空全部

```javascript
storage.clear();
```

5、存储对象，key - value形式

```javascript
storage.setList({
  a: '1',
  b: '2.1',
  c: ['a', 'b', 'c'],
  d: {
    'd-1': 'd-1',
    'd-2': 'd-2'
  },
  e: true,
  f: new Date(),
  g: function(){
    console.log(111);
  }
});
```

6、获取多个值，传入数组形式的key

```javascript
storage.getList(['a', 'b', 'd', 'f']);
```

7、删除多个值，传入数组形式的key

```javascript
storage.removeList(['a', 'b', 'd', 'f'])
```

8、sessionStorage, api同上

```javascript
storage.session.set('name', 'esther');
```

### 用法

```javascript
import { storage } from "wd-tools-utils";
storage.set('ceshi',
  {
  a: 123,
  b: [1, 2, 4],
  c: {
    asd: 666,
  },
});
console.log(storage.get('ceshi'));
```

*默认localStorage, 使用sessionStorage的话，请使用storage.session

## calculate

### 说明

四则运算方法——解决日常运算的精度丢失问题

### 方法

```javascript
/**
 * 加法函数解决精度丢失问题
 * @param { number } arg1
 * @param { number } arg2
 */

calculate.add(arg1, arg2)
```

```javascript
/**
 * 减法函数解决精度丢失问题
 * @param { number } arg1
 * @param { number } arg2
 */

calculate.subtraction(arg1, arg2)
```

```javascript
/**
 * 乘法函数解决精度丢失问题
 * @param { number } num1
 * @param { number } num2
 */

calculate.multiplication(arg1, arg2)
```

```javascript
/**
 * 除法函数解决精度丢失问题
 * @param { number } arg1
 * @param { number } arg2
 */
calculate.division(arg1, arg2)
```

### 用法

```javascript
import { calculate } from "wd-tools-utils";

calculate.add(0.1, 0.3) // 返回 true
validate.Mobile('133659988714') // 返回 true
```
