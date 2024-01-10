import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import Colors from '../../constants/theme';
import {useAppDispatch, useAppSelector} from '../../app/store';
import {fetchPhotos} from '../../features/photo/photoSlice';
import PhotoItem from '../PhotoItem';
import {styles} from './styles';

const PhotoList: FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const {photos, isLoading, error} = useAppSelector(state => state.photo);

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  let content = (
    <>
      {!!photos.length && (
        <FlatList
          data={photos}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({item: photo}) => <PhotoItem photo={photo} />}
        />
      )}
      {isLoading && <ActivityIndicator size="large" color={Colors.primary} />}
    </>
  );

  if (error) {
    content = <Text style={styles.error}>{error}</Text>;
  }

  return <View style={styles.root}>{content}</View>;
};

export default PhotoList;
