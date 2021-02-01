import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, index) => index < 4)
            //need to limit to 'four previews'
            //also need to remember, that these anonymous functions get 
            //called EVERYTIME this COllectionPrewview Component is 
            //called or rendered => hence performance considerations
            .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
              //  <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default CollectionPreview;