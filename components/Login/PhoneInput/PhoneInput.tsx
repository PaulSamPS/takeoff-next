import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import styles from './PhoneInput.module.scss';
import { Button } from '@/components/UI';
import { StepContext } from '@/context';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const PhoneInput = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { setUserId, nextStep, setPhone } = useContext(StepContext);

  const onSubmitPhone = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/auth/send-code', { phone: values.formattedValue });
      setIsLoading(true);
      setUserId(res.data);
      setPhone(values.formattedValue);
      nextStep();
    } catch (e) {
      console.warn('Ошибка при звонке', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.form}>
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
      <Button appearance="primary" className={styles.btn} onClick={onSubmitPhone}>Отправить код</Button>
    </>
  );
};
