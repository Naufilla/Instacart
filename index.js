document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");

    function openSidebar() {
        sidebar.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);

    const faqQuestions = document.querySelectorAll(".faq-question");

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