import React from 'react';
import {AccordionList} from 'accordion-collapse-react-native';
import Item from './Item';

const PokemonList = ({data, loadMore}: any) => {
  return (
    <AccordionList
      data={data}
      renderItem={({item}: any) => <Item {...item} />}
      keyExtractor={(item: any) => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PokemonList;
