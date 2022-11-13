import React from 'react';
import { withLayout } from '../hoc';
import { CreateNews } from '@/components/News';

const News = () => (
  <div>
    <CreateNews />
  </div>
);

export default withLayout(News);
