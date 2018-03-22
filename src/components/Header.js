import React from 'react'
import { Text, View } from 'react-native'

export default class Header extends React.Component {
    render() {
        return (
            <View style={{paddingTop: Expo.Constants.statusBarHeight, backgroundColor: 'black'}}>
                <Text style={{fontSize: 30, fontWeight: '600', color: 'white', textAlign: 'center'}}>One hundred #boilerup tweets!</Text>
            </View>
        )
    }
}
