import React from 'react';
import { EditableArea } from '@magnolia/react-editor';
import IFreeGiftsProps from './FreeGifts.model';

const FreeGifts: React.FC<IFreeGiftsProps> = (props) => {
  return (
    <section className='py-16'>
        <EditableArea content={props.freeGifts} className={'grid grid-cols-3 gap-4'}/>
    </section>
  );
};

export default FreeGifts;
