
export const date = (filterValue,recordValue,relation) => {
    //  console.log(filterValue);
    //  console.log(recordValue);
    let dateRecord = new Date(Date.parse(recordValue));
    let dateFrom = new Date();
    let dateTo = new Date();
    dateFrom.setDate(dateFrom.getDate() - filterValue[0]);
    dateTo.setDate(dateTo.getDate() + filterValue[1]);
    
    return (dateFrom <= dateRecord && dateRecord <= dateTo);
}

export const anniversary = (filterValue,recordValue,relation) => {
    
    let date1 = new Date(Date.parse(recordValue));
    let date2 = new Date();
    let date3 = new Date(date2.getFullYear(),date1.getMonth(),date1.getDate());
    date2.setDate(date2.getDate() + parseInt(filterValue[0]));
    return date2 > date3;
}    

export const like = (filterValue,recordValue,relation) => {

    return recordValue.toLowerCase().includes(filterValue[0].toLowerCase());

}

export const strcmp = (filterValue,recordValue,relation) => {

    return recordValue.toLowerCase() === filterValue[0].toLowerCase();

}

export const OR = (filterValue,recordValue,relation) => {

    return filterValue.includes(recordValue); 
}

export const number = (filterValue,recordValue,relation) => {

    switch(relation) {
        case ">":
            return recordValue > filterValue[0];
        case ">=":
            return recordValue >= filterValue[0];
        case "=":
            return recordValue === filterValue[0];
        case "<":
            return recordValue < filterValue[0];
        case "<=":
            return recordValue <= filterValue[0];                                                    
        default : 
    }
}


export const all = (record,filter,recordKey) => {
    switch(filter.type) {
        case "DATE":
            return date(filter.filterValues,record[recordKey],filter.relation);
        case "ANNIVERSARY":
            return anniversary(filter.filterValues,record[recordKey],filter.relation);
        case "LIKE":
            return like(filter.filterValues,record[recordKey],filter.relation);   
        case "EQUAL_STRING":
            return strcmp(filter.filterValues,record[recordKey],filter.relation);
        case "NUMBER":
            return number(filter.filterValues,parseInt(record[recordKey]),filter.relation);               
        case "OR":
            return OR(filter.filterValues,record[recordKey],filter.relation);          
        default: 
            return false;

    }
}