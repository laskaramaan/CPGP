# Live lecture

### Ways to write css

1. inline css
2. internal css
3. external css

### Why there are these different ways to write css

The inline css is the simplest way but it is least prefered way.
And the best way is to write a separate css file

### Priority:

Inside the code whatever comes at the last gets executed

### Selectors:

Selectors are nothing but different ways that helps you to select any particular element of html and then apply styles on that

# Video resource (https://www.youtube.com/watch?v=1PnVor36_40&feature=youtu.be)

## Important Points:

### Syntax

```
selector {
    property1: value;
    property2: value;
}

e.g.

h1{
    color: black;
}
```

### Selectors

1. Element selctor -> Any html element can be used as a selector such as h1, div,span etc

2. Class selector -> class selectors let's you to select html elements based on their class attributes

```
.class-name {
    property: value;
}
```

3. ID selector -> It similar to class selector but the difference is only one ID(unique)

```
#id {
    property: value;
}
```

4. "\*" -> It is used for selecting the whole html page

```
*{
    font-family:Arial;
}
```

### How to load css

1. Inline

```
<h1 style="color: blue">
    Blue title
</h1>
```

2. Internal

```
<head>
    <style>
        .blue{
            color:blue;
        }
    </style>
</head>

<body>
</body>

```

3. External

We can use a separate css file and link it to the html file with the help of link element

```
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
</body>

```
