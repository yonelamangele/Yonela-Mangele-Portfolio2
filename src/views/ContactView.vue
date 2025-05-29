<template>
  <div id="container">
    <div class="contact-section container">
      <section class="contact-content">
        <div class="heading">
          <h1> Get In Touch With Me </h1>
        </div>
        <div class="container" v-for="detail in contacts" :key="detail.email">
        <div class="container1">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic"> Address </div>
                <div class="text-one"> {{ detail.location1 }} </div>
                <div class="text-two"> {{ detail.location2 }}  </div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic"> Phone </div>
                <div class="text-one"> {{ detail.cellnumber1 }} </div>
                <div class="text-two"> {{ detail.cellnumber2 }} </div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic"> Email </div>
                <div class="text-one"> {{ detail.email }} </div>
              </div>
            </div> 
            
            <div class="right-side">
              <div class="topic-text"> Send me a message </div>
              <p> {{ detail.text }} </p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name">
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email">
                </div>
                <div class="input-box message-box">
                  <textarea></textarea>
                </div>
                <div class="button">
                  <input type="button" value="Send Now">
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  },
  mounted() {
    this.$store.dispatch('getContacts');
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  width: 45cqi;
  box-shadow: 0 4px 6px #092635;
  margin: auto;
  background-color: #092635;
  border-radius: 8px;
  color: #9EC8B9;
  box-shadow: 0 2px 9px #9EC8B9;
}

#container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  place-content: center;
  text-align: center;
  place-content: center;
  margin: 3em 0 3em;
}

.container {
  margin-top: 60px;
  place-items: center;
}

.contact-section {
  justify-items: center;
}

section {
  place-items: center;

}

.container1 {
  width: 80%;
  background-color: #5C8374;
  color: #000000;
  border-radius: 10px;
  padding: 20px 30px 20px;
  box-shadow: 0 4px 6px #092635
}

.container1 .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container1 .content .left-side {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}

.container1 .content .left-side .details {
  margin-bottom: 30px;
}

.content .left-side::before {
  content: '';
  position: absolute;
  height: 75%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000000;
}

.content .left-side .details {
  margin: 14px;
  text-align: center;
}

.container1 .content .right-side {
  width: 75%;
  margin-left: 75px;
}

.content .left-side .details i {
  font-size: 25px;
  color: #000000;
  margin-bottom: 10px;
}

.content .left-side .details .topic {
  font-size: 18px;
  font-weight: bold;
}

.text-one {
  font-size: small;
  font-family: 'Courier New', Courier, monospace;
}
.text-two {
  font-size: small;
  font-family: 'Courier New', Courier, monospace;
}
p {
  font-family: 'Courier New', Courier, monospace;
}

.topic-text {
  font-size: 23px;
  font-weight: bold;
}

.right-side .input-box {
  height: 50px;
  width: 100%;
  margin: 12px 0;
}

.right-side .input-box input,
.right-side .input-box textarea {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background-color: #F0F1F8;
  border-radius: 8px;
  padding: 0 15px;
}

.right-side .message-box {
  min-height: 110px;
}

.right-side .button {
  margin-top: 12px;
  display: inline-block;
}

.right-side .button input[type="button"] {
  background-color: #092635;
  color: #9EC8B9;
  border: 1px solid #9ec8b9;
  font-size: 0.9rem;
  outline: none;
  padding: 0.4rem 0.8rem;
  margin: 0.3rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.right-side .button input[type="button"]:hover {
  background-color: #9EC8B9;
  color: #092635;
  border: 1px solid #092635;
}

@media screen and (max-width: 1199px) {
  .container1 {
    margin: 40px 0;
    height: 100%;
  }
  
  .container1 .content {
    flex-direction: column-reverse;
  }

  .container1 .content .left-side {
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 10cqi;
  }

  .content .left-side .details i {
    font-size: 43px;
  }

  .content .left-side .details .topic {
    font-size: 24px;
  }

  .content .left-side .details {
    margin: 0 30px;
  }

  .container1 .content .left-side::before {
    display: none;
  }
  .container1 .content .right-side {
    width: 100%;
    margin-left: 0;
  }
}

@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 420px) { 
  .container {
    width: 100%;
    overflow: hidden;
  }
}










/* .contact-section {
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
    color: #b23c5a;
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
  } */


</style>





















<!-- <div class="info-header text-center">
          <h2 class="main-title mt-4 mb-4"> Reach Out To Me </h2>
          <p class="intro-text"> Below are my contact details and where I live. Feel free to send me a message to contact me. </p>
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
        </div> -->