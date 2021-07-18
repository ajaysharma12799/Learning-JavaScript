## JavaScript

Feature :-
1. Event Based Language
2. Client Side Scripting Language

Note :- Everything in JS is an Object.

> Some Question Related to DOM and Some Extra Topics.

```
Q. Type Conversion vs Type Coercion.
ans. Type Coersion is Automatic or Implicit Type Casting but Type Casting is Explicit Type Casting.
```

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
Q. Difference between Rest and Spread Operator.
ans. Rest Operator is Used When we need to Pass any Number of Argument into Function, While Spread Operator is Used When we need to Pass an Array to Function that Require List Functionality.
```

```
Q. Difference between getElementById and getElementsByClassName.
ans. getElementById => Return Single DOM Element but getElementsByClassName return HTMLCollection which Contain Multiple DOM Elements and You Can Access Using Index Just Like Array.
```

```
Q. Difference between parentElement and parentNode.
ans. parentElement return Null if No Parent Found but parentNode Needs to Return Something.
```

```
Q. Difference between children and childNodes.
ans. children return HTMLCollection Containing All Children of Target Element but chlidNodes return NodeList which Contain Each and Every Node including TextNode, Comment etc.
```

```
Q. Difference between firstChild and firstElementChild.
ans. firstChild return Single Node which is Present in childNodes List but firstElementChild Will Return Actual DOM Element Which is present in Your Written HTML Code.
```

```
Q. Difference between lastChild and lastElementChild.
ans. Work Simillar to firstChild and firstElementChild but Return Last Element and Last Node
```

```
Q. Difference between nextSibling and previousSibling.
ans. Return nextSibling and previousSibling according to childNode List, Use childNode on Particular Element and Check nextSibling and previousSibling on that Element and Match it according to returned childNode List.
```

```
Q. Difference between createElement and createTextNode.
ans. createElement Make new HTML Element but createTextNode Make new TextNode Which Contain Data.
```

```
Q. Difference netween insertBefore and appendChild.
ans. appendChild Will always append you data at end and is use to append textNode to elementNode or and elementNode to an existing elementNode but insertBefore will insert you elementNode before your target elementNode.
```

```
Q. Difference netween insertAdjacentElement, insertAdjacendHTML and insertAdjacentText.
ans. insertAdjacentElement is used to Insert DOM Element into DOM-Tree and it has 4 Position to Insert into it,
insertAdjacentText is used to Insert TextNode into DOM-Tree and it also has 4 Position to Insert into it,
insertAdjacendHTML is used to Insert Complete DOM-Element ( Contain DOM-Element and TextNode ) into DOM-Tree and it also has 4 Position, Important Point is that We Don't Need insertAdjacentElement and insertAdjacentText Method One Single Method Can do Both Work
```

```
Q. Difference netween replaceChild and removeChild.
ans. replaceChild is used to replace an oldChild with newChild only thing to keep in mind is that we need to know which parent but removeChild is used to remove an child and we need to keep in mind that who is parent.
```

```
Q. What is cloneNode.
ans. cloneNode is used to Clone a Node and it take boolean parameter true means deepCopy(copy with all data) and false means shallowCopy(copy without any data), we can append that ClonedNode into Any Other DOM Element.
```

```
Q. What is contains Method.
ans. Return True if Element is Present in it, It Can be Child, GrandChild, GreatGrandChild.
```

```
Q. What is hasAttribute Method.
ans. Return True if Attribute are Present in an Element.
```

```
Q. What is hasChildNodes Method.
ans. Return True is any Element has any Child Node Present in It, Child Node can be TextNode or any Other Node.
```
