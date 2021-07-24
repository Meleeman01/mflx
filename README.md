# mflx version 1.1.8

<h1>A Basic, highly customizeable, no-frills micro flexbox framework for building layouts!</h1>
<h2>npm install mflx --save</h2>
<img src="https://github.com/Meleeman01/mflx/blob/master/test.html%23.png" alt="framework test" title="a test of the framework :D" />

<h2>Recent Changes:</h2>

-removed v- prefixed commands like v-space-around.
-updated node-sass dependency.


<h2>Usage</h2>

basically this is a barebones wrapper for flexbox and makes it more conveniant to style items and create grid layouts
```
<div class="flx(wrap,column) top left"> 
	<div></div>
</div>
```
as you can see, flx() takes a maximum of 2 arguments exactly as shown. options are wrap, nowrap, and column, but more complex positioning can be applied if you have children that also have class flx() as shown below.
```
<div class="flx(wrap) middle space-around">
	<div class="flx(wrap)">
		<div class="item1">listItem</div>
	</div>
</div>
```
flx() can also be written as flx.

also you can do columns! syntax uses "is" like in bulma, and you can say anywhere from is-1 to is-12 like in bulma you can also say is-full, is-quarter, is-three-quarters, is-third, is-two-thirds. is-fluid is basically setting the min-width of your container to 0, which allows you to have text wrap. use this when you don't need a specific container size but need text and other things to wrap.
```
<div class="flx(wrap) center space-around is-12">
	<div class="flx(wrap) is-6">
		<div class="item1">listItem</div>
	</div>
	<div class="flx(wrap) is-half">
		<div class="item1">listItem</div>
	</div>
</div>
```

flx(column), or any other syntax that contains column has a weird behavior when you apply the .left class for alignment. the up down directions are now inverted. to avoid confusion, simply prefix with col- (i.e. col-top). note that space-around, space-between, and space-evenly now work in the y direction and they also have prefixes which are there to help you differentiate your positions flx(column) containers from your other flx containers. if you need to space items around in the x-direction, use flx or any other flx container without column in the syntax.

offsets are not included yet and they work with the class flx() and without. you can create invisible divs to create the desired offset for the time being.

<h2>Buttons</h2> there are buttons similar to bulma syntax btn takes one size argument, or no arguments and can be
written as shown

```
<div class="flx(wrap) middle space-around is-6">
		<button class="btn(small) is-info">A button</button>
		<button class="btn is-error">Button</button>
		<button class="btn(normal) is-warning"></button>
		<input class="btn(large) is-white" type="submit" name="nothing">
		<button class="btn(xlarge) is-black is-round">A button</button>
</div>
```

btn, btn(), and btn(normal) are synonyms for the same normal size.
availible classes are is-primary, is-white, is-black, is-secondary, is-warning, is-info, is-error, is-success, is-round. primary, secondary, black and white are availible as accessible classes for your conveniance. so far the behavior is consistent accross button, submit and anchor tags.
<h2>Links</h2>
you can use .link class to apply link styles to a nav bar. colors are also customizeable.

<h2>Typography</h2> basic styles are being used, but the scss stylesheet layouts some recommendations for designing a framework, the styles used here are just default fonts every browser has, there are a maximum of 3 fonts which you can add many as you like ofcourse but 3 is generally recommended when designing. It is recommended you include a seperate fonts.scss when building or you can use the @font-face() rule in the top of this style sheet if you prefer.
words and letters wrap by default, so this can reduce the usage of media queries for text. may add clamp() if browser support becomes more availible for it.


<h2>Utilities</h2> 
there isn't much but i put in a new class called padme as well as marginme which have their own css variable setting, it will create a default padding and default margins for your flx() containers and you can customize each dimension with 4 numbers. inputs also use the primary color on focus. but thats about it.

<h2>Potential pitfalls and how to solve them</h2>
<h3>paragraphs</h3> can break your flex containers. the solution is to give your paragraph elements a defined with using rem or em, otherwise
paragraphs will fill width of the container. a complimentary library of components will be added to mflx in the future to make this 
process easier.
<h3>mobile styles</h3>
occaisionally it is possible to break your html page using mflx, i've found the best way is to leave html and body tags alone if you can and that they are displaying as block elements, and use a section tag to break apart your site into sections, or use it as a wrapper.

