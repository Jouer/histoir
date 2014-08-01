$(document).ready(function() {

			// This example adds a duration to the tweens so they are synced to the scroll position
			$('#content-wrapper').css('display','block');
			var controller = $.superscrollorama();
			
			
				// set duration, in pixels scrolled, for pinned element
				var pinDur = 10;
				// create animation timeline for pinned element
				var pinAnimations = new TimelineLite();
				pinAnimations
					.append([
						TweenMax.to($('#premier-nav'), 1, {css:{ top: '0', position:'fixed'}, immediateRender:true, ease:Quad.easeInOut} )
					], .5)

					



				// pin element, use onPin and onUnpin to adjust the height of the element
				controller.pin($('#first-pin'), pinDur, {
					anim:pinAnimations, 
					
					onUnpin: function() {
						$('#first-pin').css('position','relative');
					}
				});


controller.pin($('#examples-eng2-zero'), 600, {
					anim: (new TimelineLite())
						.append(
			TweenMax.from($('#examples-eng2-zero #fly-it-one img'), 1,  {css:{right:'1000px', rotation:15 }, ease:Quad.easeInOut})
						)
						.append([
			TweenMax.to($('#examples-eng2-zero #fly-it-two img'), 1,  {css:{rotation:15, marginTop:'-20%'}, ease:Quad.easeInOut})
						], .5)
	
						.append([
			TweenMax.from($('#examples-eng2-zero #fly-it-tree img'), 1, {css:{left:'1000px', rotation: -15}, ease:Quad.easeOut})
						], .5)
						
						.append(
			TweenMax.to($('#examples-eng2-zero '), 1, {css:{backgroundColor:'#df2223'}})
						)
					})



			controller.pin($('#examples-eng2-one'), 0, {
					anim: (new TimelineLite())
						.append( TweenMax.from($('#examples-eng2-one h2'), .25, {css:{color : '#df2223'}})
						),
						
					onUnpin: function() {
						$('#slade-one').css('height','800px');
						}	
					});



			controller.pin($('#examples-eng2-two'), 0, {
					anim: (new TimelineLite())
						.append( TweenMax.from($('#examples-eng2-two h2'), .25, {css:{color : '#f3c000'}})
						),
						
					onUnpin: function() {
						$('#slade-two').css('height','800px');
						}	
					})

			controller.pin($('#examples-eng2-tree'), 1000, {
					anim: (new TimelineLite())
						
						.append(
			TweenMax.to($('#examples-eng2-tree #spin-it-one img'), .25, {css:{opacity:1, rotation: 15}, ease:Quad.easeOut})
						)
						.append(
			TweenMax.to($('#examples-eng2-tree #spin-it-two img'), .25, {css:{opacity:1, rotation: -15}, ease:Quad.easeOut})
						)
						.append(
			TweenMax.to($('#examples-eng2-tree'), .25, {css:{backgroundColor:'#0097d0'}})
						)
					})

		

			controller.pin($('#examples-eng2-four'), 800, {
					anim: (new TimelineLite())
						.append(
			TweenMax.to($('#examples-eng2-four'), .25, {css:{backgroundColor:'#009752'}})
						)
						.append(
						TweenMax.fromTo( $(' #flyleft-eng img'), .25, {css:{ marginLeft: '-10000px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{ marginLeft:'0px'}, ease:Quad.easeInOut})						
						)
						.append([
							TweenMax.from($('#examples-eng2-four #move-one img'), 1, {css:{right:'1000px', rotation: 15}, ease:Quad.easeOut})
						], .5)
						
					})

			controller.pin($('#examples-eng2-five'), 0, {
					anim: (new TimelineLite())
						.append(
			TweenMax.to($('#examples-eng2-five'), .25, {css:{backgroundColor:'#f3c000'}})
						),
						
					onUnpin: function() {
						$('#slade-five').css('height','600px');
						}
					})

			controller.pin($('#examples-eng2-six'), 0, {
					anim: (new TimelineLite())
						.append(
			TweenMax.to($('#examples-eng2-six'), .25, {css:{backgroundColor:'yellow'}})
						)
					})

			controller.pin($('#examples-eng2-seven'), 800, {
					anim: (new TimelineLite())
						.append(
			TweenMax.from($('#examples-eng2-seven #fly-one img'), 1,  {css:{left:'-1000px', rotation:15}, ease:Quad.easeInOut})
						)
						.append(
			TweenMax.to($('#examples-eng2-seven'), .25, {css:{backgroundColor:'#f3c000'}})
						)
						
					})
			controller.pin($('#examples-eng2-eight'), 800, {
					anim: (new TimelineLite())
						.append(
			TweenMax.from($('#examples-eng2-eight #fly-one img'), 1,  {css:{left:'1000px', rotation:15}, ease:Quad.easeInOut})
						)
						.append(
			TweenMax.to($('#examples-eng2-eight'), .25, {css:{backgroundColor:'#df2223'}})
						)
					})

			





			// showcase tweens
				controller.addTween('#showcase h1', TweenMax.from( $('#showcase h1'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
				controller.addTween('#showcase p', TweenMax.from( $('#showcase p'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
				$('#showcase .gallery figure').css('position','relative').each(function() {
					controller.addTween('#showcase .gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
				});

				// hire tweens
				$('#hire h3').lettering().find('span').css('position','relative').each(function() {
					controller.addTween('#hire h3', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);
				});
				controller.addTween('#hire p', TweenMax.from( $('#hire p'), .5, {css:{opacity:0}}));
			


		});



