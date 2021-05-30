import {useState, useCallback, Dispatch} from 'react';

export default (initValue  = '') => {
    const [value, setter] = useState<string>(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler, setter] as [string, (e: any) => void, Dispatch<React.SetStateAction<string>>];
};
