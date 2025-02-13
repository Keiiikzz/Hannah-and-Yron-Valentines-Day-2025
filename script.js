function showMessage() {
    alert("SURPRISE!!!!!! You're the best thing that ever happened to me! I am always proud of you!! I love you so much babyy pookie💕 click the 'click for another surprise button' for more (˶  >   ₃  < ˶)♡ ");
}
document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("h1");
    const subMessage = document.querySelector("p");
    const button1 = document.querySelector(".btn");
    const button2 = document.querySelector(".btn2");
    const image = document.querySelector(".valentine-img");

    // Initial styles
    [message, subMessage, button1, button2].forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
    });

    // Animations
    setTimeout(() => {
        message.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        subMessage.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        subMessage.style.opacity = "1";
        subMessage.style.transform = "translateY(0)";
    }, 1500);

    setTimeout(() => {
        button1.style.transition = "opacity 1.5s ease-in-out";
        button1.style.opacity = "1";
        button1.style.transform = "none"; // Prevents JavaScript from overriding hover transform
    }, 2500);

    setTimeout(() => {
        button2.style.transition = "opacity 1.5s ease-in-out";
        button2.style.opacity = "1";
        button2.style.transform = "none"; // Prevents JavaScript from overriding hover transform
    }, 3500);

    setTimeout(() => {
        image.classList.add("show");
    }, 1000); // Delay of 1 second for effect
});

