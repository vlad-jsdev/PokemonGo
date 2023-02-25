import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {useLazyQuery, gql} from '@apollo/client';

import Search from '../components/Search';
import PokemonList from '../components/PokemonList';

const heightScreen = Dimensions.get('window').height;

const GET_POKEMONS = gql`
  query GetPokemons($items: Int!, $search: String!) {
    pokemon_v2_pokemon(
      limit: 16
      offset: $items
      where: {name: {_iregex: $search}}
    ) {
      name
      id
      weight
    }
  }
`;

type Pokemon = {
  __typename: string;
  id: number;
  name: string;
  weight: number;
};

const Home = () => {
  const [isAmountItems, setAmountItems] = useState<number>(0);
  const [isText, setText] = useState<string>('');
  const [isData, setData] = useState<Pokemon[] | []>([]);
  // TODO: Style Loading and make Error if data not fetching
  const [loadItems, {loading, data}] = useLazyQuery(GET_POKEMONS, {
    variables: {items: isAmountItems, search: isText?.toLowerCase()},
  });

  const handleLoadMore = () => {
    setAmountItems(isAmountItems + 16);
    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (isText === '' && data?.pokemon_v2_pokemon) {
      setData([...new Set([...isData, ...data.pokemon_v2_pokemon])]);
    }
    if (data?.pokemon_v2_pokemon.length === 0 || isText.length === 1) {
      setAmountItems(0);
      setData([]);
      loadItems();
    }
    if (isText.length > 2 && data && data.pokemon_v2_pokemon) {
      setAmountItems(0);
      setData(data.pokemon_v2_pokemon);
    }
  }, [data, isText]);

  return (
    <View style={styles.sectionContainer}>
      <Search setText={setText} text={isText} />
      {loading ? (
        <Text style={styles.loadingStyle}>Loading...</Text>
      ) : (
        <PokemonList data={isData} loadMore={handleLoadMore} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: heightScreen,
    paddingHorizontal: 24,
    backgroundColor: '#947464',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C4454',
  },
  loadingStyle: {
    fontSize: 20,
  },
});

export default Home;
