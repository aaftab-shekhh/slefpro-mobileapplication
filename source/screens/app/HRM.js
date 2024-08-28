import React, {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Font400 from '../../components/fonts/Font400';
import Font500 from '../../components/fonts/Font500';
import Font600 from '../../components/fonts/Font600';
import Header from '../../components/styles/Header';
import {colors, screensContent} from '../../constants/constants';
import Button from '../../components/styles/Button';

const {counterTitle, checkInButton, checkOutButton} = screensContent.HRM;

const HRM = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.counterContainer}>
          <Font500 style={styles.title}>{counterTitle}</Font500>
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
      </ScrollView>
    </View>
  );
};

export default memo(HRM);

const styles = StyleSheet.create({
  counterContainer: {
    padding: 20,
    elevation: 4,
    marginTop: 30,
    shadowRadius: 8,
    borderRadius: 10,
    shadowOpacity: 0.1,
    marginHorizontal: 22,
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOffset: {height: 2, width: 0},
  },
  title: {
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
});
