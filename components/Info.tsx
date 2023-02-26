import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import Details from './Details';

const GET_POKEMON_INFO = gql`
  query GetPokemonInfo($id: Int!) {
    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      base_happiness
      capture_rate
      gender_rate
      has_gender_differences
      is_baby
      is_legendary
      is_mythical
      hatch_counter
      forms_switchable
    }
    pokemon_v2_pokemonstat(where: {id: {_eq: $id}}) {
      base_stat
      effort
    }
    pokemon_v2_type(where: {id: {_eq: $id}}) {
      name
    }
    pokemon_v2_move(where: {id: {_eq: $id}}) {
      accuracy
    }
  }
`;

// TODO: import in external file all types
type isInfoIF = {
  __typename: string;
  base_happiness: number;
  capture_rate: number;
  gender_rate: number;
  has_gender_differences: boolean;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  forms_switchable: boolean;
  base_stat: number;
  effort: number;
  name: string;
  accuracy: number;
};

type InfoProps = {
  id: number;
};

const Info = ({id}: InfoProps) => {
  // TODO: Style Loading and make Error if data not fetching
  const {data} = useQuery(GET_POKEMON_INFO, {
    variables: {id: id},
  });
  const [isInfo, setInfo] = useState<isInfoIF>();
  useEffect(() => {
    if (
      data &&
      data?.pokemon_v2_pokemonspecies &&
      data?.pokemon_v2_pokemonstat &&
      data?.pokemon_v2_type &&
      data?.pokemon_v2_move
    ) {
      setInfo({
        ...data.pokemon_v2_pokemonspecies[0],
        ...data.pokemon_v2_pokemonstat[0],
        ...data.pokemon_v2_type[0],
        ...data.pokemon_v2_move[0],
      });
    }
  }, [data]);
  return (
    <View style={styles.container}>
      {isInfo &&
        Object.keys(isInfo).map(item => {
          const infoItem = isInfo[item as keyof isInfoIF];
          return <Details key={item} info={infoItem} keyItem={item} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6D676',
    borderRadius: 20,
    padding: 20,
  },
});

export default Info;
