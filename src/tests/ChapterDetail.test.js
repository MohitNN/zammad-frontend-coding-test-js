/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
import ChapterDetail from '../components/ChapterDetail.vue';

describe('ChapterDetail', () => {
  it('renders correctly with data', async () => {
    const apiGetChaptersDataMock = jest.fn(() => Promise.resolve({ /* mocked chapters data */ }));
    const apiGetChaptersVerseDataMock = jest.fn(() => Promise.resolve({ /* mocked verse data */ }));

    const toastMock = jest.fn();

    const wrapper = mount(ChapterDetail, {
      global: {
        mocks: {
          $toast: toastMock,
        },
        stubs: ['vue-awesome-paginate', 'Loader', 'Verse', 'Left', 'Right'],
      },
      data() {
        return {
          currentPage: 1,
          verse: [],
          chapters: null,
          loader: false,
        };
      },
      methods: {
        apiGetChaptersData: apiGetChaptersDataMock,
        apiGetChaptersVerseData: apiGetChaptersVerseDataMock,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.text-2xl').text()).toBe('अध्याय'); 
  });
});