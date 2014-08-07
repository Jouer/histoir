$(document).ready(function() {

			// This example adds a duration to the tweens so they are synced to the scroll position
			$('#content-wrapper').css('display','block');
			var controller = $.superscrollorama();
			
			
				// set duration, in pixels scrolled, for pinned element
				var pinDur = 5;
				// create animation timeline for pinned element
				var pinAnimations = new TimelineLite();
				pinAnimations
					.append([
						TweenMax.to($('#premier-nav'), 1, {css:{ top: '0', position:'fixed'}, immediateRender:true, ease:Quad.easeInOut} )
					], .5)

				// pin element, use onPin and onUnpin to adjust the height of the element
				controller.pin($('#nav-pin'), pinDur, {
					anim:pinAnimations, 
					
					onUnpin: function() {
						$('#nav-pin').css('position','relative');
					}
				});


controller.addTween('#examples-eng2-zero', TweenMax.to( $('#examples-eng2-zero'), .5, {css:{backgroundColor:'#df2223'}}));
controller.addTween('#fly-it-two img', TweenMax.to( $('#fly-it-two img'), .5, {css:{rotation:15, marginTop:'-20%' , opacity: '1'}, ease:Quad.easeInOut}));

controller.addTween('#fly-it-one img', TweenMax.fromTo( $('#fly-it-one img'), .5, {css:{left:'-1000px', rotation:-15, marginTop:'10%' , opacity: '1'}, ease:Quad.easeInOut}, {css:{left:'5%', rotation:15}, ease:Quad.easeInOut}));


controller.addTween('#fly-it-tree img', TweenMax.fromTo( $('#fly-it-tree img'), .5, {css:{right:'1000px',  opacity: '1'}, ease:Quad.easeInOut}, {css:{left:'5%', rotation:-15}, ease:Quad.easeInOut}));



			
controller.addTween('#examples-eng2-tree', TweenMax.to( $('#examples-eng2-tree'), .5, {css:{backgroundColor:'#0097d0'}}));
controller.addTween('#spin-it-one img', TweenMax.to( $('#spin-it-one img'), .5, {css:{ rotation: 15, opacity: '1'}, ease:Quad.easeOut}));
controller.addTween('#spin-it-two img', TweenMax.to( $('#spin-it-two img'), .5, {css:{ rotation: -10, opacity: '1'}, ease:Quad.easeOut}));


			
controller.addTween('#examples-eng2-four', TweenMax.to( $('#examples-eng2-four'), .5, {css:{backgroundColor:'#009752'}}));
controller.addTween( '#move-one img', TweenMax.to( $( '#move-one img'), .5, {css:{rotation: -5, opacity:'1'}, ease:Quad.easeOut}));
controller.addTween( '#move-two img', TweenMax.from( $( '#move-two img'), .5, {css:{right:'10%', rotation: 15}, ease:Quad.easeOut}));


controller.addTween('#examples-eng2-seven', TweenMax.to( $('#examples-eng2-seven'), .5, {css:{backgroundColor:'#f3c000'}}));		
controller.addTween('#fly-one img', TweenMax.fromTo( $('#fly-one img'), .5, {css:{left:'-1000px', rotation:-15}, ease:Quad.easeInOut}, {css:{left:'10%', rotation:15}, ease:Quad.easeInOut}));


controller.addTween('#examples-eng2-eight', TweenMax.to( $('#examples-eng2-eight'), .5, {css:{backgroundColor:'#df2223'}}));		
controller.addTween('#fly-two img', TweenMax.fromTo( $('#fly-two img'), .5, {css:{left:'1000px', rotation:15}, ease:Quad.easeInOut}, {css:{left:'10%', rotation:-15}, ease:Quad.easeInOut}));
// hire tweens
$('#hire h3').lettering().find('span').css('position','relative').each(function() {
controller.addTween('#hire h3', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);
controller.addTween('#hire h3', TweenMax.to( $(this), .25, {css:{opacity:1}, ease:Expo.easeOut}),200);

	});
controller.addTween('#hire p', TweenMax.fromTo( $('#hire p'), .5, {css:{opacity:0}}, {css:{opacity:1}}));
	

	// showcase tweens
	controller.addTween('#showcase h3', TweenMax.fromTo( $('#showcase h3'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}, {css:{letterSpacing:1,opacity:1}, ease:Quad.easeOut}));
	controller.addTween('#showcase p', TweenMax.fromTo( $('#showcase p'), 1, {css:{opacity:0}, ease:Quad.easeOut}, {css:{opacity:1}, ease:Quad.easeOut}));
	$('#showcase .gallery figure').css('position','relative').each(function() {
	controller.addTween('#showcase .gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
	controller.addTween('#showcase .gallery', TweenMax.to( $(this), 1, {css:{opacity:1}, ease:Back.easeOut}));
					
				});


								

		});




