import { useState } from 'react';

const Register = ({receivedCountry, receivedEmail, receivedPassphrase, receivedConfirmPassphrase}) => {

    const countries = ["Finnish", "English", "German", "French"]
    const greetings = ["Moi", "Hello", "Hallo", "Bonjour"]

    const [text, setText] = useState("")

    const update = () => {
        if (receivedEmail){
            if (receivedPassphrase !== "") {
                if (receivedPassphrase == receivedConfirmPassphrase) {
                    if (receivedCountry) {
                        setText(greetings[countries.indexOf(receivedCountry)] + "! Your email address is " + receivedEmail)
                    } else {
                        setText("Nationality undefined")
                    }
                } else {
                    setText("Passwords don't match")
                }
            } else {
                setText("Password blank")
            }
        } else {
            setText("No email provided")
        }
    }

  return (
    <div>
      <button className="signup" onClick={update}>Sign Up!</button>
      <br/><br/>
      <p>{text}</p>
    </div>
  );
};

export default Register;
