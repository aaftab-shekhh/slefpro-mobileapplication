import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import moment from 'moment';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';
import colors from '../../constant/colors';
import Font600 from '../fonts/Font600';
import Button from '../styles/Button';
import BackDrop from './Backdrop';
import DatePicker from 'react-native-date-picker';

const DatePickerModel = forwardRef(({onPress, config}, ref) => {
  const bottomRef = useRef();
  const [time, setTime] = useState(new Date());

  useImperativeHandle(
    ref,
    () => {
      return {
        open: new_date => {
          bottomRef?.current?.present();
          if (new_date) {
            setTime(new Date(moment(new_date, 'dd-mm-yyyy')));
          }
        },
        close: () => bottomRef?.current?.dismiss(),
        value: () => time,
      };
    },
    [time],
  );

  const backDropHandler = useCallback(backdropProps => (
    <BackDrop
      {...backdropProps}
      enableTouchThrough={true}
      onPress={() => {
        bottomRef.current?.dismiss();
      }}
    />
  ));

  const close = useCallback(() => {
    bottomRef?.current?.dismiss();
  }, []);

  return (
    <Portal>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomRef}
          index={0}
          snapPoints={[400]}
          backdropComponent={backDropHandler}>
          <View style={[styles.content, {paddingBottom: 30}]}>
            <View style={styles.header}>
              <Font600 style={styles.title}>{'Date'}</Font600>
              <Pressable onPress={close} style={styles.closeIconContainer}>
                <FastImage
                  style={styles.closeIcon}
                  source={images.close}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            <View style={styles.timeContainer}>
              <DatePicker
                date={time}
                mode="date"
                textColor="black"
                onDateChange={setTime}
                {...config}
              />
            </View>
            <Button
              onPress={onPress}
              style={styles.button}
              buttonText={styles.buttonText}>
              {'Save'}
            </Button>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  );
});

export default memo(DatePickerModel);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.black,
  },
  buttonText: {
    color: colors.white,
  },
});
