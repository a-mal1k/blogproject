import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLangQuery } from '../redux/querySlice';

const LanguageToggler = () => {
    const dispatch = useDispatch();
    const langQuery = useSelector((state) => state.query.langQuery);

    const handleToggle = () => {
        const newLangQuery = langQuery === 'en' ? 'hi' : 'en';
        dispatch(setLangQuery(newLangQuery));
    };

    return (
        <div className="flex items-center justify-between">
            <div></div>
            <div className='flex items-center space-x-4'>
                <span className="text-gray-700 font-semibold">
                    {langQuery === 'en' ? 'English' : 'हिन्दी'}
                </span>
                <Toggle
                    checked={langQuery === 'hi'}
                    onChange={handleToggle}
                    icons={{
                        checked: '🇮🇳',
                        unchecked: '🇬🇧',
                    }}
                    className="react-toggle"
                />
            </div>
        </div>
    );
};

export default LanguageToggler;
