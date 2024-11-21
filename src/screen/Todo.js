import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HeaderCustom from '../components/HeaderCustom';

const Todo = () => {
  const [activity, setActivity] = useState('');

  const [dataActivity, setdataActivity] = useState(['mandi pagi', 'sarapan']);

  const onSubmit = () => {
    // set nilai baru ke data activity : data activity + setDataActivity
    if (activity == '') return;
    setdataActivity([...dataActivity, activity]);
    setActivity('');
  };

  const onDelete = itemKey => {
    // Alert.alert(key.toString())

    setdataActivity(dataActivity.filter((value, key) => key != itemKey));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <HeaderCustom title="To Do List" headerColor="teal" />
      {/* List */}
      <View style={{flex: 1}}>
        <ScrollView>
          {dataActivity.map((value, key) => {
            return (
              <View
                key={key}
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: 'white',
                  elevation: 5,
                  marginBottom: 8,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizotal: 12,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'black'}}>{value}</Text>
                <Text
                  style={{color: 'red'}}
                  onPress={() => onDelete(key)}></Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      {/* Input Box */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          borderTopWidth: 0.5,
          borderColor: 'gray',
        }}>
        {/* Input to do */}
        <TextInput
          placeholder="Masukkan aktifitas"
          placeholderTextColor={'gray'}
          style={{color: 'black'}}
          value={activity}
          onChangeText={text => setActivity(text)}
        />

        {/* Button Send */}
        <TouchableOpacity
          style={{
            height: 45,
            width: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
