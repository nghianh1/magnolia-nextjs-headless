import { EditableArea } from '@magnolia/react-editor';
import IHomePageByDesignProps from './HomePageByDesign.model';

const HomePageByDesign = (props: IHomePageByDesignProps) => {
  const {
    hero,
    exploreIndustry,
    extras,
    freegifts,
    leaders,
    marketplace,
    secondaryHero,
    subsidy,
    reviews,
    recognitions,
    title,
  } = props;

  return (
    <div className='HomePageByDesign'>
      <div>[Basic Page]</div>
      <h1>{title || (props.metadata?.['@name'] as string)}</h1>

      <main>
        <div className='w-full'>
          {hero && <EditableArea content={hero} />}
        </div>
        {freegifts && <EditableArea className='Area' content={freegifts} />}
        {leaders && <EditableArea className='Area' content={leaders} />}
        {secondaryHero && (
          <EditableArea className='Area' content={secondaryHero} />
        )}
        {exploreIndustry && (
          <EditableArea className='Area' content={exploreIndustry} />
        )}
        {subsidy && <EditableArea className='Area' content={subsidy} />}
        {marketplace && <EditableArea className='Area' content={marketplace} />}
        {reviews && <EditableArea className='Area' content={reviews} />}
        {recognitions && (
          <EditableArea className='Area' content={recognitions} />
        )}
      </main>

      <div>{extras && <EditableArea className='Area' content={extras} />}</div>
    </div>
  );
};

export default HomePageByDesign;
