import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

function ListScreen({navigation}) {
  // List Screen -API Fetch
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container2}>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Image
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/3597/3597742.png',
              }}
              style={styles.imageItem}
            />
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.company.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Do you want to save details',
                  'Phone No :' + item.phone,
                  [
                    {
                      text: 'Yes',
                      onPress: () => Alert.alert('Details Added'),
                    },
                    {text: 'No', onPress: () => Alert.alert('Details Deleted')},
                  ],
                )
              }
              style={styles.button}>
              <Text style={{color: 'green'}}>ADD</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
      <Button
        title="Added Details"
        onPress={() => navigation.navigate('Details')}
        // onPress={() => console.warn('NO BOSS RULES')}
      />
    </SafeAreaView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  imageItem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
});
