
  const form = document.getElementById('form-control');
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const email = document.getElementById('e-mail');
  const passWord = document.getElementById('pass-code');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    // vrednosti iz inputa
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value;
    const passValue = passWord.value;
  

  if (firstnameValue === "") {
    // prikazi error poruku
    // dodaj error klasu
    setErrorFor(firstName, 'First Name cannot be empty')
    } else {
    // dodaj succ klasu
      setSuccessFor(firstName);
     //return;
      }

      if (lastnameValue === "") {
        setErrorFor(lastName, 'Last Name cannot be empty')
        } else {
          setSuccessFor(lastName);
         // return;
          }

          if (!validateEmail(emailValue)) {
            setErrorFor(email, 'Looks like this is not an email')

            } else {
              setSuccessFor(email);
     
           //  return;
              }

              if (passValue === "") {
                setErrorFor(passWord, 'Password cannot be empty')
                } else {
                  setSuccessFor(passWord);
                //  return;
                  }

  }

  function setErrorFor(input, message) {
    const formTable = input.parentElement; // .form-table
    const small = formTable.querySelector('small');

    // add error poruku unutar "small"
    small.innerText = message;

    // dodaj error klasu
    formTable.className = 'form-table error'
  } 

  function setSuccessFor(input) {
    const formTable = input.parentElement;
    formTable.className = 'form-table succes';
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }

