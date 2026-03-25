import React, { FC } from 'react';
import IExploreIndustriesProps from './ExploreIndustries.model';
import { EditableArea } from '@magnolia/react-editor';

export const ExploreIndustries: FC<IExploreIndustriesProps> = ({
  industries,
}) => {
  return (
    <section className='mt-8 container mx-auto'>
      <EditableArea content={industries} className={'grid grid-cols-5 gap-4'} />
    </section>
  );
};
