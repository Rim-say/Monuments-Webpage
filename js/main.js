

const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link=> {
    if(link.getAttribute("href")===currentPage){
        link.classList.add("active");
    }
});

const form= document.getElementById("feedbackForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const name=document.getElementById("name").value.trim();
        const email= document.getElementById("email").value.trim();
        const message=document.getElementById("message").value.trim();

        let errors=[];
        if(name===""){
            errors.push("Name is required.");
        }
        if(!validateEmail(email)){
            errors.push("Please enter a valid email.");
        }
        if(message.length<10){
            errors.push("Message must be at least 10 characters.");
        }
        if(errors.length>0){
            alert(errors.join("\n"));
        }else{
            const feedback={
                name: name,
                email: email,
                message:message,
                date: new Date().toLocaleString()
            };
            localStorage.setItem("feedback", JSON.stringify(feedback));
            alert("Thank you for your feedback!");

            form.reset();
        }   
    });
}

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}