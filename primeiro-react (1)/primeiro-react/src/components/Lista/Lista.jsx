function Lista({ itens }) {
  return (
    <ul className="lista">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default Lista
