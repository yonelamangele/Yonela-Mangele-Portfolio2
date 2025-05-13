<template>
    <div class="contact-section container">
      <section class="contact-content">
        
        <div class="info-header text-center">
            <h2 class="main-title mt-4 mb-4"> Reach Out To Me </h2>
          <p class="intro-text">
            Below are my contact details and where I live. You can also send me a message to contact me using the form I provided.
          </p>
        </div>
        
        <div class="contact-row">
          <div class="contact-details">
              <h2 class="gang"> My Contact Details </h2>
            <div class="contact-box" id="space2">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="details" id="space">
                <h3> Location </h3>
                <p> Mandela Park - Khayelitsha - Cape Town </p>
              </div>
            </div>
  
            <div class="contact-box">
              <div class="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="details">
                <h3> Phone Number </h3>
                <p> 068 425 5886 </p>
              </div>
            </div>
            <div class="contact-box">
              <div class="icon">
                <a class="email-link"  href="mailto:yonelamangele1700@gmail.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
              <div class="details">
                <h3> Email Address </h3>
                <p> yonelamangele1700@gmail.com </p>
              </div>
            </div>
          </div>

          <div class="form-container">
            <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST" @submit.prevent="handleSubmit">
              <h2 class="form-title">  Contact Me  </h2>
              <div class="form-group">
                <input type="text" name="firstName" placeholder="First Name" required>
              </div>
              <div class="form-group">
                <input type="text" name="lastName" placeholder="Last Name" required>
              </div>
              <div class="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required>
              </div>
              <div class="form-group">
                <input type="email" name="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <textarea name="message" placeholder="Your Message" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="submit-button">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.contact-section {
    color: #9EC8B9;
}

.main-title {
      animation: zoom-in-out 4s
  }

@keyframes zoom-in-out {
    0% {
        transform: scale(1);
    }
    
    50% {
        transform: scale(1.5);
    }
    
    100% {
        transform: scale(1);
    }
}
  
  .info-header {
    padding: 20px;
  }
  
  .intro-text {
    font-size: 1.25rem;
  }
  
  .contact-details {
    background-color: #092635;
    padding: 20px;
    border-radius: 8px;
    width: 48%;
    justify-items: center;
  }

  .gang {
    text-align: center;
  }

  p {
    font-family: 'Courier New', Courier, monospace;
  }

  #space, p {
    margin: 10px;
  }

  .contact-row {
    display: flex;
    justify-content: center;
  }

  .contact-row > * {
    margin: 0 5px;
  }
  
  .contact-box {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  
  .icon {
    font-size: 30px;
    margin-right: 15px;
    /* color: #b23c5a; */
  }
  
  .address-link, .email-link, .social-link {
    color: white;
  }
  
  .form-container {
    background: #9EC8B9;
    padding: 20px;
    border-radius: 8px;
}

.form-title {
    font-size: 2rem;
    color: #092635;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #092635;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .contact-form textarea {
    resize: vertical;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #092635; 
    color: #9EC8B9;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #9EC8B9;
    color: #383838;
    border: solid 2px #092635;
  }
</style>