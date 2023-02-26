import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// TODO: import in external file all types
interface DetailsProps {
  info: string | number | boolean;
  keyItem: string;
}

const Details = ({info, keyItem}: DetailsProps) => {
  const [isText, setText] = useState('');
  const [isData, setData] = useState<string | number | boolean>('');

  useEffect(() => {
    if (typeof info === 'boolean') {
      setData(info ? 'Yes' : 'No');
    } else {
      setData(info);
    }
    switch (keyItem) {
      case 'name':
        setText('Type');
        break;
      case 'accuracy':
        setText('Accuracy');
        break;
      case 'base_happiness':
        setText('Base Happiness');
        break;
      case 'base_stat':
        setText('Base Stat');
        break;
      case 'capture_rate':
        setText('Capture Rate');
        break;
      case 'effort':
        setText('Effort');
        break;
      case 'hatch_counter':
        setText('Hatch Counter');
        break;
      case 'gender_rate':
        setText('Hatch Counter');
        break;
      case 'has_gender_differences':
        setText('Has Gender Difference');
        break;
      case 'forms_switchable':
        setText('Forms Switchable');
        break;
      case 'is_baby':
        setText('Is Baby');
        break;
      case 'is_legendary':
        setText('Is Legendary');
        break;
      case 'is_mythical':
        setText('Is Mythical');
        break;
      default:
        setData('');
    }
  }, []);

  return (
    <View>
      {isData !== '' && (
        <>
          <View style={styles.container}>
            <Text style={styles.text}>{isText}</Text>
            <Text style={styles.text}>{isData}</Text>
          </View>
          <View style={styles.line} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 17,
    color: '#2C4454',
  },
});

export default Details;
