import React from 'react';
import { Image, Text, View, StyleSheet, Alert, TouchableOpacity, } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

let styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default class App extends React.Component {
    state = {
        isReady: false,
    };

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }

        return (
            <View style={styles.image}>
                <TouchableOpacity
                    onPress={() => Alert.alert("Hola amiguete, presionaste la imagen :)")}
                >

                    <Image source={require('./assets/test_image.jpg')} />

                </TouchableOpacity>
            </View>
        );
    }

    async _cacheResourcesAsync() {
        const images = [require('./assets/test_image.jpg')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }

}