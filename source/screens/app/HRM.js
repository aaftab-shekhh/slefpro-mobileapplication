import moment from 'moment';
import React, {memo, useCallback} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import Font400 from '../../components/fonts/Font400';
import Font500 from '../../components/fonts/Font500';
import Font600 from '../../components/fonts/Font600';
import Font700 from '../../components/fonts/Font700';
import CoWorkerItem from '../../components/items/CoWorkerItem';
import Button from '../../components/styles/Button';
import Header from '../../components/styles/Header';
import {colors, dynamic, screensContent} from '../../constants/constants';

const {
  counterTitle,
  checkInButton,
  checkOutButton,
  hrmTitle,
  seeAll,
  present,
  absent,
  punchedOut,
  attendance,
  trackLeave,
  payroll,
  notice,
  holidays,
  more,
  coWorkerTitle,
} = screensContent.HRM;

const HRM = () => {
  const renderItemHandler = useCallback(() => {
    return <CoWorkerItem />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 20}}>
        <View style={styles.container}>
          <Font500 style={styles.counterTitle}>{counterTitle}</Font500>
          <View style={styles.timeContainer}>
            <View style={styles.time}>
              <Font600 style={styles.timeText}>{'01'}</Font600>
            </View>
            <Font400 style={styles.timeText}>{':'}</Font400>
            <View style={styles.time}>
              <Font600 style={styles.timeText}>{'03'}</Font600>
            </View>
            <Font400 style={styles.timeText}>{':'}</Font400>
            <View style={styles.time}>
              <Font600 style={styles.timeText}>{'45'}</Font600>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.checkInButton}>{checkInButton}</Button>
            <Button style={styles.checkOutButton}>{checkOutButton}</Button>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.hrmHeader}>
            <View style={styles.hrmTitleContainer}>
              <Font500 style={styles.hrmTitle}>{hrmTitle}</Font500>
              <Font400 style={styles.hrmDate}>
                {moment().format('ddd ll')}
              </Font400>
            </View>
            <Pressable style={styles.hrmSellAllContainer}>
              <Font600 style={styles.hrmSellAll}>{seeAll}</Font600>
              <Image
                tintColor={colors.gray}
                resizeMode="contain"
                source={images.arrow}
                style={styles.arrowIcon}
              />
            </Pressable>
          </View>
          <View style={styles.hrmDetail}>
            <View style={styles.hrmSection}>
              <Font400 style={styles.hrmSectionTitle}>{present}</Font400>
              <Font700
                style={[styles.hrmSectionValue, {color: colors.darkGreen}]}>
                {'24'}
              </Font700>
            </View>
            <View style={{width: 1, backgroundColor: colors.gray}} />
            <View style={styles.hrmSection}>
              <Font400 style={styles.hrmSectionTitle}>{absent}</Font400>
              <Font700 style={[styles.hrmSectionValue, {color: colors.rad}]}>
                {'4'}
              </Font700>
            </View>
            <View style={{width: 1, backgroundColor: colors.gray}} />
            <View style={styles.hrmSection}>
              <Font400 style={styles.hrmSectionTitle}>{punchedOut}</Font400>
              <Font700 style={[styles.hrmSectionValue, {color: colors.blue}]}>
                {'12'}
              </Font700>
            </View>
          </View>
        </View>
        <View style={styles.hrmOptionContainer}>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.attendance}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{attendance}</Font400>
          </View>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.track_leave}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{trackLeave}</Font400>
          </View>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.payroll}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{payroll}</Font400>
          </View>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.notice}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{notice}</Font400>
          </View>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.holidays}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{holidays}</Font400>
          </View>
          <View style={styles.hrmOption}>
            <FastImage
              style={styles.hrmOptionIcon}
              source={images.more}
              resizeMode="contain"
            />
            <Font400 style={styles.hrmOptionTitle}>{more}</Font400>
          </View>
        </View>
        <View style={styles.coWorkerContainer}>
          <View style={styles.coWorkerHeader}>
            <Font500 style={styles.commonTitle}>{coWorkerTitle}</Font500>
            <Pressable style={styles.coWorkerAllContainer}>
              <Font600 style={styles.coWorkerAll}>{seeAll}</Font600>
              <Image
                tintColor={colors.gray}
                resizeMode="contain"
                source={images.arrow}
                style={styles.arrowIcon2}
              />
            </Pressable>
          </View>
          <FlatList
            horizontal
            data={Array(10).fill(0)}
            renderItem={renderItemHandler}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index?.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(HRM);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 4,
    marginTop: 12,
    shadowRadius: 8,
    borderRadius: 10,
    shadowOpacity: 0.1,
    marginHorizontal: 22,
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOffset: {height: 2, width: 0},
  },
  counterTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  time: {
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 4,
    backgroundColor: colors.lighterGray,
  },
  timeText: {
    fontSize: 18,
  },
  timeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkInButton: {
    buttonContainer: {
      height: 32,
      marginRight: 5,
      borderRadius: 6,
      backgroundColor: colors.green,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  checkOutButton: {
    buttonContainer: {
      height: 32,
      marginLeft: 5,
      borderRadius: 6,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  hrmHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrmTitleContainer: {
    flex: 1,
  },
  hrmSellAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrmSellAll: {
    fontSize: 12,
    paddingHorizontal: 4,
    color: colors.gray,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    transform: [{rotate: '315deg'}],
  },
  commonTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  hrmDate: {
    fontSize: 12,
  },
  hrmDetail: {
    paddingTop: 18,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  hrmSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hrmSectionTitle: {
    fontSize: 12,
  },
  hrmSectionValue: {
    fontSize: 22,
  },
  hrmOptionContainer: {
    marginTop: 10,
    paddingHorizontal: 22,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hrmOption: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkLightGray,
    width: (dynamic.width - 104) / 3,
    borderRadius: (dynamic.width - 104) / 30,
  },
  hrmOptionIcon: {
    width: 24,
    height: 24,
  },
  hrmOptionTitle: {
    fontSize: 12,
    paddingTop: 10,
  },
  coWorkerContainer: {
    paddingTop: 20,
    paddingHorizontal: 22,
  },
  coWorkerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  coWorkerAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coWorkerAll: {
    fontSize: 14,
    paddingHorizontal: 8,
    color: colors.gray,
  },
  arrowIcon2: {
    width: 14,
    height: 14,
    transform: [{rotate: '315deg'}],
  },
});
