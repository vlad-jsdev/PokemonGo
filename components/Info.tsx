import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const GET_POKEMON_INFO = gql`
  query GetPokemonInfo($id: Int!) {
    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      base_happiness
      capture_rate
      evolution_chain_id
      gender_rate
      has_gender_differences
      is_baby
      is_legendary
      is_mythical
      id
      hatch_counter
      growth_rate_id
      forms_switchable
      evolves_from_species_id
      pokemon_color_id
      pokemon_habitat_id
      pokemon_shape_id
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
const Info = ({id}: any) => {
  const {loading, error, data} = useQuery(GET_POKEMON_INFO, {
    variables: {id: id},
  });
  const [isInfo, setInfo] = useState({});
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
  console.log('ITEM: ', isInfo);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Info;
