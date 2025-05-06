import { ResourceProps } from '@refinedev/core';
import React from 'react';
import { MdGroups2, MdMenuBook, MdAssignment, MdCategory } from 'react-icons/md';

export const resources: ResourceProps[] = [
  {
    name: 'members',
    list: '/member/list',
    create: '/member/create',
    edit: '/member/edit/:id',
    show: '/member/show/:id',
    meta: {
      icon: React.createElement(MdGroups2),
    },
  },
  {
    name: 'books',
    list: '/book/list',
    create: '/book/create',
    edit: '/book/edit/:id',
    show: '/book/show/:id',
    meta: {
      icon: React.createElement(MdMenuBook),
    },
  },
  {
    name: 'borrowings',
    list: '/borrowing/list',
    create: '/borrowing/create',
    edit: '/borrowing/edit/:id',
    show: '/borrowing/show/:id',
    meta: {
      icon: React.createElement(MdAssignment),
    },
  },
  {
    name: 'genres',
    list: '/genre/list',
    create: '/genre/create',
    edit: '/genre/edit/:id',
    meta: {
      icon: React.createElement(MdCategory),
    },
  },
];
