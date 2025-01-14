let faqs = document.querySelectorAll(".faq");
let answers = document.querySelectorAll(".answer");
let icons = document.querySelectorAll(".faqIcon");

let faqArr = [];
for(let i=0; i<faqs.length; i++) {
    faqArr.push(faqs[i]);
}

for(faq of faqs) {
    faq.addEventListener("click", function() {
        let idx = faqArr.indexOf(this);
        let ele = answers[idx];

        if(ele.style.display == "") {
            ele.style.display = "flex";  
            icons[idx].classList.add("rotate");
        } else {
            ele.style.display = "";  
            icons[idx].classList.remove("rotate");
        }
    });
}