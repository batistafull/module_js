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
