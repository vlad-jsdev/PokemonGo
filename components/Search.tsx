import React from 'react';
import {TextInput} from 'react-native';

interface SearchProps {
  text: string;
  setText: (text: string) => void;
}

const Search = ({setText, text}: SearchProps) => {
  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 50}}
      onChangeText={e => setText(e)}
      value={text}
    />
  );
};

export default Search;
