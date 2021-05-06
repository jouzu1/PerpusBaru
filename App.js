import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View,StyleSheet,SafeAreaView, FlatList, Image, Alert} from 'react-native'
import TextText from './TextText'
import axios from 'axios';
import AddBuku from './AddBuku';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      dataqu : [],
      namaBuku:""
    }
  } 

  componentDidMount(){
    this.getData();
    // this.deleteData();
  }

  componentDidUpdate(){
    this.getData();
    // this.deleteData();
  }

  getData = () => {
    // axios.get(' http://5189d5f9efe2.ngrok.io/buku/get')
    axios.get(`http://5189d5f9efe2.ngrok.io/buku/get/${this.state.namaBuku}`)
    .then((res) => {
      console.log(res)
      // console.log(res.data.userId)
      // console.log(res.data.id)
      // console.log(res.data.title)
      // console.log(res.data.completed)
      this.setState({dataqu : res.data})
    }).then(()=>{
      // console.log(JSON.stringify(this.state.data[0].title))
    }).catch((error)=>{
      alert(error.message);
    })
  }

  deleteData = (id) => {
    // axios.get(' http://5189d5f9efe2.ngrok.io/buku/get')
    axios.delete(`http://5189d5f9efe2.ngrok.io/buku/delete/${id}`)
    .then((res) => {
      // console.log(res)
      alert(res.data)
      // console.log(res.data.userId)
      // console.log(res.data.id)
      // console.log(res.data.title)
      // console.log(res.data.completed)
      // this.setState({dataqu : res.data})
    }).then(()=>{
      // console.log(JSON.stringify(this.state.data[0].title))
    }).catch((error)=>{
      alert(error.message);
    })
  }
  
  //  Item = ({ title }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );
  

  //parameter item wajib ditulis
  renderItem = ({item}) => (
    <SafeAreaView style={{borderWidth:5}}>
    
    <Text >Judul Buku     : {item.namaBuku}</Text>
    <Text >Nama Penulis   :{item.namaPenulis}</Text>
    <Text >Jumlah Halaman :{item.jumlahHalaman}</Text>
    <TouchableOpacity onPress={()=>{this.props.navigation.replace('UpdateBuku',item)}} style={styles.bluebutton}><Text>Update Buku</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>{ Alert.alert(
                     "Delete",
                     "Hapus Data",
                     [
                         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                         {text: 'OK', onPress: () => this.deleteData(item.id) }
                     ]
                 )}} style={styles.bluebutton}><Text>Delete Buku</Text></TouchableOpacity>
    {/* <Image style={{width: 100, height: 100, marginLeft: 20, marginTop:10}}
    source={{uri:item.Poster}}></Image> */}
  </SafeAreaView>
  );

  render() {
    
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={()=>{this.props.navigation.replace('AddBuku')}} style={styles.button}><Text>Tambahkan Buku</Text></TouchableOpacity>
        <TextInput placeholder="Pencarian Berdasarkan Judul Buku" onChangeText={(data) => { this.setState({ namaBuku: data }) }} />
        {/* <AddBuku /> */}
        <FlatList
        data = {this.state.dataqu}
        renderItem={this.renderItem}
        //isi paraameter keyExtractor bisa apa
        keyExtractor={item => item.id}
        >

        </FlatList>
        {/* <TextText textCounter = {this.state.counter} /> */}
        {/* <TextInput value={this.state.text} onChangeText={(e)=>{this.setState({text:e})}}></TextInput> */}
        {/* <TouchableOpacity style={styles.button} onPress={() => {this.setState({counter:this.state.counter+1})}}><Text>Increment++</Text></TouchableOpacity> */}
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10
  },
  bluebutton: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    color:'white'
  },
})

export default App
