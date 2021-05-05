import React, { Component } from 'react'
import { View,StyleSheet, Text } from 'react-native';

export class TextText extends Component {
    render() {
        return (
            <View>
                 <Text style={styles.styleText}>Count : {this.props.textCounter}</Text>
            </View>
        )
    }
}

export default TextText;

const styles = StyleSheet.create({
    styleText:{
        fontSize:20,
    }
})
