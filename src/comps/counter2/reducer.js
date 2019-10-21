export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'COUNT_INCREMENT':
      val=
      {
        ...val
        ,count:val.count+1
      }
      return val
    case 'COUNT_DECREMENT':
      val=
      {
        ...val
        ,count:val.count-1
      }
      return val
    default:
      return val
  }
}
