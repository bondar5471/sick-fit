import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import CartCount from '../components/CardCount'

describe('<CartCount/>', () => {
  const wrapper = shallow(<CartCount count={10}/>)
  it('renders', () => {
    shallow(<CartCount count={10} />)
  })

  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('update via props ', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({count: 15})
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});