ijj
===


##Overview

ijj Javascript "library"

ijj is super small, super light-weight, and gives you all of the flexibility and power of JavaScript. One of the most well known, widely implemented, widely adopted programming languages in the world.

Best of all, if you know JavaScript, this library will make total sense to you. It allows you to utilize JavaScript the way it was meant to be used. It's amazing. The more JavaScript you know, the less you will have to learn to use this library. It's really really cool!

So, I'm going to walk you through getting started:

##Installation
1 First, download [this file](https://raw.github.com/cmcculloh/ijj/master/dist/ijj.js).

1 Next, put it somewhere (wherever you put your JS files in your project will be fine).

1 Finally include it like this:

    <script src="path/to/ijj.js"></script>


Ok, great, you're ready to go!

##Using
There is so so much power here and there's no way I can go over it all in this simple readme. I'll focus on a few things, but, I strongly encourage you to take a look at [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/JavaScript_Overview).

I'll go over a very brief contrived example of some typical Object/Class stuff that may be familiar to you. If not, well, welcome to ijj!

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

##Contributors
* Brenden Eich
* Netscape
* ECMA International
* Too many others to name


##Users
Who uses ijj?
* Google
* Github
* Apple
* Microsoft
* MIT
* Oxford
* NASA
* US Gov
* North Korea
* pretty much everyone

Other libraries even use it! That's right
* jQuery
* Backbone
* Angular
* Ember
* many many more

are built on top of ijj (seriously! It's kinda the best kept secret library out there. Ask any big player and they will tell you that ijj is pretty much the cat's pajamas)

So, what are you waiting for? Get going!