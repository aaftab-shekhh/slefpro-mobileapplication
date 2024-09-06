import React, {memo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

const OtpInput = ({onChangeTextHandler}) => {
  const otpRef = useRef();

  return (
    <View style={styles.otpContainer}>
      <OtpInputs
        ref={otpRef}
        clearTextOnFocus
        numberOfInputs={4}
        keyboardType="phone-pad"
        handleChange={onChangeTextHandler}
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
        inputStyles={{
          flex: 1,
          fontSize: 16,
          textAlign: 'center',
          color: colors.black,
          fontFamily: fontFamily.Font400,
        }}
        inputContainerStyles={{
          width: 64,
          height: 48,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}
      />
    </View>
  );
};

export default memo(OtpInput);

const styles = StyleSheet.create({
  otp: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
  },
});
