import React, { ChangeEvent, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './CodeInput.module.scss';
import { Button } from '@/components/UI';
import { StepContext } from '@/context';

export const CodeInput = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    userId, setStep, phone, setUserId,
  } = useContext(StepContext);
  const router = useRouter();

  const onSubmit = async (code: string) => {
    try {
      setIsLoading(true);
      const res = await axios.post('http://localhost:4000/api/auth/enter-code', { code, userId });
      console.log(res.data);
      await router.push('/news');
    } catch (e) {
      console.log(e);
      setCodes(['', '', '', '']);
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = async () => {
    const res = await axios.post('http://localhost:4000/api/auth/send-code', { phone });
    setIsLoading(true);
    setUserId(res.data);
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const { value } = event.target;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    } else {
      await onSubmit([...codes, value].join(''));
    }
  };
  return (
    <div className={styles.codeInput}>
      <div className={styles.enterCode}>
        {codes.map((code, index) => (
          <input
            key={index}
            type="tel"
            placeholder=""
            maxLength={1}
            id={String(index)}
            onChange={handleChangeInput}
            value={code}
          />
        ))}
      </div>
      <div className={styles.options}>
        <p onClick={resendCode}>Получить новый код</p>
        <p onClick={() => setStep(0)}>Ввести другой телефон</p>
      </div>
    </div>
  );
};
