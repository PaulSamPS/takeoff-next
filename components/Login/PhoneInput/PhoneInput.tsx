import React from 'react';
import NumberFormat from 'react-number-format';
import styles from './PhoneInput.module.scss';
import { Button } from '@/components/UI';
import { useAuth } from '@/hooks';
import { CloseIcon } from '@/helpers/icons';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const PhoneInput = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);

  const {
    onSubmitPhone, stopTimer, minutes, seconds,
  } = useAuth();

  return (
    <>
      <div className={styles.form}>
        {!stopTimer && <span>{`Повторная отправка возможна через: ${`${minutes}:${seconds < 10 && typeof seconds !== 'string' ? '0' : ''}${seconds}`}`}</span>}
        <NumberFormat
          name="phone"
          format="+7 (###) ###-##-##"
          mask="_"
          placeholder="+7 (123) 456-78-90"
          value={values.formattedValue}
          onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
        />
        <label htmlFor="phone">Телефон</label>
      </div>
      <Button appearance="primary" className={styles.btn} onClick={() => onSubmitPhone(values.formattedValue)} disabled={!stopTimer}>Отправить код</Button>
    </>
  );
};
