import {Dimensions} from 'react-native';

export const screens = {
  HRM: 'HRM',
  Forgot: 'Forgot',
  Profile: 'Profile',
  AppStack: 'AppStack',
  WellCome: 'WellCome',
  AuthStack: 'AuthStack',
  UserSignIn: 'UserSignIn',
  BottomStack: 'BottomStack',
  UpdatePassword: 'UpdatePassword',
  OtpVerification: 'OtpVerification',
  OrganizationSignIn: 'OrganizationSignIn',
};

export const screensContent = {
  HRM: {},
  Forgot: {
    title: 'Forgot Password',
    subTitle: 'Please provide work email id',
    continueButton: 'Continue',
  },
  UpdatePassword: {
    title: 'Enter New Password',
    subTitle: 'Please provide your new password',
    updateButton: 'Update',
  },
  Profile: {},
  AppStack: {},
  WellCome: {
    pages: [
      {
        key: 1,
        title: 'Increase yout team’s Productivity',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        key: 2,
        title: 'Increase yout team’s Productivity',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
      {
        key: 3,
        title: 'Increase yout team’s Productivity',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
    ],
  },
  AuthStack: {},
  UserSignIn: {
    subTitle: 'Hello there, login to FinScanner AI solution PVT. LTD.',
    loginButton: 'Login',
  },
  BottomStack: {},
  OtpVerification: {
    title: 'Enter OTP ',
    subTitle: 'We have sent the code to your provided email address',
    verifyButton: 'Verify',
  },
  OrganizationSignIn: {
    title: 'Welcome',
    subTitle: 'Hello there, Enter Organization Name',
    continueButton: 'Continue',
  },
};

export const label = {
  skip: 'Skip',
  organization: 'Organization',
  your_work_email: 'Your work email',
  password: 'Password',
  forgot_password: 'Forgot Password?',
  resend_code: 'Resend Code',
  new_password: 'New Password',
  confirm_password: 'Confirm Password',
};

export const colors = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  colorE43958: 'rgba(228, 57, 88, 1)',
  colorE5E5EA: 'rgba(229, 229, 234, 1)',
  colorECF0F7: 'rgba(236, 240, 247, 1)',
  transparent_black: 'rgba(0, 0, 0, 0.2)',
  transparent: 'rgba(255, 255, 255, 0)',
  gray: 'rgba(128, 128, 128, 1)',
  darkGray: 'rgba(72, 72, 72, 1)',
  darkLightGray: 'rgba(150, 150, 150, 1)',
  lightGray: 'rgba(211, 211, 211, 1)',
  lighterGray: 'rgba(238, 238, 238, 1)',
  lightestGray: 'rgba(255, 255, 255, 1)',
  mediumGray: 'rgba(232, 229, 229, 1)',
};

export const fontFamily = {};

export const errorMessages = {};

export const modelContent = {};

export const dynamic = {
  ...Dimensions.get('window'),
};
