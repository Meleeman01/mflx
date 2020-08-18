# mflx version 1.1.2

##A Basic, no-frills flexbox framework for building layouts!
<img src="https://github.com/Meleeman01/mflx/blob/master/test.html%23.png" alt="framework test" title="a test of the framework :D" />

##Usage

basically this is a barebones wrapper for flexbox and makes it more conveniant to style items and create grid layouts
```
<div class="flx(wrap,column) top left"> 
	<div></div>
</div>
```
as you can see, flx() takes a maximum of 2 arguments exactly as shown. options are wrap, nowrap, and column, but more complex positioning can be applied if you have children that also have class flx() as shown below.
```
<div class="flx(wrap) middle v-space-around">
	<div class="flx(wrap)">
		<div class="item1">listItem</div>
	</div>
</div>
```
if your children are flx() containers, you can use v-space-around, v-space-between,v-bottom,v-baseline, v-top, v-middle, v-stretch, which does what thier non-v counterparts do vertically.

also you can do columns! syntax uses "is" like in bulma, and you can say anywhere from is-1 to is-12.
```
<div class="flx(wrap) center f-space-around is-12">
	<div class="flx(wrap) is-6">
		<div class="item1">listItem</div>
	</div>
	<div class="flx(wrap) is-6">
		<div class="item1">listItem</div>
	</div>
</div>
```
offsets are not included yet and they work with the class flx() and without. you can create invisible divs to create the desired offset for the time being.

##Buttons there are buttons similar to bulma syntax
```
<div class="flx(wrap) middle space-around is-6">
		<button class="btn(small) is-info">A button</button>
		<button class="btn() is-error">Button</button>
		<input class="btn(large) is-white" type="submit" name="nothing">
		<button class="btn(xlarge) is-black is-round">A button</button>
</div>
```
availible classes are is-primary, is-white, is-black, is-secondary, is-warning, is-info, is-error, is-success, is-round. primary, secondary, black and white are availible as accessible classes for your conveniance. so far the behavior is consistent accross button, submit and anchor tags.

##Typography basic styles are being used, but the scss stylesheet layouts some recommendations for designing a framework, the styles used here are just default fonts every browser has, there are a maximum of 3 fonts which you can add many as you like ofcourse but 3 is generally recommended when designing. It is recommended you include a seperate fonts.scss when building or you can use the @font-face() rule in the top of this style sheet if you prefer.
