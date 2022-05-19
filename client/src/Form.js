function Form(props) {
  return (
    <form className="App" onSubmit={props.handleSubmit}>
      <br />
      Name:{' '}
      <input value={props.name} onChange={(e) => props.handleChange1(e.target.value)} />
      <br />
      <br />
      Email:{' '}
      <input value={props.email} onChange={(e) => props.handleChange2(e.target.value)} />
      <br />
      <br />
      Password:{' '}
      <input value={props.password} onChange={(e) => props.handleChange3(e.target.value)} />
      <input type="submit" />
    </form>
  )
}

export default Form
