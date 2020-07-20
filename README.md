# module_js
Insert multiple libraries into a single javascript file

### Usage
Import the library into a `script` tag before finalizing the `</body>`.
```html
<script src="module_js/module_js.js">
```

Then initialize the `_mjs` function.

This function receives two parameters.

```javascript
_mjs(path, callback)
```
parameters | description
-----------|------------
path        | Enter the url of the library (this can be a cdn or a local library)
-----------|------------
callback    | The function call that runs after the library is loaded.

### Example
This is an example of importing the jQuery library for your use.

> Javascript : We create a `main.js` file.
```javascript
_mjs('//code.jquery.com/jquery-3.5.1.min.js', () => {
    $('#hi').text('hello World');
});
```
> HTML : We create a `index.html` file.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module JS</title>
</head>
<body>
    <h1 id="hi"></h1>
    <script src="./module_js/module_js.js"></script>
    <script src="./main.js"></script>
</body>
</html>
```
