import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Lista from './components/Lista/Lista';
import Footer from './components/Footer/Footer';

function App() {
  const minhasTarefas = [
    'Aprender a sintaxe JSX',
    'Criar componentes funcionais',
    'Passar dados via props',
    'Renderizar listas com map()'
  ];

  return (
    <>
      <Header />
      <main>
        <Card 
          titulo="Componente Card Reutilizável" 
          descricao="Este card está recebendo título e descrição dinamicamente através de props." 
        />
        <Lista itens={minhasTarefas} />
      </main>
      <Footer />
    </>
  );
}

export default App;