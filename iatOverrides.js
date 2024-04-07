define(['pipAPI', 'https://samfenwick.github.io/test-iat-delete-me/iat.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		isTouch: navigator.maxTouchPoints > 0 ? true : false,
		category1 : {
			name : 'Fat people', //Will appear in the data.
			title : {
				media : {word : 'Fat people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'fatman1.jpg'}, 
    			{image : 'fatman3.jpg'}, 
    			{image : 'fatman4.jpg'}, 
    			{image : 'fatman5.jpg'}, 
    			{image : 'fatman6.jpg'}, 
    			{image : 'fatwoman1.jpg'}, 
    			{image : 'fatwoman2.jpg'}, 
    			{image : 'fatwoman3.jpg'}, 
    			{image : 'fatwoman4.jpg'}, 
    			{image : 'fatwoman6.jpg'}, 
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category2 :	{
			name : 'Thin people', //Will appear in the data.
			title : {
				media : {word : 'Thin people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
     		    {image : 'thinman1.jpg'}, 
    			{image : 'thinman2.jpg'}, 
    			{image : 'thinman3.jpg'}, 
    			{image : 'thinman5.jpg'}, 
    			{image : 'thinman6.jpg'}, 
    			{image : 'thinwoman1.jpg'}, 
    			{image : 'thinwoman2.jpg'}, 
    			{image : 'thinwoman3.jpg'}, 
    			{image : 'thinwoman5.jpg'}, 
				{ image: 'thinwoman6.jpg' },
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
			{
				name : 'Bad words',
				title : {
					media : {word : 'Bad words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Pain'},
					{word: 'Humiliate'},
					{word: 'Horrific'},
					{word: 'Hate'},
					{word: 'Bothersome'},
					{word: 'Detest'},
					{word: 'Rotten'},
					{word: 'Poison'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Good words',
				title : {
					media : {word : 'Good words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Cheerful'},
					{word: 'Fantastic'},
					{word: 'Spectacular'},
					{word: 'Friendship'},
					{word: 'Laughing'},
					{word: 'Cheer'},
					{word: 'Pleasing'},
					{word: 'Love'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		base_url : {//Where are your images at?
			image : 'https://samfenwick.github.io/test-iat-delete-me/images/'
		} 
	});
});
