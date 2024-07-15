import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default function Login() {
    let imageSource = require('../../assets/blackgold1.jpg');
    // git init
    // git add README.md
    // git commit -m "first commit"
    // git branch -M main
    // git remote add origin https://github.com/Georgechisom/zital.git
    // git push -u origin main

  return (
    <SafeAreaView style={styles.contain}>
        <ImageBackground style={{ flex:1 }} source={imageSource}>
            <View style={styles.bigma}>
                <View>
                    <Text style={ styles.firstdi }>Login</Text>
                </View>

                <View>
                    <View style={styles.fere}>
                        <Text style={{ marginLeft:15, color:"white",fontWeight:"bold" }}>Email</Text>
                        <TextInput
                            style={ styles.texting }
                            placeholder='Enter Mail'
                        />
                    </View>
                </View>

                <View>
                    <View style={styles.fere1}>
                        <Text style={{ marginLeft:15, color:"white",fontWeight:"bold" }}>Password</Text>
                        <TextInput
                            style={ styles.texting }
                            placeholder='Enter Password'
                            icon={faGoogle}
                        />
                    </View>
                </View>

                <View style={styles.bighrs}>
                    <Text style={{ color:"white", fontWeight:"bold" }}>Sign Up</Text>
                    <Text style={{ color:"white", fontWeight:"bold" }}>Forgot Password</Text>
                </View>

                <TouchableOpacity style={styles.bobo}>
                    <Text style={{ color:"white", textAlign:"center",fontWeight:"bold", fontSize:15 }}>Login</Text>
                </TouchableOpacity>


                <View style={styles.bighr}>
                    <View style={styles.hr}></View>
                    <Text style={{ color:"white", fontWeight:"bold" }}> Or Login With</Text>
                    <View style={styles.hr}></View>
                </View> 

                <View style={styles.bigboda}>
                    <TouchableOpacity style={styles.boda}>
                        <FontAwesomeIcon icon={faGoogle} size={25} style={styles.awesome}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boda}>
                        <FontAwesomeIcon icon={faFacebookF} size={25} style={styles.awesome}/>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.boda}>
                        <FontAwesomeIcon icon={faApple} size={25} style={styles.awesome}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground> 
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    bigma:{
        flex:1,
        borderWidth:0,
        // borderColor:"goldenrod",
        // borderRadius:20,
        // borderTopRightRadius:250,
        // borderBottomLeftRadius:250,
        margin:30,
        padding:1
    },
    firstdi:{
        textAlign: "center",
        marginTop:"10%",
        fontSize:30,
        fontWeight:"900",
        color:"white"
    },
    fere:{
        margin:"10%"
    },
    fere1:{
        margin:"10%",
        marginTop:"-3%",
    },
    texting:{
        borderWidth: 0,
        width:"100%",
        padding:"4%",
        margin:"0.9%",
        borderRadius:"30",
        backgroundColor:"#ffffffce",
    },
    bobo:{
        padding:"4%",
        backgroundColor:"goldenrod",
        margin:"10%",
        borderRadius:"30",
        marginTop:"1%",
    },
    bighrs:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:"12%",
        marginTop:"-5%"
    },
    bighr:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:"4%",
    },
    hr:{
        borderTopWidth:"1%",
        borderTopColor:"white",
        marginTop:"2%",
        width:"25%",
        color:"white"
    },
    boda:{
        color:"white",
        borderWidth:"1%",
        borderColor:"#daa5208e",
        backgroundColor:"#daa5208e",
        borderRadius:"50",
        padding:"5%",
    },
    bigboda:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center"
    },
    awesome:{
        color:"white",
    },
})