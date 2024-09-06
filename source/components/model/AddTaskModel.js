import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import label from '../../constants/label';
import modelContent from '../../constants/modelContent';
import Font400 from '../fonts/Font400';
import Input from '../styles/Input';
import BackDrop from './Backdrop';
import {images} from '../../assets/images';

const {title} = modelContent.AddTaskModel;
const {task_title, description} = label;

const AddTaskModel = forwardRef(({}, ref) => {
  const {bottom} = useSafeAreaInsets();

  const bottomRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          bottomRef?.current?.present();
        },
        close: () => bottomRef?.current?.dismiss(),
      };
    },
    [],
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
          snapPoints={[260 + bottom]}
          backdropComponent={backDropHandler}
          backgroundStyle={{backgroundColor: colors.colorECF0F7}}
          handleComponent={() => (
            <View style={styles.handleComponent}>
              <View style={styles.handle} />
            </View>
          )}>
          <View style={[styles.content, {paddingBottom: 30}]}>
            <Font400 style={styles.title}>{title}</Font400>
            <Input config={{placeholder: task_title}} style={styles.input} />
            <Input config={{placeholder: description}} style={styles.input} />
            <View style={styles.footerContainer}>
              <Image
                source={images.timer}
                resizeMode="contain"
                style={styles.timerIcon}
              />
              <Image
                tintColor={colors.black}
                source={images.project}
                resizeMode="contain"
                style={styles.projectIcon}
              />
              <Image
                source={images.flag}
                resizeMode="contain"
                style={styles.flagIcon}
              />
              <View style={{flex: 1}} />
              <Image
                source={images.send}
                resizeMode="contain"
                style={styles.sendIcon}
              />
            </View>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  );
});

export default memo(AddTaskModel);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.colorECF0F7,
  },
  handleComponent: {
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handle: {
    width: 66,
    height: 4,
    borderRadius: 10,
    backgroundColor: colors.colorCAC4D0,
  },
  title: {
    marginTop: 46,
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    inputContainer: {marginBottom: 12},
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  timerIcon: {
    height: 24,
    marginRight: 32,
    width: 24,
  },
  projectIcon: {
    height: 24,
    width: 24,
    marginRight: 32,
  },
  flagIcon: {
    height: 24,
    width: 24,
  },
  sendIcon: {
    height: 24,
    width: 24,
  },
});
