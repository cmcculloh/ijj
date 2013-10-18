/*
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
ijj (its just javascript) JS library

First, download [this file]().

Then, put it somewhere (wherever you put your JS files in your project will be fine).

Then include it like this:

<script src="path/to/ijj.js"></script>


Ok, great, we're ready to move on.


When you create a new Class you can use ijj to do it just like this:

var MyClass = {};


Simple as that!

Want methods and properties? No problem!

<a class="jsbin-embed" href="http://jsbin.com/eRIMoju/1/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

So simple!

Want to use your private methods or access your private properties? Look here:

<a class="jsbin-embed" href="http://jsbin.com/OdUDuVi/1/embed?js,console,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>


Now if you want an instance of your class:

var myInstance = new MyClass();


Need some instantiation values? No worries!

<a class="jsbin-embed" href="http://jsbin.com/aJIPige/1/embed?js,console">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>


So powerful! This is just the surface. Take a look at [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/JavaScript_Overview) to see just how amazing ijj is. You can do literally anything any JS library has ever done ever with ijj and a little knowhow. The sky is the limit.



Who uses ijj? Google, Github, Apple, Microsoft, MIT, Oxford, NASA, US Gov, North Korea, pretty much everyone. Other libraries even use it! That's right, jQuery, Backbone, Angular, Ember and many many more are built on top of ijj (seriously! It's kinda the best kept secret library out there. Ask any big player and they will tell you that ijj is pretty much the cat's pajamas)

So, what are you waiting for? Get going!
*/

(function(undefined){
var MyClass = function(a){
	var priv = "this is not a library";

	var privMethod = function privMethod() {
		//private method code here
	};

	return {
		method: function method(){
			//method code here
		},
		property: 'ijj - its just javascript',
      b:a
	};
};

var MyClass2 = function(inst){
	var priv = "this is not a framework";

	var privMethod = function privMethod() {
		var stuff;

		//private method code here. Do stuff to stuff

		return stuff;
	};

	return {
		meth: function meth(){
			var privResult = privMethod();
			var exposedPriv = priv;
			//method code here
            return exposedPriv;
		},
		property: "Its just javascript!",
      instprop: inst
	};
};

var myInstance = new MyClass();
  var myInstance2 = new MyClass2();

return null;//don't return anything, this isn't a real library
})();
