import React from 'react';
import { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const [HideCompleted, setHideCompleted] = useState(false)
  const [listDiffeculty , setlistDiffeculty] = useState('Difficulty:')
const state ={HideCompleted, listDiffeculty}
    // changeTwitter = (twitter) => {
    //     const [twitter, setTwitter] = useState('');
    // }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}


