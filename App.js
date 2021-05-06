import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View,StyleSheet,SafeAreaView, FlatList, Image} from 'react-native'
import TextText from './TextText'
import axios from 'axios';
import AddBuku from './AddBuku';

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      dataqu : []
    }
  } 

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(){
    this.getData();
  }

  getData = () => {
    axios.get('http://8f64f6a3d447.ngrok.io/buku/get')
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
    {/* <Image style={{width: 100, height: 100, marginLeft: 20, marginTop:10}}
    source={{uri:item.Poster}}></Image> */}
  </SafeAreaView>
  );

  render() {
    
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={()=>{this.props.navigation.replace('AddBuku')}} style={styles.button}><Text>Tambahkan Buku</Text></TouchableOpacity>
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
})

export default App
