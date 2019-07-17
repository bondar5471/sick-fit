import { mount } from 'enzyme';
import wait from 'waait';
import Router from 'next/router'
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';
import toJSON from 'enzyme-to-json'
import { MockedProvider } from 'react-apollo/test-utils';

Router.router = {
  push() {},
  prefetch() {}
}

function makeMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY},
      result: {
        data: {
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              __typename: 'count',
              count: length
            }
          }
        }
      }
    }
  ]
}

describe('<Pagination />', () => {
  it('display a loading message', () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    )
    expect(wrapper.text()).toContain('Loading...')
  });
  it('render pagination for 18 items', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    )
    await wait()
    wrapper.update()
    expect(wrapper.find('.totalPages').text()).toEqual('5')
  });
});