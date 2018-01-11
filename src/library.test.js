import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils'
import Library from './pages/library'

xit('library renders without crashing', () => {
  const tree = renderer(create(
    <MockedProvider mocks ={[]}>
      <Library />
    </MockedProvider>).toJSON())
   expect(tree).toMatchSnapshot()})