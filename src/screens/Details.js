/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  Button,
} from 'react-native';

function ProfileCardView({navigation}) {
  const [text1, settext1] = useState('Leanne Graham');
  const [text2, settext2] = useState('1-770-736-8031 x56442');

  (onClickListener1 = () => {
    settext1(' ');
    settext2(' ');
  }),
    (onClickListener2 = () => {
      settext1('Patricia Lebsack ');
      settext2('493-170-9623 x156 ');
    });

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://img-premium.flaticon.com/png/512/522/premium/522288.png?token=exp=1629698339~hmac=52692e2e76ea5a559c6ef56e1d1ace4d',
            }}
          />
          <Text style={styles.name}></Text>
        </View>
        <View>
          <Text style={styles.container}>Name :{text1}</Text>
          <Text style={styles.container}>Phone No :{text2} </Text>
        </View>

        <TouchableHighlight onPress={() => onClickListener1()}>
          <Text style={styles.container2}>Delete Details</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onClickListener2()}>
          <Text style={styles.container2}>Update Details</Text>
        </TouchableHighlight>
        <Button
          style={styles.container2}
          title="LOGOUT"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProfileCardView;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container2: {
    padding: 20,
    alignSelf: 'center',
    color: '#04420A',
  },
  container: {
    padding: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  box: {
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    paddingTop: 10,
  },
  profileImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },

  // button: {
  //   width:60,
  //   height:60,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom:20,
  //   borderRadius:30,
  //   margin:10,
  //   shadowColor: 'black',
  //   shadowOpacity: .8,
  //   shadowOffset: {
  //     height:2,
  //     width:-2
  //   },
  //   elevation:4,
  // },
  buttonMessage: {
    backgroundColor: '#00BFFF',
  },
  buttonLike: {
    backgroundColor: '#228B22',
  },
  buttonLove: {
    backgroundColor: '#FF1493',
  },
  buttonCall: {
    backgroundColor: '#40E0D0',
  },
  icon: {
    width: 35,
    height: 35,
  },
});
