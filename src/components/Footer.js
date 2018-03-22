import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

const Footer = (props) => {
    //footer holds all of our buttons that change the tweets
        return (
            <View style={{backgroundColor: '#CEB888'}}>
                {!props.tweetsLoaded ?
                    <TouchableHighlight onPress={() => props.getTweets()}>
                        <Text style={{fontSize: 30, fontWeight: '600', color: 'white', textAlign: 'center'}}>Press Here to get tweets!</Text>
                    </TouchableHighlight>
                :
                !props.initiallySorted ?
                <View>
                    <TouchableHighlight onPress={() => props.setAscending()}>
                        <Text style={{fontSize: 30, fontWeight: '300', color: 'white', textAlign: 'center'}}>Set ascending</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => props.setDescending()}>
                        <Text style={{fontSize: 30, fontWeight: '300', color: 'white', textAlign: 'center'}}>Set descending</Text>
                    </TouchableHighlight>
                </View>
                :
                props.ascending ?
                    <TouchableHighlight onPress={() => props.setDescending()}>
                        <Text style={{fontSize: 30, fontWeight: '300', color: 'white', textAlign: 'center'}}>Set descending</Text>
                    </TouchableHighlight>
                :
                    <TouchableHighlight onPress={() => props.setAscending()}>
                        <Text style={{fontSize: 30, fontWeight: '300', color: 'white', textAlign: 'center'}}>Set ascending</Text>
                    </TouchableHighlight>
                }
            </View>
        )
}

export default Footer
