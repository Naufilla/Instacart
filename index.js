// const questions = document.getElementsByClassName('.faq-question');

// questions.addEventListener('click', () => {
//     console.log('The div was clicked!');
// });



document.addEventListener("DOMContentLoaded", () => { 
    const faqQuestions = document.querySelectorAll(".faq-question");
    console.log(typeof faqQuestions);

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const currentItem = question.parentElement;

            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            currentItem.classList.toggle("active");
        });
    });
});
