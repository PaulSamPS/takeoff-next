import React from 'react';

export interface IStepContext {
  step: number;
  nextStep: () => void;
  setStep: (step: number) => void;
  setUserId: (id: string) => void;
  setPhone: (phone: string) => void;
  userId: string
  phone: string
}

export const StepContext = React.createContext<IStepContext>({} as IStepContext);
