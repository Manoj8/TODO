import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {connect} from 'react-redux'
import { addNewTask, deleteTask, updateTask } from '../actions/index'

class Navigate extends Component {
    state = {
        noteText:'',
        index:this.props.navigation.getParam('index')
    }
    render() {
    
    const itemId = this.props.navigation.getParam('val');
      
      return (
          <View>
            <TextInput   
                onChangeText={(text)=>this.setState({noteText:text})}
                placeholderTextColor='white'
            >
            {itemId}
            {this.state.index}
            </TextInput>
            <TouchableOpacity onPress={()=>{this.props.onUpdateTodo(this.state.noteText,this.state.index)}} style={styles.addButton}>
                 <Text style={styles.addButtonText}>Edit</Text>
             </TouchableOpacity>
          </View>
      );
  }
}

const mapStateToProps = state => {
    console.log(state.todo.noteArray, "state.todo.noteArray");
     return {
       noteText: state.todo.noteText
     }
}
const mapDispatchToProps = dispatch => {
    
    return {
        onAddTodo: (notetext) => dispatch(addNewTask(notetext)),
        onDeleteTodo: (index) => dispatch(deleteTask(index)),
        onUpdateTodo: (noteText,index) => dispatch(updateTask(noteText,index    ))
    }
}


const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
});

export default connect (
    mapStateToProps,mapDispatchToProps
) (Navigate);
