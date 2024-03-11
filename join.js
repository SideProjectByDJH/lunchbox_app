import {StatusBar} from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {theme} from "./colors";
import {useState} from "react";

export default function App() {
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');
  const [nickname, setNickname] = useState('');


  // State variable to hold the password
  const [password, setPassword] = useState('');

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto"/>
      <View style={styles.navigation}>
        <View
          style={{alignItems: 'flex-start'}}
        >
          <TouchableOpacity
            onPress={() => {
              alert("뒤로가기 구현 필요.")
            }}
          >
            <MaterialCommunityIcons name="arrow-left-top" size={20} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>회원가입</Text>


        <View>
          {/* <Image
            source={
              response ? {uri: response.assets[0].uri} : 0
            }
            style={styles.img}
          /> */}

          <TouchableOpacity
              style={{ 
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
          >
            <MaterialCommunityIcons
              name={'account-circle'}
              size={80}
              color="#aaa"
              style={styles.icon}
              onPress={() => {
            alert(`이미지 피커`)
          }}/>
          
          </TouchableOpacity>
      </View>



        <Text style={styles.guidanceText}>이메일</Text>
        <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
          <TextInput
            placeholder={'jane@example.com'}
            style={styles.textInput}
            keyboardType={'email-address'}
            //onChangeText={} : 인증 여부 초기화 필요
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
            alert(`인증번호 전송`)
          }}>
            <Text style={styles.btnText}>인증번호</Text>
            <Text style={styles.btnText}>전송</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
          <TextInput
            placeholder={'인증번호'}
            style={styles.textInput}
            keyboardType={'number-pad'}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
            alert(`인증번호 확인`)
          }}>
            <Text style={styles.btnText}>인증번호</Text>
            <Text style={styles.btnText}>확인</Text>
          </TouchableOpacity>
        </View>
       
        <Text style={styles.guidanceText}>비밀번호</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder={'비밀번호를 입력해주세요'}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            keyboardType={'default'}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>

        <Text style={styles.guidanceText}>비밀번호 확인</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder={'비밀번호를 입력해주세요'}
            style={styles.textInput}
            secureTextEntry={!showPassword}
            keyboardType={'default'}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>

        <Text style={styles.guidanceText}>닉네임</Text>
         <View style={styles.inputButtonContainer}>
          <View style={styles.inputContainer}>
          <TextInput
            placeholder={'방구석 백종원'}
            style={styles.textInput}
            keyboardType={'default'}
          />
        </View>
       
        </View>

      </View>
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitJoinButton} onPress={() => {
          alert(`회원가입.`)
        }}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  navigation: {
    justifyContent: 'space-between',
    marginTop: 60,
  },
  submitButton: {
    backgroundColor: theme.main,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitJoinButton: {
    backgroundColor: theme.main,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sectionText: {
    color: theme.main,
    fontSize: 44,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.white,
  },
  guidanceText: {
    fontSize: 14,
    color: theme.black,
    marginTop: 5,
  },
  textInput: {
    padding: 10,
  },
  passwordMissingText: {
    color: theme.grey,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 5,
    padding: 5,
    flex: 2,
    marginRight: 20,
    marginTop: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: theme.main,
    borderWidth: 2,
    marginVertical: 5,
    padding: 5,
    marginRight: 20,
  },
  inputButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
  },
  icon: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginVertical: 35,
  },
  mainContainer: {
    flex: 1,
  },
  passwordMissingTouchable: {
    alignItems: 'center',
  }
});
