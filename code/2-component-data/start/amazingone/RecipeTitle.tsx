import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native/types';

function TodoListItem(props: any) {
  const hover = 1;
  const [descState, updatedescState] = useState<string>('1');
  const [desctodo, setdescTodo] = useState<Array<string>>([]);
  const [value1, onChangeText1] = React.useState('0');
  function descChange() {
    setdescTodo([...desctodo, descState]);
    updatedescState('');
  }
  return (
    <View>
      {props.content}
      <View>
        {hover === 1 ? (
          <Button
            title='"↑"'
            onPress={() => {
              props.swapItem(props.index - 1, props.index);
            }}
          />
        ) : null}
        {hover === 1 ? (
          <Button
            title='"↓"'
            onPress={() => {
              props.swapItem(props.index, props.index + 1);
            }}
          />
        ) : null}
        {hover === 1 ? (
          <Button
            title='""×"'
            onPress={() => {
              props.onDelete(props.index);
            }}
          />
        ) : null}
        {hover === 1 ? (
          <TextInput
            onChangeText={text => onChangeText1(text)}
            value={value1}
          />
        ) : null}
        {hover === 1 ? (
          <Button
            title='"Orz"'
            onPress={() => {
              console.log(desctodo);
              descChange();
            }}
          />
        ) : null}
      </View>
      {desctodo.map(item => (
        <View>{item}</View>
      ))}
      {props.splitLine ? <Text>......</Text> : null}
    </View>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)
