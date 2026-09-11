import Email from "./Email";
import Passphrase from "./Passphrase";
import ConfirmPassphrase from "./ConfirmPassphrase";
import Nationality from "./Nationality";
import Register from "./Register";

import "./SignupPage.css"
import { useState } from 'react';

function SignupPage() {

  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [passphrase, setPassphrase] = useState('')
  const [confirmpassphrase, setConfirmPassphrase] = useState('')

  return (
    <div>
      <Email onInputChange={setEmail} inputValue={email}/>
      <Passphrase onInputChange={setPassphrase} inputValue={passphrase}/>
      <ConfirmPassphrase onInputChange={setConfirmPassphrase} inputValue={confirmpassphrase}/>
      <Nationality onInputChange={setCountry} inputValue={country}/>
      <Register receivedCountry={country} receivedPassphrase={passphrase} receivedConfirmPassphrase={confirmpassphrase} receivedEmail={email}/>
    </div>
  )
}

export default SignupPage
