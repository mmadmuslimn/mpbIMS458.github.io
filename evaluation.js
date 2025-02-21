
  (function() {
    emailjs.init("n3UG2JqG8dDrSeR3B"); 
  })();

  const feedbackForm = document.getElementById('feedbackForm');
  const statusMessage = document.getElementById('statusMessage');

  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();


    statusMessage.style.display = 'none';

    emailjs.send("service_1za3mum", "template_l8xdpcl", {

      from_name: feedbackForm.user_name.value,
      user_email: feedbackForm.user_email.value,
      user_rating: feedbackForm.user_rating.value,
      message: feedbackForm.user_comments.value
    })
    .then(function(response) {
      statusMessage.innerText = "Thank you! Your feedback was sent successfully.";
      statusMessage.className = "success";
      statusMessage.style.color = "green";
      statusMessage.style.display = 'block';


      feedbackForm.reset();
    }, function(error) {
      statusMessage.innerText = "Oops! Something went wrong. Please try again later.";
      statusMessage.className = "error";
      statusMessage.style.color = "red";
      statusMessage.style.display = 'block';
    });
  });

