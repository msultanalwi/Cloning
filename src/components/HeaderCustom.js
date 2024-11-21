import React from 'react';
import {Text, View} from 'react-native';

// syarat buat props
//1. buat variable di field parameter function component dalamnya
//2. panggil variablenya di bagian komponent custom

const HeaderCustom = ({title = 'Header', headerColor = 'green'}) => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: headerColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderCustom;
