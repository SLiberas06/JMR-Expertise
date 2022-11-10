
function sendMail(){
  var params = {
    nom : document.getElementById('lastName').value,
    prenom: document.getElementById('firstName').value,
    ville: document.getElementById('city').value,
    type: document.getElementById('houseType').value,
    tel: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    };

  const templateId = 'template_3k5rifq';

  const serviceId = 'service_k6ot063';
  emailjs.send(serviceId, templateId, params)
  .then(res => {
    document.getElementById('lastName').value = "";
    document.getElementById('firstName').value = "";
    document.getElementById('city').value = "";
    document.getElementById('houseType').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
    console.log(res);
    alert('Votre message a bien été envoyé !')
  })
  .catch(error => console.log(error));
};

const burger = document.querySelector('.burger');

const navigation = document.querySelector('.menu');

const lien = document.querySelector('a');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navigation.classList.toggle('active'); 
    lien.classList.toggle('active');
    
});
 // bouton envoyer formulaire 
  const btnSubmit = document.getElementById("submit");
  console.log(btnSubmit); 

  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const contact ={
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        city: document.getElementById("city").value,
        houseType: document.getElementById("houseType").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    };

    const regExpFirstLastName = (value) => {
        return /^[A-Za-z\é\è\ê\-]{2,40}$/.test(value);
    };

    const regExpEmail = (value) => {
        return /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,20}$/.test(value);
    };

    const regExpCity= (value) => {
        return /^[a-zA-Z0-9,-_ ']{2,50}[ ]{0,2}$/.test(value);
    };
    const regExpPhone =(value) => {
        return /^[0-9\-.\+]{9,15}$/.test(value);
    };
    //Message erreur si mauvaise saisie 
    const textAlertName = (value) => {
        return `${value}: caractères : 2 à 40 / Les chiffres et symboles ne sont pas autorisés `
    };

    const textAlertEmail = (value) => {
        return `${value}:  Veuillez saisir une adresse e-mail valide`
    };

    const textAlertCity = (value) => {
        return `${value}: Veuillez saisir une ville ou un code postal valide`
    };

    const textAlertPhone = (value) => {
        return `${value}: Veuillez saisir un numéro de téléphone valide`
    };

    //control prénom
    function firstNameControl() {
        const firstName = contact.firstName;

        if (regExpFirstLastName(firstName)) {
          firstNameErrorMsg.textContent = "Saisie valide ";
          firstNameErrorMsg.style.color = "white";
          return true;
        } else {
          firstNameErrorMsg.textContent = textAlertName("Prénom");
          firstNameErrorMsg.style.color="red";
          return false;
        }
      }

    //control nom/prénom
    function lastNameControl() {
        const lastName = contact.lastName;

        if (regExpFirstLastName(lastName)) {
          lastNameErrorMsg.textContent = "Saisie valide ";
          lastNameErrorMsg.style.color = "white";
          return true;
        } else {
          lastNameErrorMsg.textContent = textAlertName("Nom");
          lastNameErrorMsg.style.color="red";
          return false;
        }
      }

      //control ville
      function cityControl() {
        const city = contact.city;

        if (regExpCity(city)) {
          cityErrorMsg.textContent = "Saisie valide ";
          cityErrorMsg.style.color = "white";
          return true;
        } else {
          cityErrorMsg.textContent = textAlertCity("Ville");
          cityErrorMsg.style.color="red";
          return false;
        }
      }
      //control tel
      function phoneControl() {
        const phone = contact.phone;

        if (regExpPhone(phone)) {
          phoneErrorMsg.textContent = "Saisie valide ";
          phoneErrorMsg.style.color = "white";
          return true;
        } else {
          phoneErrorMsg.textContent = textAlertPhone("Telephone");
          phoneErrorMsg.style.color="red";
          return false;
        }
      }

      //control email
      function emailControl() {
        const email = contact.email;

        if (regExpEmail(email)) {
          emailErrorMsg.textContent = "Saisie valide ";
          emailErrorMsg.style.color = "white";
          return true;
        } else {
          emailErrorMsg.textContent = textAlertEmail("E-mail");
          emailErrorMsg.style.color="red";
          return false;
        }
      }
    
      if(
        firstNameControl() &&
        lastNameControl() &&
        cityControl() &&
        phoneControl() &&
        emailControl()
      ){

      }else{
        return false;
      }


  });

  