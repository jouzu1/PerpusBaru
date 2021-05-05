import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
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
        axios.post('http://5cb0835a9e15.ngrok.io/buku/add', this.state)
            .then((res) => {
                alert("Data Berhasil Dimasukkan")
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
                <TextInput placeholder="Halaman Buku" onChangeText={(data) => { this.setState({ jumlahHalaman: data }) }} />
                <Text> Input Nama Penulis </Text>
                <TextInput placeholder="Nama Penulis" onChangeText={(data) => { this.setState({ namaPenulis: data }) }} />
                <TouchableOpacity style={styles.button} onpress={this.handleAdd.bind()}><Text>Tambahkan Buku</Text></TouchableOpacity>
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
