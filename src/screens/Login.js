/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Data from '../../src/data.json';

function LoginScreen({navigation}) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const [Errors, setErrors] = useState({
    isValidUser: true,
    isValidPassword: true,
  });

  // const DATA = [
  //   {
  //     username: 'Yusuf',
  //     password: '1234',
  //   },
  //   {
  //     username: 'Gaurav',
  //     password: '5511',
  //   },
  //   {
  //     username: 'Admin',
  //     password: '1010',
  //   },
  // ];
  function validate_user(username, password) {
    // console.log('hello',Data,username,password,Data[0].username,Data[0].password);
    var found = false;
    for (i = 0; i < Data.length; i++) {
      if (username !== Data[i].username && password !== Data[i].password) {
        setErrors({
          isValidUser: false,
          isValidPassword: false,
        });
      } else if (
        username !== Data[i].username &&
        password === Data[i].password
      ) {
        setErrors({
          isValidUser: false,
          isValidPassword: true,
        });
        break;
      } else if (
        username === Data[i].username &&
        password !== Data[i].password
      ) {
        setErrors({
          isValidPassword: false,
          isValidUser: true,
        });
        break;
      } else if (
        username === Data[i].username &&
        password === Data[i].password
      ) {
        found = true;
        break;
      } else {
        ////BODY
      }
    }
    if (found === true) {
      navigation.navigate('List');
    } else {
    }
  }

  // {
  //   Alert.alert('You have entered an invalid username or password');
  //   setErrors({
  //     isValidUser: false,
  //     isValidPassword: false,
  //   });
  // }

  // if (!found) {
  //   Alert.alert('You have entered an invalid username or password');
  // }

  /////Validation for username and password seprately

  // validation = () => {
  //   if (Username === ' ') {
  //     setErrors({
  //       isValidUser: false,
  //     });
  //   } else if (Password === ' ') {
  //     setErrors({
  //       isValidPassword: false,
  //     });
  //   } else {
  //   }
  // };

  const onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  // const handleValidUser = val => {
  //   if (val.length === DATA[i].username ) {
  //     setErrors({
  //       isValidUser: false,
  //     });
  //   } else {
  //     setErrors({
  //       isValidUser: false,
  //     });
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Username"
          placeholderTextColor="green"
          // keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={val => setUsername(val)}
          // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      {Errors.isValidUser ? null : (
        <Text style={styles.validations}>Invalid Username</Text>
      )}

      {/* {Errors.isValidUser ? (
        <Text style={styles.validations}>Invalid Username</Text>
      ) : null} */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={val => setPassword(val)}
        />
      </View>
      {Errors.isValidPassword ? null : (
        <Text style={styles.validations}>Invalid Password</Text>
      )}

      <TouchableOpacity
        style={styles.restoreButtonContainer}
        onPress={() =>
          onClickListener('\nCheck your inbox for a password reset email')
        }>
        <Text>Forgot?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => validate_user(Username, Password)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.fabookButton]}
        onPress={() => onClickListener('\nAdd credentials for Facebook')}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}
          />
          <Text style={styles.loginText}>Continue with facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.googleButton]}
        onPress={() => onClickListener('\nAdd credentials for Gmail')}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}
          />
          <Text style={styles.loginText}>Sign in with google</Text>
        </View>
      </TouchableOpacity>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.inputContainer}>
    //     <Image
    //       style={styles.inputIcon}
    //       source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
    //     />
    //     <TextInput
    //       style={styles.inputs}
    //       placeholder="Username"
    //       // keyboardType="email-address"
    //       underlineColorAndroid="transparent"
    //       onChangeText={value => setName({value})}
    //     />
    //   </View>

    //   <View style={styles.inputContainer}>
    //     <Image
    //       style={styles.inputIcon}
    //       source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
    //     />
    //     <TextInput
    //       style={styles.inputs}
    //       placeholder="Password"
    //       secureTextEntry={true}
    //       underlineColorAndroid="transparent"
    //       onChangeText={value2 => setPassword({value2})}
    //     />
    //   </View>

    //   <TouchableHighlight
    //     style={[styles.buttonContainer, styles.loginButton]}
    //     onPress={() => navigation.navigate('List')}>
    //     <Text style={styles.loginText}>Login</Text>
    //   </TouchableHighlight>

    //   <TouchableHighlight
    //     style={styles.buttonContainer}
    //     onPress={() =>
    //       onClickListener('\nCheck your inbox for a password reset email')
    //     }>
    //     <Text>Forgot your password?</Text>
    //   </TouchableHighlight>

    //   <TouchableHighlight
    //     style={styles.buttonContainer}
    //     onPress={() =>
    //       onClickListener('\nCheck your inbox for a register email')
    //     }>
    //     <Text>Register</Text>
    //   </TouchableHighlight>
    // </View>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  validations: {
    fontSize: 12,
    color: 'red',
    marginRight: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4fcff',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
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
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#ff0000',
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#DCDCDC',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 30,
//     borderBottomWidth: 1,
//     width: 250,
//     height: 45,
//     marginBottom: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   inputs: {
//     height: 45,
//     marginLeft: 16,
//     borderBottomColor: '#FFFFFF',
//     flex: 1,
//   },
//   inputIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 15,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//   },
//   loginButton: {
//     backgroundColor: '#00b5ec',
//   },
//   loginText: {
//     color: 'white',
//   },

//   listItem: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     width: '80%',
//     flex: 1,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     borderRadius: 5,
//   },
//   imageItem: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   button: {
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container2: {
//     flex: 1,
//     backgroundColor: '#F7F7F7',
//     marginTop: 60,
//   },
// });
