import React from 'react';

import { useCoreSignUp, useEnvironment } from '../../ui/contexts';
import { withFlowCardContext } from '../elements';
import { SignUpVerificationCodeForm } from './SignUpVerificationCodeForm';

export const SignUpPhoneCodeCard = withFlowCardContext(
  () => {
    const { displayConfig } = useEnvironment();
    const signUp = useCoreSignUp();

    React.useEffect(() => {
      // TODO: This prepare method is not idempotent.
      // We need to make sure that R18 won't trigger this twice
      void prepare();
    }, []);

    const prepare = () => {
      const phoneVerificationStatus = signUp.verifications.phoneNumber.status;
      if (!signUp.status || phoneVerificationStatus === 'verified') {
        return;
      }
      return signUp.preparePhoneNumberVerification({ strategy: 'phone_code' });
    };

    const attempt = (code: string) => signUp.attemptPhoneNumberVerification({ code });

    return (
      <SignUpVerificationCodeForm
        cardTitle='Verify your phone number'
        cardSubtitle={`to continue to ${displayConfig.applicationName}`}
        formTitle='Verification code'
        formSubtitle='Enter the verification code sent to your phone number'
        prepare={prepare}
        attempt={attempt}
        safeIdentifier={signUp.phoneNumber}
      />
    );
  },
  { flow: 'signUp', page: 'phoneCode' },
);