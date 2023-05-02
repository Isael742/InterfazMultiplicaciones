import * as React from 'react';
import { StyleSheet, StatusBar, View, Text, Image, TextInput } from 'react-native';
import ButtonText from './src/components/ButtonText';
import ButtonImage from './src/components/ButtonImage';

export default function App() {
  return (
    <View style={styles.screenCont}>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.topHeaderCont}>
            <ButtonImage cWidth='15%' cHeight='40%' imageRoute={require('./src/assets/arrow.png')}/>
            <Text style={styles.headerText}>Multiplicaciones Nivel: 3</Text>
          </View>
          <View style={styles.botHeaderCont}>
            <View style={styles.botHeaderInsideCont}>
              <Text style={styles.navText}>Puntuacion: 0</Text>
              <ButtonImage cWidth='30%' cHeight='40%' imageRoute={require('./src/assets/refresh.png')}/>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.tableContainer}>
            <Image style={{width: '100%', height: '100%'}} source={require('./src/assets/table.jpeg')} resizeMode='contain'/>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.smallTextContainer}>
              <Text style={styles.exerciseText}>8</Text>
            </View>
            <Image style={{width: '10%', height: '15%'}} source={require('./src/assets/close.png')} resizeMode='contain'/>
            <View style={styles.smallTextContainer}>
              <Text style={styles.exerciseText}>4</Text>
            </View>
            <Image style={{width: '10%', height: '15%'}} source={require('./src/assets/equal.png')} resizeMode='contain'/>
            <TextInput style={styles.inputNumber} inputMode='numeric'/>
            <ButtonText cWidth='22.5%' cHeight='20%' text='Revisar'/>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/home.png')}/>
          <Text style={styles.navText}>Inicio</Text>
        </View>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/close.png')}/>
          <Text style={styles.navText}>Multiplicacion</Text>
        </View>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/divide.png')}/>
          <Text style={styles.navText}>Division</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenCont:{
      flex: 1,
      backgroundColor: '#89CFF0',
      alignItems: 'center',
      justifyContent: 'center'
  },
  container:{
      width: '90%',
      height: '90%'
  },
  bottomContainer:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#A9A9A9'
  },
  navContainer:{
    width: '30%',
    height: '100%',
    alignItems: 'center'
  },
  headerContainer:{
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  topHeaderCont:{
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  tableContainer:{
    width: '100%',
    height: '70%'
  },
  inputContainer:{
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  botHeaderCont:{
    width: '100%',
    height: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  botHeaderInsideCont:{
    width: '50%',
    height: '100%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer:{
    width: '100%',
    height: '80%'
  },
  inputNumber:{
    width: '20%',
    height: '25%',
    backgroundColor: 'white',
    fontSize: 24,
    padding: 0,
    fontWeight: 'bold',
    color: 'black'
  },
  smallTextContainer:{
    width: '10%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'lightgray'
  },
  exerciseText:{
    marginVertical: 4,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    color: 'black'
  },
  headerText:{
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'left',
      color: 'black'
  },
  navText:{
    marginVertical: 2,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: 'black'
},
})