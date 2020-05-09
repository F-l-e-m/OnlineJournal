export default {
  name: 'Sidebar',
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Главная', url: '/', exact: true },
      { title: 'Новая запись', url: '/newnote' },
      { title: 'История записей', url: '/history' },
    ],
  }),
};
