import Email from "./Email";
import Passphrase from "./Passphrase";
import ConfirmPassphrase from "./ConfirmPassphrase";
import Nationality from "./Nationality";
import Register from "./Register";

function SignupPage() {
  return (
    <div>
      <Email/>
      <Passphrase/>
      <ConfirmPassphrase/>
      <Nationality/>
      <Register/>
    </div>
  )
}

export default SignupPage
