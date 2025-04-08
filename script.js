let sb = document.querySelector('.btn-red-sm');

sb.addEventListener('click', function () {
    window.location.href = "index1.html";
});

let ab = document.querySelector('.btn-red-sm');

sb.addEventListener('click', function () {
    window.location.href = "index1.html";
});


let gs = document.querySelector('.btn-red');
let emailInput = document.querySelector('input[type="text"]');

gs.addEventListener('click', function () {
    let email = emailInput.value;
    
    
    if (email.includes('@') && email.includes('.')) {
        window.location.href = "index6.html";
    } else {
        alert('Please enter a valid email.');
    }
});




let faqBoxes = document.querySelectorAll('.faqbox');

faqBoxes.forEach(function (box) {
    box.addEventListener('click', function () {
        let question = box.querySelector('span').textContent;
        let answer = '';

        
        if (question === 'What is Netflix?') {
            answer = 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.';

        } else if (question === 'How much does Netflix cost?') {
            answer = 'Plans range from ₹149 to ₹799 a month. No extra costs, no contracts.';
        } else if (question === 'What can I watch on Netflix?') {
            answer = 'You can watch a wide variety of shows, movies, documentaries, and more. Netflix adds new content every week.';
        } else if (question === 'Where can I watch?') {
            answer = 'You can watch Netflix on smart TVs, gaming consoles, set-top boxes, streaming media players, smartphones, and tablets.';
        }

        
        let answerElem = box.querySelector('.faq-answer');
        if (answerElem) {
            
            answerElem.style.display = (answerElem.style.display === 'block') ? 'none' : 'block';
        } else {
            
            answerElem = document.createElement('p');
            answerElem.classList.add('faq-answer');
            answerElem.textContent = answer;
            box.appendChild(answerElem);
        }
    });
});
