/* eslint-disable no-undef */
// src/components/Chapter.spec.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Chapter from '../components/Chapter.vue';

describe('Chapter.vue', () => {
  it('renders the component with provided data', async () => {
    const props = {
      ChaptersData: {
        id: 1,
        chapter_number: 1,
        name: 'Chapter Name',
        verses_count: 10,
        chapter_summary_hindi: 'Chapter Summary',
      },
    };

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'Home',
          component: { template: '<div>Home</div>' }, 
        },
        {
          path: '/view-chapters/:id',
          name: 'ViewChapters',
          component: { template: '<div>ViewChapters</div>' }, 
        },
      ],
    });

    const wrapper = mount(Chapter, {
      props,
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain('अध्याय १');
    expect(wrapper.text()).toContain('Chapter Name');
    expect(wrapper.text()).toContain('(१० छंद)');
    expect(wrapper.text()).toContain('Chapter Summary');
  });
});
