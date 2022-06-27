Two methods of code dropdown from a section shown: 
1. Using selectors inside the element
2. Traversing the DOM, doesn't have the closing functionality when different article's button is clicked

1. Using selectors inside the element, the question class of each article is assigned inside a variable questions, and looped through. Instead of using query selector in the button variable, the value of the running loop is assigned to each btn. This makes sure that all the buttons in all the articles aren't accessed, only the button of the each article is being selected. 
As the button is clicked the show-text is added to the question class, which had been previously hidden in the CSS file, in order to display the text underneath the question. 
A nested loop is run to check for the button pressed. It checks if the article containing the button clicked matches the article which has show-list added. If not, then show-text is removed from the classList of that item. 

2. Traversing the DOM, doesn't have the closing functionality when different article's button is clicked. All buttons in the each article question is assigned in the variable btns. For is run through all the buttons. Using the event listener, the parent element of the button that has been clicked is identified. The tile is accessed then the article containing the question class is accessed. show-text is then added to the article's classList. 

