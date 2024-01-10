import React, {FC} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import PhotoList from '../../components/PhotoList';

const GalleryScreen: FC = () => {
  return (
    <View style={styles.root}>
      <PhotoList />
    </View>
  );
};

export default GalleryScreen;
