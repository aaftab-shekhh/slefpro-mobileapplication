import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import Font600 from '../fonts/Font600';
// import KeyboardManager from 'react-native-keyboard-manager';
import {images} from '../../assets/images';
import {colors} from '../../constants/constants';

// if (Platform.OS === 'ios') {
//   KeyboardManager.setEnable(true);
//   KeyboardManager.setKeyboardDistanceFromTextField(10);
//   KeyboardManager.setEnableAutoToolbar(false);
// }

const Input = forwardRef(
  (
    {
      style,
      config,
      editable = true,
      keyboardType = 'default',
      onReturn = () => {},
      secureTextEntry,
      rightIcon,
      leftIcon,
      label,
      default_value,
    },
    ref,
  ) => {
    const [input, setInput] = useState(default_value);

    const [isVisible, setIsVisible] = useState(secureTextEntry);

    useImperativeHandle(
      ref,
      () => {
        return {
          set: value => {
            setInput(value);
          },
          get: () => input,
        };
      },
      [input],
    );

    const onChangHandler = useCallback(value => {
      setInput(value);
    }, []);

    const onVisibleTextToggleHandler = useCallback(() => {
      setIsVisible(prev => !prev);
    }, []);

    return (
      <View style={style?.root}>
        {label ? (
          <Font600 style={[styles.label, style?.label]}>{label}</Font600>
        ) : null}
        <View style={[styles.inputContainer, style?.inputContainer]}>
          {leftIcon ? (
            <Image
              source={leftIcon}
              style={[styles.icon, style?.leftIcon]}
              resizeMode="contain"
            />
          ) : null}

          <TextInput
            {...config}
            value={input}
            editable={editable}
            autoComplete={'off'}
            onSubmitEditing={onReturn}
            keyboardType={keyboardType}
            onChangeText={onChangHandler}
            style={[styles.input, style?.input]}
            cursorColor={colors.gray}
            selectionColor={colors.gray}
            secureTextEntry={isVisible}
          />
          {secureTextEntry ? (
            <Pressable onPress={onVisibleTextToggleHandler}>
              <Image
                source={images[isVisible ? 'visible' : 'hide']}
                style={styles.icon}
                resizeMode="contain"
              />
            </Pressable>
          ) : null}
          {rightIcon ? (
            <Image
              source={rightIcon}
              style={[styles.icon, style?.rightIcon]}
              resizeMode="contain"
            />
          ) : null}
        </View>
      </View>
    );
  },
);

export default memo(Input);

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.gray,
  },
  inputContainer: {
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: 400,
    color: colors.darkGray,
    paddingHorizontal: 16,
  },
  icon: {
    width: 16,
    height: 16,
    marginHorizontal: 14,
  },
});
