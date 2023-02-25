import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Info from './Info';

const Item = ({name, id}: any) => {
  return (
    <Collapse>
      <CollapseHeader>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            }}
          />
          <Text style={styles.text}>{name}</Text>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Info id={id} />
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Item;
