# Javascript

## Day-1

-> JS is a programming language

-> It is a high level language [High level means-> It is more easily understandable by humans]

-> It is a scripting language [Scripting language means -> It can manipulate something which is already written content]

-> It is dynamically typed [There is no need to mention the type of the variables before hand]

**To be able to run JS outside of the browser** -> Install nodejs

**To run js file:**

```
$ node index.js
```

## Day-2

->DOM: Document Object Model => Anything that you write in html is an object which forms a tree like structure. JS can manupulative the tree like structure

-> This DOM is created by the browser

chrome extension:[html tree generator]

**Functions that can access the element on the page**

1. document.getElementById("")

2. document.getElementsByClassName("")

3. document.getElementsByTagName("")

**Functions that Modify the element**

1. .innerText

2. .innerHTML

   ```
   var element=document.getElementById("<id_name>")
   element.innerHTML="new text"
   ```

**Creating new elemnts using JS**

```
var ele= document.createELement("<element_name>")
// after this step the element is created now we need to put it in the page to show to the world
```

**Adding the newly created element in your page**

```
document.body.append(ele)
// after this step the element is appended to the body
```

**Events**

Lets write a function which will change the text written o the page on clicking

- addEventListener(arg1,arg2)

arg1-> name on the event that you want to fireup
arg2->name of the function [Note: we are not calling the function, we are justing wrting the name of the function]

Task: build counter application which will have a increment button and a decrement button
