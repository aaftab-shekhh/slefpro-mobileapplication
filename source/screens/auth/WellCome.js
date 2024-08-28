import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Font400 from '../../components/fonts/Font400';
import Font700 from '../../components/fonts/Font700';
import {
  colors,
  dynamic,
  label,
  screens,
  screensContent,
} from '../../constants/constants';

const {pages} = screensContent.WellCome;
const {skip} = label;

const WellCome = () => {
  const {top, bottom} = useSafeAreaInsets();

  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const {navigate} = useNavigation();

  const {width: screenWidth} = Dimensions.get('window');

  const onPageChange = useCallback(event => {
    const {contentOffset} = event.nativeEvent;
    const pageIndex = Math.round(contentOffset.x / screenWidth);
    setCurrentPage(pageIndex);
  }, []);

  useEffect(() => {
    const scrollTimer = setTimeout(
      () => {
        if (currentPage < pages.length - 1) {
          setCurrentPage(prev => prev + 1);
          flatListRef.current.scrollToIndex({index: currentPage + 1});
        }
      },
      currentPage === 0 ? 7000 : 5000,
    );

    return () => clearTimeout(scrollTimer);
  }, [currentPage, pages.length]);

  const onContinua = useCallback(() => {
    if (currentPage === 2) {
      navigate(screens.OrganizationSignIn);
    } else {
      if (currentPage < pages.length - 1) {
        flatListRef.current.scrollToIndex({index: currentPage + 1});
        setCurrentPage(prev => prev + 1);
      }
    }
  }, [pages, currentPage]);

  return (
    <View style={{paddingTop: top + 20, flex: 1}}>
      <Pressable
        onPress={() => navigate(screens.OrganizationSignIn)}
        style={styles.skipContainer}>
        <Font400 style={styles.skip}>{skip}</Font400>
      </Pressable>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{flexGrow: 1}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={pages}
        renderItem={({item}) => (
          <View style={styles.content}>
            <FastImage
              style={styles.image}
              source={images.wellComeImage1}
              resizeMode="contain"
            />
            <Font700 style={styles.title}>{item.title}</Font700>
            <Font400 style={styles.subTitle}>{item.message}</Font400>
          </View>
        )}
        keyExtractor={item => item.key}
        onMomentumScrollEnd={onPageChange} // Update currentPage when scrolling ends
      />

      <View
        style={{
          marginVertical: 20,
          height: 50,
          paddingVertical: 54,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {pages.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              flatListRef.current.scrollToIndex({index});
              setCurrentPage(index);
            }}
            style={[
              styles.pagination,
              index === currentPage ? styles.activePagination : null,
            ]}
          />
        ))}
      </View>
      <View style={{flex: 1}} />
      <Pressable
        style={[
          styles.buttonContainer,
          {marginBottom: bottom + 10, marginHorizontal: 20},
        ]}
        onPress={onContinua}>
        <FastImage
          style={styles.button}
          source={images.next}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default memo(WellCome);

const styles = StyleSheet.create({
  skipContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  image: {
    marginHorizontal: 50,
    borderRadius: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: dynamic.width - 100,
    height: dynamic.width - 100,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 54,
    width: dynamic.width,
  },
  title: {
    fontSize: 24,
    paddingTop: 35,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    paddingTop: 16,
    textAlign: 'center',
  },
  paginationContainer: {
    height: 50,
    paddingVertical: 54,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 7,
    marginHorizontal: 10,
    backgroundColor: colors.colorE5E5EA,
  },
  activePagination: {
    width: 20,
    backgroundColor: colors.colorE43958,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    height: 64,
    width: 64,
  },
});
