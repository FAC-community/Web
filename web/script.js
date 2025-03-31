document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my showcase website!");

    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Change project box color on hover
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        project.addEventListener("mouseenter", () => {
            project.style.backgroundColor = "#444";
            project.style.color = "#fff";
            project.style.transition = "background-color 0.3s ease";
        });

        project.addEventListener("mouseleave", () => {
            project.style.backgroundColor = "#fff";
            project.style.color = "#000";
            project.style.transition = "background-color 0.3s ease";
        });
    });

    // Contact Form Validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                form.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
