import React from 'react';
import {AccordionList} from 'accordion-collapse-react-native';

import Item from './Item';

// TODO: import in external file all types
type Pokemon = {
  __typename: string;
  id: number;
  name: string;
  weight: number;
};
interface PokemonListProps {
  data: Pokemon[];
  loadMore: () => void;
}

const PokemonList = ({data, loadMore}: PokemonListProps) => {
  return (
    <AccordionList
      data={data}
      renderItem={({item}: {item: Pokemon}) => <Item {...item} />}
      keyExtractor={(item: Pokemon) => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PokemonList;
