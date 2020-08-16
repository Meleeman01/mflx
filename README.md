# flx version 1.0.0

##A Basic, no-frills flexbox framework for building layouts!

##Usage

basically this is a barebones wrapper for flexbox and makes it more conveniant to style items and create grid layouts, so you can declare flx() or flx-container() if you intend to have flx() children you intend to position

> 
	<div class="flx(wrap,column) top left"> 
		<div></div>
	</div>
>

as you can see, flx() takes a maximum of 2 arguments exactly as shown. options are wrap, nowrap, and column.
the same arguments apply for flx-container(), but more complex positioning can be applied if you have children 
that also have class flx() or if you're hopping mad flx-container() as shown below.
> 
	<div class="flx-container(wrap) middle f-space-around">
		<div class="flx(wrap)">
			<div class="item1">listItem</div>
		</div>
	</div>
>

It is highly recommended that you only use flx-container() for positioning flx() children, doing the latter would lead to a confusing mess of a layout.
there is no reverse included as it is expected the designer will place the items in order.

also you can do columns! syntax uses "is" like in bulma, and you can say anywhere from is-1 to is-12. 
> 
	<div class="flx-container(wrap) center f-space-around is-12">
		<div class="flx(wrap) is-6">
			<div class="item1">listItem</div>
		</div>
		<div class="flx(wrap) is-6">
			<div class="item1">listItem</div>
		</div>
	</div>
>

offsets are not included yet and they work with the class flx() and without. you can create invisible divs to create the desired offset for the time being.