import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useLazyQuery, gql} from '@apollo/client';

import Search from '../components/Search';
import PokemonList from '../components/PokemonList';

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

const Home = () => {
  const [isAmountItems, setAmountItems] = useState<number>(0);
  const [isText, setText] = useState<string>('');
  const [isData, setData] = useState<any>([]);

  const [loadItems, {loading, error, data}] = useLazyQuery(GET_POKEMONS, {
    variables: {items: isAmountItems, search: isText?.toLowerCase()},
    // onCompleted: pokemons =>
    //   setData([...isData, ...pokemons.pokemon_v2_pokemon]),
  });

  console.log('loading: ', loading);
  console.log('error: ', error);

  const handleLoadMore = () => {
    setAmountItems(isAmountItems + 16);
    loadItems();
  };

  console.log('text: ', isText);
  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    console.log('DataFIRST: ', data);
    console.log('isData: ', isData);

    if (isText === '' && data?.pokemon_v2_pokemon) {
      setData([...new Set([...isData, ...data.pokemon_v2_pokemon])]);
    }
    if (data?.pokemon_v2_pokemon.length === 0 || isText.length === 1) {
      console.log('here2');
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
      <PokemonList data={isData} loadMore={handleLoadMore} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
