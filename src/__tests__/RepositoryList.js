import React, { useState } from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import {RepositoryListContainer } from '../components/RepositoryList';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
          const data={
             repositories: {
          pageInfo: {
            totalCount: 8,
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
          ],
          }
        };
  
              const { debug, getByTestId } = render(<RepositoryListContainer data={data} />);
              debug();
              expect(getByTestId('fullName')).toHaveTextContent('jaredpalmer/formik');
              expect(getByTestId('description')).toHaveTextContent('Build forms in React, without the tears');
              expect(getByTestId('language')).toHaveTextContent('TypeScript');
              expect(getByTestId('stargazersCount')).toHaveTextContent(21.9,'k');
              expect(getByTestId('forksCount')).toHaveTextContent(1.6,'k');
              expect(getByTestId('ratingAverage')).toHaveTextContent(88);
              expect(getByTestId('reviewCount')).toHaveTextContent(3);

              
      });
     
    });

   

  });