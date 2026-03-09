import React from 'react';
import { EditableArea } from '@magnolia/react-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

interface ILandingPage {
  metadata?: Record<string, unknown>;
  hero?: MgnlContent;
  main?: MgnlContent;
  title?: string;
  footer?: MgnlContent;
}

const LandingPage = (props: ILandingPage) => {
  const { hero, main, title, footer } = props;
  return (
    <div className='LandingPage flex flex-col gap-4'>
      <div>[Basic Page]</div>
      <h1>{title || (props.metadata?.['@name'] as string)}</h1>

      <div className='hero w-full'>
        {hero && <EditableArea content={hero} />}
      </div>

      <div className='main w-full mx-auto '>
        {main && <EditableArea content={main} />}
      </div>

      <div>{footer && <EditableArea content={footer} />}</div>
    </div>
  );
};

export default LandingPage;
