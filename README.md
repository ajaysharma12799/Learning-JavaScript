## JavaScript

> Some Question Related to DOM and Some Extra Topics.

```
Q. Are Object Copy by Reference or Copy by Value.
ans. Object are Copy by Reference, Primitive Type are Copy by Value.
```

```
Q. Garbage Collection.
ans. JavaScript has Automatic Garbage Collection
```

```
Q. Function Decleration vs Function Expression.
ans. Function Decleration is Creating Normal Function, but Function Expression is Creating a Function and Storing it into a Variable.
function show() {} // Function Decleration
let show = function() {} // FUnction Expression
```

```
Q. Difference between async and defer.
ans. Using normal script tag means first HTML Parsing them when encounter script HTML Parsing stop then script is downloaded from network and executed after successfull ececution of script then again HTML Parsing is Continued.

ans. Using async means first HTML Parsing and parallely downloading script from network and then pause HTML Parsing and executing script and after completely executing script again start HTML Parsing.

ans. Using defer means first HTML Parsing and parallely downloading script from network and continues to do HTML Parsing and when HTML Parsing is Completed then Executing script which was downloaded parallely.

Difference between async and defer is that async does not promise order of executing script but defer promise order of ececuting script.
```