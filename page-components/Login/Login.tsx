import React, {
  DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement, useMemo,
} from 'react';

import styles from './Login.module.scss';
import { CodeInput, PhoneInput } from '@/components/Login';
import { Logo } from '@/components/UI/Logo/Logo';
import { StepContext } from '@/context';

type StepsComponentsType = {
  [key: number]: FunctionComponent
};

const stepsComponents: StepsComponentsType = {
  0: PhoneInput, 1: CodeInput,
};

export function Login(): JSX.Element {
  const [step, setStep] = React.useState<number>(0);
  const [userId, setUserId] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const Step = stepsComponents[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const contextValue = React.useMemo(() => ({
    step, nextStep, setStep, setUserId, userId, setPhone, phone,
  }), [userId]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <Logo className={styles.logo} />
        <div className={styles.text}>Вход</div>
        <StepContext.Provider value={contextValue}>
          <Step />
        </StepContext.Provider>
      </div>
    </div>
  );
}
