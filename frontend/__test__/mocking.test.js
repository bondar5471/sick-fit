describe('mocking learning', () => {
  it('mocks a reg function', ()=> {
    const fetchList = jest.fn()
    fetchList()
    expect(fetchList).toHaveBeenCalled()
  })
});