import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';
export class AddBuku extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.route.params.id,
            namaBuku: this.props.route.params.namaBuku,
            jumlahHalaman: this.props.route.params.jumlahHalaman,
            namaPenulis: this.props.route.params.namaPenulis
            }
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleUpdate() {
        console.log(this.state)
        axios.put(`http://5189d5f9efe2.ngrok.io/buku/update/${this.state.id}`, this.state)
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
                <Text> Update Judul Buku </Text>
                <TextInput value={this.state.namaBuku} onChangeText={(data) => { this.setState({ namaBuku: data }) }} />
                <Text> Update Halaman Buku </Text>
                <TextInput value={()=>{if(String(this.state.jumlahHalaman)==""){return 0}else{return String(this.state.jumlahHalaman)}}} keyboardType='numeric' onChangeText={(data) => { this.setState({ jumlahHalaman: parseInt(data) }) }} />
                <Text> Update Nama Penulis </Text>
                <TextInput value={this.state.namaPenulis} onChangeText={(data) => { this.setState({ namaPenulis: data }) }} />
                <TouchableOpacity style={styles.button} onPress={this.handleUpdate.bind(this)}><Text>Update Buku</Text></TouchableOpacity>
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
