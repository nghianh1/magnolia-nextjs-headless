import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { EditableArea, EditableComponent } from '@magnolia/react-editor';
import React from 'react';

interface ListItem {
  '@id': string;
  field?: string;
}

interface Items {
  '@nodes'?: string[];
  [key: string]: ListItem | string[] | undefined;
}

interface Props {
  title?: string;
  items?: any;
}

const TourList: React.FC<Props> = ({ title, items }) => {
  if (!items || typeof items !== 'object' || !items['@nodes']) {
    return null;
  }

  // const itemKeys = items["@nodes"];
  // const itemList = itemKeys
  //   .map((key: string) => items[key] as ListItem)
  //   .filter((item) => item && item.field);

  // console.log('items :>> ', items);

  return (
    <div className='p-2'>
      {title && <h2 className='font-bold mb-2'>{title}</h2>}

      <ul className='space-y-2'>
        {/* {itemList.map((item) => (
          <li key={item["@id"]} className="p-1 mb-1 border-b">
            {item.field}
          </li>
        ))} */}
        <EditableArea content={items} className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '}/>
      </ul>
    </div>
  );
};

export default TourList;
