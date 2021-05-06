import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';
export class AddBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            namaBuku: "",
            jumlahHalaman: 0,
            namaPenulis: ""
            }
    }

    handleAdd() {
        console.log(this.state)
        axios.post('http://8f64f6a3d447.ngrok.io/buku/add', this.state)
            .then((res) => {
                console.log(res)
                // alert("Data Berhasil Dimasukkan")
                // alert(res.data)
                // this.props.navigation.navigate('App')
                this.props.navigation.replace('App')
                // Alert.alert(
                //     "Data Berhasil Dimasukkan",
                //     [
                //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                //         {text: 'OK', onPress: () => this.props.navigation.replace('App')}
                //     ],
                //     { cancelable: false }
                // )
            }).catch((error) => {
                alert(error.message);
            })
    }
    render() {  
        return (
            <View style={{ borderWidth: 5 }}>
                <Text> Input Judul Buku </Text>
                <TextInput placeholder="Judul Buku" onChangeText={(data) => { this.setState({ namaBuku: data }) }} />
                <Text> Input Halaman Buku </Text>
                <TextInput placeholder="Halaman Buku" keyboardType='numeric' onChangeText={(data) => { this.setState({ jumlahHalaman: parseInt(data) }) }} />
                <Text> Input Nama Penulis </Text>
                <TextInput placeholder="Nama Penulis" onChangeText={(data) => { this.setState({ namaPenulis: data }) }} />
                <TouchableOpacity style={styles.button} onPress={this.handleAdd.bind(this)}><Text>Tambahkan Buku</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace('App')}}><Text>Cancel</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10
    },
})
export default AddBuku
