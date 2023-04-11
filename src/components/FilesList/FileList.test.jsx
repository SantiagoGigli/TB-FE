/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { useFetchFilesList } from './FilesList.hook';
import FileList from '.';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { useFilesListSelector } from '../../selectors/useFilesListSelector';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);
const store = mockStore({
  files: {
    error: undefined,
    isLoading: false,
    list: {
      'File1.csv': {
        file: 'File1.csv',
        lines: [{ text: 'cyxiuzycuixz', number: 123, hex: 'cxyzuicyxzuiyeiu' }],
      },
    },
  },
});

jest.mock('./FilesList.hook', () => ({
  useFetchFilesList: jest.fn(),
}));
jest.mock('../../selectors/useFilesListSelector.js', () => ({
  useFilesListSelector: jest.fn(),
}));

test('renders a table with rows and columns', async () => {
  const columns = ['File', 'Text', 'Number', 'Hex'];
  const data = [
    { file: 'file1', lines: [{ text: 'text1', number: 1, hex: '0x1' }] },
    { file: 'file2', lines: [{ text: 'text2', number: 2, hex: '0x2' }] },
  ];

  useFilesListSelector.mockReturnValue({
    data,
    error: undefined,
    isLoading: false,
  });
  useFetchFilesList.mockReturnValue({
    data,
    error: null,
    isLoading: false,
  });

  const { getByText } = render(
    <Provider store={store}>
      <FileList columns={columns} />
    </Provider>
  );
  await new Promise((resolve) => setTimeout(resolve, 0));

  for (const column of columns) {
    expect(getByText(column)).toBeInTheDocument();
  }

    data.forEach((item) => {
      item.lines.forEach((lines) => {
        expect(getByText(lines.text)).toBeInTheDocument();
        expect(getByText(lines.number.toString())).toBeInTheDocument();
        expect(getByText(lines.hex)).toBeInTheDocument();
      })
    })
});
