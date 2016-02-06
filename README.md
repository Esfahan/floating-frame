# floating-frame
It generates floating iframe on the web page.  
It can read another page as dialog(floating iframe) on main page.

## Usage
You need to make 2 files for main page and dialog page.  

#### dialog page  
Make dialog html page as you like.  
For example,
```
<html>
<head><title>dialog</title></head>
<body>
<h2>dialog</h2>
</body>
</html>
```

#### main page  
Set element name to function.  
```
<script type="text/javascript">
$(function() {
    floating_frame.action(".floating_frame");
});
</script>
```
  
Make anchor link and set url of dialog page to `data-href` and set same element name as function's one.  
```
<a href="javascript:void(0);" class="floating_frame" data-href="dialog.html">click here!!</a>
```
  
Click this anchor link, then dialog page appears as floating iframe on main page.


## Examples
- see [examples](https://github.com/Esfahan/floating-frame/tree/master/examples)

## License
- see [LICENSE file](https://github.com/Esfahan/floating-frame/blob/master/LICENSE)

