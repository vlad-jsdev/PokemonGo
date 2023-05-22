import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// TODO: import in external file all types
type SearchProps = {
  text: string;
  setText: (text: string) => void;
};

const Search = ({setText, text}: SearchProps) => {
  return (
    <TextInput
      style={styles.inputStyle}
      onChangeText={e => setText(e)}
      value={text}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 20,
    paddingHorizontal: 30,
    backgroundColor: '#C0C4CC',
  },
});

export default Search;
