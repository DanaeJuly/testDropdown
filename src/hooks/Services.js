import { useState } from 'react';
import { collection, getDocs, where, query, startAfter, limit, orderBy } from "firebase/firestore";
import db from '../initializers/firebase';

const companiesRef = collection(db, "testcompany");

export const searchParameter = 'nombre'; //'codigo';

export const useGetItems = () => {
    const [filter, setFilter] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [items, setItems] = useState([]);
    const updateLastValue = (res) => setLastValue(res.docs[res.docs.length-1])

    return {
        onFilterChange: async (newFilter) => {
            console.log('calling with new filter', newFilter);
            const data = await getDataService(newFilter, '', updateLastValue)
            setFilter(newFilter);
            setItems(data);
        },
        increasePage: async () => {
            if(lastValue === undefined) return;
            console.log('calling next Page', lastValue);
            const data = await getDataService( filter, lastValue, updateLastValue);
            setItems([...items, ...data]);
        },
        items
    }
}

const getDataService = async (filter, lastValue, onSuccess) => {
    const pageSize = 5;
    const q = query(
        companiesRef,
        where(searchParameter, '>=', filter),
        where(searchParameter, '<=', filter+'\uf8ff'),
        orderBy(searchParameter),
        startAfter(lastValue),
        limit(pageSize)
    );
    const res = await getDocs(q);
    onSuccess(res);
    const data = [];
    res.forEach(
        doc=>data.push(doc.data())
    );
    return data;
}
