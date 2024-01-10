import React, {FC, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Photo} from '../../types/Photo.interface';
import {RoutesNames} from '../../types/RoutesNames.enum';
import {RootStackParamList} from '../../routes';
import {styles} from './styles';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  RoutesNames.Gallery
>;

interface Props {
  photo: Photo;
}

const PhotoItem: FC<Props> = ({photo}) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate(RoutesNames.Photo, {photoUrl: photo.urls.full});
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.top}>
        <Image
          source={{uri: photo.urls.full}}
          style={styles.image}
          resizeMode="cover"
          onLoadEnd={handleLoadEnd}
        />
        {isLoading && (
          <ActivityIndicator style={styles.loader} size="large" color="white" />
        )}
        <Text style={styles.imageTitle}>@{photo.user.username}</Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.description}>{photo.alt_description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PhotoItem;
