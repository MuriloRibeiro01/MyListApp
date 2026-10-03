import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../components/input';
import LogoMyList from '../components/logo';
import Botao from '../components/botao';
import SubTitle from '../components/subTitle';

export default function Main() {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
        <LogoMyList/>
        <View style={styles.BlackContainer}>
          <View style={styles.InputContainer}>
            <Input placeholder='Adicione algo à sua lista' />
            <Botao />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.SubCounter}>
              <SubTitle title={'Criadas'} />
              <View style={styles.counterContainer}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>2</Text>
              </View>            
            </View>
            <View style={styles.SubCounter}>
              <SubTitle title={'Concluídas'}/>
              <View style={styles.counterContainer}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>5</Text>
              </View>            
            </View>
          </View>   
          <View style={styles.divisor}></View>
          <View style={styles.taskContainer}>
            <Image source={require('../../public/images/check.png')}/>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13}}>
              Lorem ipsum dolor sit amet, {'\n'}consectetur adipiscing elit sed do eiusmod tempor.
            </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    SafeAreaContainer: {
      gap: 50,
      alignItems: 'center',
      backgroundColor: '#181818',
    },
    InputContainer: {
      marginTop: -40,
      gap: 12,
      flexDirection: 'row',
      marginBottom: 50,
    },
    BlackContainer: {
      padding: 20,
      height: '100%',
      backgroundColor: '#0a0a0a',
    },
    counterContainer: {
      backgroundColor: '#333333',
      height: 20,
      width: 25,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    SubCounter: {
      marginTop: -30,
      gap: 5,
      flexDirection: 'row',
    },
    divisor: {
      backgroundColor: '#333333',
      height: 2,
      width: 350,
      alignSelf: 'center',
      marginBottom: 20,
    },
    contentContainer: {
      paddingBottom: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    taskContainer: {
      borderWidth: 1,
      borderColor: '#333333',
      padding: 15,
      gap: 10,
      borderRadius: 10,
      width: 350,
      flexDirection: 'row',
      backgroundColor: '#181818',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
})
