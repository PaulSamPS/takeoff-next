import React, { ChangeEvent, useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import styles from './CodeInput.module.scss';
import { StepContext } from '@/context';
import { useAuth } from '@/hooks';

export const CodeInput = () => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [err, setErr] = React.useState<string | null>(null);
  const {
    userId, setStep, phone,
  } = useContext(StepContext);
  const {
    onSubmitPhone, stopTimer, minutes, seconds,
  } = useAuth();
  const router = useRouter();

  const onSubmit = async (code: string) => {
    setIsLoading(true);
    await axios.post('http://localhost:4000/api/auth/enter-code', { code, userId }).then((res) => {
      console.log(res.data);
      router.push('/news');
    }).catch((e: AxiosError<{ message: string }>) => {
      setErr(e.response?.data.message!);
      setCodes(['', '', '', '']);
    });
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const { value } = event.target;
    setErr(null);
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
      {err && <span className={styles.err}>{err}</span>}
      <div className={styles.enterCode}>
        {codes.map((code, index) => (
          <input
            key={index}
            type="text"
            placeholder=""
            maxLength={1}
            id={String(index)}
            onChange={handleChangeInput}
            value={code}
          />
        ))}
      </div>
      <div className={styles.options}>
        {!stopTimer ? <span>{`Повторная отправка возможна через: ${`${minutes}:${seconds < 10 && typeof seconds !== 'string' ? '0' : ''}${seconds}`}`}</span>
          : <p onClick={() => onSubmitPhone(phone)}>Получить новый код</p>}
        <p onClick={() => setStep(0)}>Ввести другой телефон</p>
      </div>
    </div>
  );
};
