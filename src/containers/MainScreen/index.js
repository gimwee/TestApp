import React, { PureComponent } from 'react';
import { View, Image, TextInput, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class MainScreen extends PureComponent {
  render() {
    return (

      <View style={{ flex: 1 }}>
         <View style={{justifyContent: 'center',  height: 50 }}>
            <Image
              style={{
                width: 21,
                position: 'absolute',
                left: 11,
              }}
              resizeMode="contain"
              source={require('../../assets/images/search.png')}
            />
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                color: 'grey',
                paddingLeft: 36,
              }}
              placeholderTextColor="#00000033"
              placeholder="e.g. Chinese, pizza"
              autoCapitalize="words"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              blurOnSubmit
            />
            <Image
              style={{
                width: 21,
                position: 'absolute',
                right: 11,
              }}
              resizeMode="contain"
              source={require('../../assets/images/icon_hours.png')}
            />
        </View>
        <View style={{flex: 1}}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{...StyleSheet.absoluteFillObject}}
          >
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              pinColor='red'
            />
          </MapView>
        </View>
      </View>

    );
  }
}
