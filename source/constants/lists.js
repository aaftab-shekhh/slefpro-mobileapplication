import moment from 'moment';

export default lists = {
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
