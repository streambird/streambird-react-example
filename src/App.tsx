import { Streambird } from "@streambird/streambird-react";
import { ErrorData, SuccessData, WalletType } from '@streambird/streambird-js';

const App = () => {
  const streambirdConfig = {
    emailMagicLink: {
      loginRedirectUrl: 'LOGIN_REDIRECT_URL_FROM_PORTAL_GOES_HERE',
      registrationRedirectUrl: 'REGISTRATION_REDIRECT_URL_FROM_PORTAL_GOES_HERE',
      loginExpiresIn: 5,
      registrationExpireIn: 5,
      requiresVerification: false,
      autoVerify: true
    },
    wallet: {
      walletType: WalletType.Ethereum
    },
    componentStyle: {
      width: 500,
      showHeaderText: true,
      headerText: 'Welcome to passbird',
      headerTextColor: '',
      bodyText: 'Please enter your email address and sign up with a magic link to start using decentralized applications.',
      bodyTextColor: '#333333',
      buttonTextColor: '#FFFFFF',
      buttonColor: '',
      errMsgColor: ''
    }
  }

  const handleCallbacks = {
    onSuccess: (message: SuccessData) => {
      console.log(message)
    },
    onError: (message: ErrorData) => {
      console.log(message)
    }
  }

  return (
    <div id="login">
      <Streambird
        publicToken={"YOUR_API_KEY_FROM_PORTAL_GOES_HERE"}
        config={streambirdConfig}
        callbacks={handleCallbacks}
      />
    </div>
  );
};

export default App;
