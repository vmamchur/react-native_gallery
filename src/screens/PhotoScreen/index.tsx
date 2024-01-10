import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RoutesNames} from '../../types/RoutesNames.enum';
import {styles} from './styles';
import {RootStackParamList} from '../../routes';

type PhotoScreenRouteProp = RouteProp<RootStackParamList, RoutesNames.Photo>;

interface Props {
  route: PhotoScreenRouteProp;
}

const PhotoScreen: FC<Props> = ({route}) => {
  const {photoUrl} = route.params;

  return (
    <View style={styles.root}>
      <Image source={{uri: photoUrl}} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default PhotoScreen;
