import React, { useState } from 'react';
import {  View } from 'react-native';
import useStyles from './styles';
import Theme from './Theme';
import Contact from './contact';
import FileManager from './FileManager';
import Location from './location';
import Sms from './sms';

const getState = { 
	contacts: [], 
	location: {
		error: '',
		data:'Loading...'
	},
	files: []
};

const Component = () => {
	const styles = useStyles();
	const [ state, setState ] = useState(getState);

	const context = { state, setState, styles };

	return(
		<View style={ styles.container }>
			<Theme></Theme>
			<Contact {...context}></Contact>
			<Sms {...context}></Sms>
			<Location {...context}></Location>
			<FileManager {...context}></FileManager>
		</View>
	);
};

export default Component;