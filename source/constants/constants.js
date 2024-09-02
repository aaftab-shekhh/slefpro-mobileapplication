import moment from 'moment';
import {Dimensions} from 'react-native';

export const screens = {
  HRM: 'HRM',
  Home: 'Home',
  Task: 'Task',
  Forgot: 'Forgot',
  Profile: 'Profile',
  Project: 'Project',
  Message: 'Message',
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
  HRM: {
    counterTitle: 'Check in Time counter',
    checkInButton: 'Check In',
    checkOutButton: 'Check Out',
    hrmTitle: "Today's Attendance",
    present: 'Present',
    absent: 'Absent',
    punchedOut: 'Punched Out',
    seeAll: 'See All',
    attendance: 'Attendance',
    trackLeave: 'Track Leave',
    payroll: 'Payroll',
    notice: 'Notice',
    holidays: 'Holidays',
    more: 'Show More',
    coWorkerTitle: 'Co-Worker',
  },
  Task: {},
  Forgot: {
    title: 'Forgot Password',
    subTitle: 'Please provide work email id',
    continueButton: 'Continue',
  },
  Message: {},
  Profile: {},
  Project: {},
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
  UpdatePassword: {
    title: 'Enter New Password',
    subTitle: 'Please provide your new password',
    updateButton: 'Update',
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
  colorCAC4D0: 'rgba(202, 196, 208, 1)',
  color363942: 'rgba(54, 57, 66, 1)',
  colorF0F0F0: 'rgba(240, 240, 240, 1)',
  color8A8F9B: 'rgba(138, 143, 155, 1)',
  transparent_black: 'rgba(0, 0, 0, 0.2)',
  transparent: 'rgba(255, 255, 255, 0)',
  gray: 'rgba(128, 128, 128, 1)',
  darkGray: 'rgba(72, 72, 72, 1)',
  darkLightGray: 'rgba(150, 150, 150, 1)',
  lightGray: 'rgba(211, 211, 211, 1)',
  lighterGray: 'rgba(238, 238, 238, 1)',
  lightestGray: 'rgba(255, 255, 255, 1)',
  mediumGray: 'rgba(232, 229, 229, 1)',
  green: 'rgba(26, 208, 56, 1)',
  darkGreen: 'rgba(52, 160, 70, 1)',
  rad: 'rgba(216, 12, 12, 1)',
  blue: 'rgba(26, 56, 208, 1)',
};

export const lists = {
  taskTypeList: [
    {title: 'Any', value: 'any'},
    {title: 'None', value: 'none'},
    {title: 'Priority 1', value: 'priority_1'},
    {title: 'Priority 2', value: 'priority_2'},
    {title: 'Priority 3', value: 'priority_3'},
    {title: 'Priority 4', value: 'priority_4'},
  ],
  taskList: [
    {
      title: 'Today',
      data: [
        {
          priority: 'none',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_1',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_1',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
      ],
    },
    {
      title: 'Tomorrow',
      data: [
        {
          priority: 'priority_3',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_3',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_4',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
      ],
    },
    {
      title: 'Next week',
      data: [
        {
          priority: 'none',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_2',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_2',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_2',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
        {
          priority: 'priority_1',
          completed: false,
          date: moment().format('ddd lll'),
          task: 'Landing Page Agency Creative',
        },
      ],
    },
  ],
  projectTypeList: [
    {title: 'All', value: 'all'},
    {title: 'In Progress', value: 'in_progress'},
    {title: 'In Completed', value: 'in_completed'},
    {title: 'In Maintenance', value: 'in_maintenance'},
    {title: 'On Hold', value: 'on_hold'},
    {title: 'Cancelled', value: 'cancelled'},
    {title: 'Backlog', value: 'backlog'},
    {title: 'archived', value: 'archived'},
  ],
  projectList: [
    {
      date: moment().format('DD.MM.YY'),
      status: 'all',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'in_progress',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'in_completed',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'in_maintenance',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'on_hold',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'cancelled',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'backlog',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
    {
      date: moment().format('DD.MM.YY'),
      status: 'archived',
      title: 'Design NFT landing page shot',
      description:
        'Design a simple home pages with clean layout and color based on the guidelin to...',
      comment: 5,
      attachment: 4,
      clint_detail: {
        user_name: 'Merdan K.',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
    },
  ],
};

export const fontFamily = {};

export const errorMessages = {};

export const modelContent = {};

export const dynamic = {
  ...Dimensions.get('window'),
};
