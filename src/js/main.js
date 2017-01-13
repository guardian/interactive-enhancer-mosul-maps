function gvinit(){

	var selector = '.content__article-body h2, .article__body h2';


	// Create a new style tag
	var style = window.parent.document.createElement("style");

	// Append the style tag to head
	window.parent.document.head.appendChild(style);

	// Grab the stylesheet object
	var sheet = style.sheet;

	// Use addRule or insertRule to inject styles
	sheet.addRule( `.gv-last-h2:before`,`content: 'Latest update'; font-weight: bold; font-size: 14px; color: #00456e; border-top: 1px solid #eaeaea; margin-top: 10px; width: 100%; display: block; font-family: "Guardian Text Sans Web","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;`);




	var h2tags = window.parent.document.querySelectorAll(selector);
	var lasth2 = h2tags[h2tags.length -1 ];
	lasth2.classList.add('gv-last-h2');




	document.querySelector('.gv-btn').addEventListener('click', function(){
		lasth2.scrollIntoView(true);
	})




}

gvinit();