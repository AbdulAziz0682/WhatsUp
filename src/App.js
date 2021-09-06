import React from 'react';
import { Button } from '@material-ui/core';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import {create} from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import '../tailwind.css';

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

export default function App(){
    return (
        <StylesProvider jss={jss} generateClassName={createGenerateClassName()}>
        <h1 className="text-green-200 bg-gray-600">This is React app setup with Parcel Bundler<Button variant="outlined" className="bg-green-200">BTN</Button></h1>
        </StylesProvider>
    )
}