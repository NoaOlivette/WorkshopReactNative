import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class CustomButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
          };
    }

    render() {

        return(
            <View>
                <TouchableOpacity  onPress={() => this.setState({ count: this.state.count + 1 })} style={{width: 100, height: 20, backgroundColor: 'red'}}>
                    <Text style={{color: 'white', textAlign: 'center'}}>{this.props.text}</Text>
                    
                </TouchableOpacity>
                <p>You clicked {this.state.count} times</p>
            </View>
        )}
}