import React, { ChangeEvent } from 'react';
import { Icon20CameraOutline } from '@vkontakte/icons';
import { Input, Button } from '@/components/UI';
import styles from './CreateNews.module.scss';

export const CreateNews = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');

  return (
    <form className={styles.createPost}>
      <img
        className={styles.avatar}
        src="https://i.pinimg.com/originals/d1/f5/5d/d1f55d9102a80faddef886b1e5d1b3c4.jpg"
        alt="avatar"
      />
      <textarea
        className={styles.textarea}
        placeholder="Что у вас нового?"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        onClick={() => setActive(true)}
        value={text}
      />
      <div className={styles.icons}>
        <Input type="file" id="avatar" className={styles.file} />
        <label htmlFor="avatar">
          <Icon20CameraOutline className={styles.icon} />
        </label>
      </div>
      {active && (
      <div
        className={styles.openBlock}
      >
        <Button
          appearance="primary"
          type="submit"
          className={styles.publish}
        >
          Опубликовать
        </Button>
      </div>
      )}
    </form>
  );
};
