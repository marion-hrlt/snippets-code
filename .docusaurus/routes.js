import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '43c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '13f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4a9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f9b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e9f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '64f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c4f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '228'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ba8'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c33'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '795'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '45b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f95'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '1d3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c13'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '79d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '133'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e76'),
    routes: [
      {
        path: '/docs/category/components',
        component: ComponentCreator('/docs/category/components', '577'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/javascript',
        component: ComponentCreator('/docs/category/javascript', 'bb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/wordpress',
        component: ComponentCreator('/docs/category/wordpress', '6f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-components/double-range',
        component: ComponentCreator('/docs/snippets-components/double-range', '297'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-components/toggle-button',
        component: ComponentCreator('/docs/snippets-components/toggle-button', '0a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-javascript/basic-functions',
        component: ComponentCreator('/docs/snippets-javascript/basic-functions', '08b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-javascript/debounce-function',
        component: ComponentCreator('/docs/snippets-javascript/debounce-function', '10d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-wordpress/ajax-wordpress',
        component: ComponentCreator('/docs/snippets-wordpress/ajax-wordpress', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-wordpress/basic-functions',
        component: ComponentCreator('/docs/snippets-wordpress/basic-functions', 'a51'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-wordpress/cron',
        component: ComponentCreator('/docs/snippets-wordpress/cron', 'a29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/snippets-wordpress/nav-walker',
        component: ComponentCreator('/docs/snippets-wordpress/nav-walker', '7e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '137'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
