import {ContentList} from './App.styled';

export const StatisticsList = ({options}) => {
    const res=Object.entries(options);
    return <>
        {res.map(value=>(         
            <ContentList key={value}>{value[0]} : {value[1]}</ContentList>
        )) }      
    </>
}