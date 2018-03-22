import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { List, ListItem } from 'react-native-elements'
export default class Landing extends React.Component {

    getItemLayout = (data, index) => (
        { length: 100, offset: 100 * index, index }
    )
    
    renderButtons = () => {
        //could be better.. for the sake of time (plus brain slows down late at night), I went with the first thing that came to mind to print buttons down the side for pagination
        let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let returnButtons = buttons.map(position => (
            <View key={position} style={{flex: 1, justifyContent: 'center'}}><TouchableHighlight 
                style={{flex: 1}}
                onPress = {() => this.flatListRef.scrollToIndex({animated: true, index: 10*(position-1)})}>
                <Text style={{color: 'lightblue', fontSize: 20, alignSelf: 'center', padding: 10}}>{position}</Text>
            </TouchableHighlight></View>
        ))
        return (
            <View>
                {returnButtons}
            </View>
        )
    }

    componentWillReceiveProps = (newProps) => {
        //if we receive props (ie, reorder the tweets), scroll to the top
        if (this.flatListRef) {this.flatListRef.scrollToIndex({animated: true, index: 0})}
    }

    render = () => {
        //scrollview may have been better, but the ability to scroll to is more difficult to implement compared to this method. could be done though. 
        return (
          <View style={styles.container}>
            {this.props.tweets.length ?
                    <View style={{flex: 1, flexDirection: 'row'}}><FlatList
                        style={{flex: 7}}
                        ref={(ref) => { this.flatListRef = ref }}
                        getItemLayout={this.getItemLayout}
                        data={this.props.tweets}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                        <View style={{borderBottomColor: 'black', height: 100}}><Text style={styles.item}>{index + 1}: {item.tweet}</Text></View>
                        )}
                    />
                    {this.renderButtons()}
                    </View>
                :
                this.props.loading ?
                        <View>
                        <ActivityIndicator
                            size="large"
                            color={'black'}
                        />
                        <Text style={{textAlign: 'center'}}>This may take a moment while Heroku fires up...</Text></View>
                :<Text>Press the button below to get started!</Text>
            }
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
    }
  });