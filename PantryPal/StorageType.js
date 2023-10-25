import React from 'react';
import {View,Text} from 'react-native';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key:'Cupboard', value:'Cupboard'},
    {key:'Fridge', value:'Fridge'},
    {key:'Freezer', value:'Freezer'},

  ]


  return(
    <View style={{paddingHorizontal:15,marginTop:15}}>


      <SelectList setSelected={setSelected} data={data}  />

      <View style={{marginTop:50}}>
        <Text>Selected Value : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
      </View>
      
    </View>
    
  )

};

export default App;