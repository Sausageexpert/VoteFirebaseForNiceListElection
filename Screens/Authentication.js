import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Alert, TextInput, Image, Text} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Authentication extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID: '',
            password: ''
        }
    }

    login = async(email, password) => {
        try{
            const banns = await firebase.auth().signInWithEmailAndPassword(email, password)

            console.log(banns);

           // .then(() => {
           //     alert("Ms. Squiggly Underline is married!");
           // })
        }

        catch(error){
            console.log(error.code);

            switch(error.code){
                case 'auth/user-not-found':
                    alert("Ms. Squiggly Underline has an imaginary husband");
 
                    break;

                    case 'auth/too-many-requests':
                        alert("Maybe we should marry only one person at a time...");

                    break;
            }
        }
    }

    signup = (email, password) => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((response) => {
           return alert("Santa's Nice List Hacked")
       })

       .catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;

           return alert(errorMessage);
       })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                  <Text style = {styles.title}>
                    Barter Cult: Headquarters cum Evil Lair
                  </Text>

                  <View>
                      <TextInput style = {styles.input}
                      placeholder = "Enter Hacking Account Here"
                      keyboardType = 'email-address'
                      placeholderTextColor = "#ffffff"
                      onChangeText = {(text) => {
                        this.setState({
                            emailID: text
                        })
                      }}/>

                     <TextInput style = {styles.input}
                      secureTextEntry = {true}
                      placeholder = "Enter List to Be Hacked"
                      placeholderTextColor = "#ffffff"
                      onChangeText = {(text) => {
                        this.setState({
                            password: text
                        })
                      }}/>

                      <TouchableOpacity style = {[ styles.button, {marginBottom: 20, marginTop: 20}]}
                      onPress = {() => {
                          this.login(this.state.email, this.state.password);
                      }}>
                          <Text style = {styles.buttonText}> Login </Text>
                      </TouchableOpacity>

                      <TouchableOpacity style = {[ styles.button, {marginTop: 20, marginBottom: 20}]}
                      onPress = {() => {
                          this.signup(this.state.email, this.state.password);
                      }}>
                          <Text style = {styles.buttonText}> Sign Up </Text>
                      </TouchableOpacity>

                  </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        border: 4,
        textAlign: 'center',
        fontFamily: 'Edwardian Script ITC'
    }
})