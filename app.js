// using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    // shows the class of each article that has the class question
    // console.log(question)

    // instead of using document here, question is used to querySelector
    // this makes sure that all the buttons in all the articles aren't accessed
    // only the button of the each article is being selected
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function () {
        // clicking different button will close other show-text contents
        questions.forEach(function (item) {
            // shows which question has show-text added
            console.log(item)

            // checks if the article containing the button clicked matches the article which has show-list added
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");

    })
});

/*
// traversing the DOM, doesn't have the closing functionality when different article's button is clicked

// all buttons in the each article question selected
const btns = document.querySelectorAll(".question-btn");

// selecting the buttons, traversing the DOM and looking for the parent element
btns.forEach(btn => {
    btn.addEventListener("click", event => {
        // shows the class of the button clicked
        console.log(event.currentTarget)

        // shows the parent element
        console.log(event.currentTarget.parentElement.parentElement)

        // accessing the tile then accessing the article containing the question
        const question = event.currentTarget.parentElement.parentElement;

        // question-text and minus-icon classes has display set to none in CSS
        // clicking the plus-icon adds show-text class to the question
        // the CSS sets the display of plus-icon to none and displays the minus-icon
        question.classList.toggle("show-text");
    });
});
*/

