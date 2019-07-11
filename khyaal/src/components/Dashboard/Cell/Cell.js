import React from 'react';
import List from './List/List';
import * as assert from '../../../shared/assert'

const cell = (props) => {
    let filteredData = null;

    filteredData = props.data.filter((record) => { // for each data record
        let found = false;
        for(let filter of props.attributes.filters) {
            let recordKeys = Object.keys(record);
            for(let recordKey of recordKeys)
             { // for each key of single data record
                    if(recordKey === filter.keyColumn) {
                        found = assert.all(record,filter,recordKey);
                    }               
            }

            if(found===false) {
                break;
            }
        }
        return found;
    });

    
        switch (props.type) {
            case 'list':
                return <List data={filteredData} attributes={props.attributes}/>;
            default :
                return null;
    
        }


};

export default cell;