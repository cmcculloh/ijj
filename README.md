ijj
===

ijj Javascript "library"

First, download [this file]().

Then, put it somewhere (wherever you put your JS files in your project will be fine).

Then include it like this:

    <script src="path/to/ijj.js"></script>


Ok, great, we're ready to move on.


When you create a new Class you can use ijj to do it just like this:

    var MyClass = {};


Simple as that!

Want methods and properties? [No problem](http://jsbin.com/eRIMoju/1/edit?js,console)!

	var MyClass = function(){
		var priv = "this is a private property";

		var privMethod = function privMethod() {
			//private method code here
		};

		return {
			method: function method(){
				//method code here
			},
			property: 'your property here'
		};
	};

So simple!

Want to use your private methods or access your private properties? [Look here](http://jsbin.com/OdUDuVi/1/edit?js,console):

	var MyClass = function(){
		var priv = "this is a private property value";

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
			property: 'your property here'
		};
	};

Now if you want an instance of your class:

	var myInstance = new MyClass();


Need some instantiation values? [No worries](http://jsbin.com/aJIPige/1/edit?js,console)!

	var MyClass = function(inst){
		return {
			method: function method(){
				//method code here
			},
			property: inst
		};
	};

	var myInstance = new MyClass('hotness');


So powerful! This is just the surface. Take a look at [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/JavaScript_Overview) to see just how amazing ijj is. You can do literally anything any JS library has ever done ever with ijj and a little knowhow. The sky is the limit.



Who uses ijj? Google, Github, Apple, Microsoft, MIT, Oxford, NASA, US Gov, North Korea, pretty much everyone. Other libraries even use it! That's right, jQuery, Backbone, Angular, Ember and many many more are built on top of ijj (seriously! It's kinda the best kept secret library out there. Ask any big player and they will tell you that ijj is pretty much the cat's pajamas)

So, what are you waiting for? Get going!