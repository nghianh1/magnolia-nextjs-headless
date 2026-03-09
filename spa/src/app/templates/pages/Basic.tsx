import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { EditableArea } from '@magnolia/react-editor';
import Footer from '../fragments/Footer';

const Basic = ({
  title,
  main,
  footer,
}: {
  title?: string;
  main: MgnlContent;
  footer: MgnlContent;
}) => {


  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh-5rem)]'>
       <header>
        <h1 className="font-bold text-base uppercase px-9">My Custom Header</h1>
      </header>
      {title &&
        <header className="hidden ">
          <h1 className="sr-only" >{title}</h1>
        </header>
      }

      <main>{main && <EditableArea  content={main} elementType='section'/>}</main>

      {footer && (
        <EditableArea
          className={'bg-dark-teal text-white px-8'}
          content={footer}
          customView={Footer}
        />
      )}
    </div>
  );
};

export default Basic;
