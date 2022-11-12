import axios, { AxiosError } from 'axios';
import React, { useContext } from 'react';
import moment from 'moment/moment';
import { StepContext } from '@/context';

export const useAuth = () => {
  const [error, setError] = React.useState<string>('');
  const [minutes, setMinutes] = React.useState<number | string>('');
  const [seconds, setSeconds] = React.useState<number | string>('');
  const [stopTimer, setStopTimer] = React.useState<boolean>(true);

  const { ...props } = useContext(StepContext);

  React.useEffect(() => {
    setStopTimer(true);
  }, []);

  const onSubmitPhone = async (value: string) => {
    // const res = await axios.post('http://localhost:4000/api/auth/updated-at', { phone: value });
    // await localStorage.setItem('code', res.data);
    await axios.post('http://localhost:4000/api/auth/send-code', { phone: value }, { withCredentials: true }).then((res) => {
      props.setUserId(res.data.userId);
      localStorage.setItem('code', res.data.date);
      props.setPhone(value);
      if (props.step === 0) {
        props.nextStep();
      }
    }).catch((e: AxiosError<{ message: string }>) => {
      setError(e.response?.data.message!);
      setStopTimer(false);
    });
  };

  React.useEffect(() => {
    if (localStorage.getItem('code')) {
      const millis = Math.abs(Number(moment(localStorage.getItem('code')).add('2', 'minutes').toDate()) - Date.now());
      const interval = setInterval(() => {
        if (moment(localStorage.getItem('code')).add('2', 'minutes').format('h:mm:ss') >= moment(Date.now()).format('h:mm:ss')) {
          setMinutes(Math.floor(millis / 60000));
          setSeconds(Number(((millis % 60000) / 1000).toFixed(0)));
        } else {
          setStopTimer(true);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds]);

  return {
    error, minutes, seconds, onSubmitPhone, stopTimer,
  };
};
