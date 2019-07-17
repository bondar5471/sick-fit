import ItemComponent from '../components/Item'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

const fakeItem = {
  id: 'test',
  title: 'test',
  price: '4000',
  description: 'test description',
  image: 'test.jpg',
  largeImage: 'largetest.js'
}

describe('<Item />', () => {
  // const wrapper = shallow(<ItemComponent item={fakeItem} />)

  // it('render price and title properly', () => {
  //   const PriceTag = wrapper.find('PriceTag')
  //   expect(PriceTag.children().text()).toBe('$50')
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title)
  
  // })

  // it('render images properly', ()=> {
  //   expect(wrapper.find('img').props().src).toBe(fakeItem.image)
  //   expect(wrapper.find('img').props().alt).toBe(fakeItem.title)
  // })

  // it('renders out the button properly' , () => {
  //   const buttonList = wrapper.find('.buttonList')
  //   expect(buttonList.children()).toHaveLength(3)
  //   expect(buttonList.find('Link')).toHaveLength(1)
  //   expect(buttonList.find('AddToCart')).toHaveLength(1)
  //   expect(buttonList.find('DeleteItem')).toHaveLength(1)
  // })

  it('render and matches the snapshot ', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
    });
});