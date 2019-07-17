describe('Name of the group', () => {
  it('works as expected', () => {
    expect(1).toEqual(1)
    expect(1).toEqual(1)
  })
  it('handle ranges just fine', ()=>{
    const age = 200
    expect(age).toBeGreaterThan(100)
  })
  it('make list of dog name', ()=> {
    const dogs = ['ali', 'rahum']
    expect(dogs).toContain('ali')
  })
});