document.addEventListener("DOMContentLoaded", () => {

    const faqQuestions = document.querySelectorAll(".faq-question");


    console.log(faqQuestions)
    faqQuestions.forEach((question) => {

        question.addEventListener("click", () => {

            const currentItem = question.closest(".faq-item");

            if (!currentItem) return;

            currentItem.classList.toggle("active");

            const currentIcon = currentItem.querySelector(".faq-icon");

            if (currentIcon) {
                currentIcon.textContent =
                    currentItem.classList.contains("active")
                        ? "−"
                        : "+";
            }

        });

    }); 
});