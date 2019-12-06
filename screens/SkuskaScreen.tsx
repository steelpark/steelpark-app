import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text, Button } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

import { NavigationStackScreenProps } from 'react-navigation-stack';
//import HomeScreen from './HomeScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function SkuskaScreen(props: NavigationStackScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.vysokaPec}>
        <Image
          source={
            require('../assets/images/vysokapec.png')
          }
          style={styles.vysokaPecImage}
        />
        <Text style={styles.vysokaPecText}>
        Vysoká pec predstavuje základné zariadenie v hutníckom
        procese, ktorého účelom je oddelenie železa z vyťaženej
        horniny. Za pomoci vysokej teploty a pridaných surovín sa
        vo vysokej peci nepretržitým cyklom redukuje železonosná
        vsádzka, vzniká a taví sa železo, ktoré sa po odpichu presú-
        va na ďalšie spracovanie v oceliarni. Vo vysokej peci vzni-
        kaju tri produkty: surové železo, troska a vysokopecný plyn.

        Ovládanie:
            Exponát poskytuje netradičné pohľady na procesy, ktoré sú
            pre ľudské oko v realite neviditeľné. Postav sa pred projek-
            ciu. Gestom ruky si vyber jeden z interaktívnych bodov a
            pozoruj proces, prebiehajúci vo vysokej peci.
        </Text>
        <TouchableOpacity> 
          <Button
            title="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
        </TouchableOpacity>  
      </View>
    </ScrollView>
  );
}

SkuskaScreen.navigationOptions = {
  title: 'Vysoka pec',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F26602',
  },
  vysokaPec: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  vysokaPecText: {
    fontSize: 20,
    color: 'rgba(0,0,0, 100)',
    lineHeight: 24,
    textAlign: 'center',
  },
  vysokaPecImage: {
    width: 500,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    //marginLeft: -10,
    marginBottom: 10,
  },

});
