import MainLayout from '@layouts/MainLayout';
import React from 'react';
import { useSelector } from '@hooks/reduxHook';
import { Redirect } from 'react-router-dom';

const Select = (): JSX.Element => {

    return (
        <MainLayout>
            <div>select</div>
        </MainLayout>
    )
}

export default Select;
