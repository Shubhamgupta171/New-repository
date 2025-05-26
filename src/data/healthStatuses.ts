export const healthStatuses = [
  {
    id: 1,
    name: 'Lungs',
    date: '29 Oct 2021',
    status: 'warning' as 'good' | 'warning' | 'critical',
    percentage: 50,
    icon: 'https://img.icons8.com/color/48/lungs.png'
  },
  {
    id: 2,
    name: 'Teeth',
    date: '26 Oct 2021',
    status: 'good' as 'good' | 'warning' | 'critical',
    percentage: 80,
    icon: 'https://img.icons8.com/color/48/tooth.png'
  },
  {
    id: 3,
    name: 'Bone',
    date: '26 Oct 2021',
    status: 'warning' as 'good' | 'warning' | 'critical',
    percentage: 60,
    icon: 'src/assets/bone.jpg'
  }
];
