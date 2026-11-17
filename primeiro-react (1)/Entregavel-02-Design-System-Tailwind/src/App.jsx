import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Alert } from './components/Alert';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <header className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold text-slate-900">Design System UI</h1>
            <Badge color="blue">Tailwind CSS</Badge>
          </div>
          <p className="text-slate-600">
            Biblioteca de componentes reutilizáveis estilizados via utility classes e props dinâmicas (Semana 09).
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Alertas (Variantes Dinâmicas)</h2>
          <div className="space-y-3">
            <Alert 
              variant="success" 
              title="Operação concluída" 
              message="Os componentes foram compilados e estilizados com sucesso." 
            />
            <Alert 
              variant="warning" 
              title="Atenção na configuração" 
              message="Verifique se o tailwind.config.js aponta corretamente para ./src/**/*.{js,jsx}." 
            />
            <Alert 
              variant="error" 
              title="Falha na validação" 
              message="O campo obrigatório não foi preenchido corretamente." 
            />
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Botões (Button)</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Botão Primary</Button>
              <Button variant="secondary">Botão Secondary</Button>
              <Button variant="danger">Botão Danger</Button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Etiquetas (Badge)</h2>
            <div className="flex flex-wrap gap-2">
              <Badge color="blue">Em Desenvolvimento</Badge>
              <Badge color="green">Concluído</Badge>
              <Badge color="yellow">Em Revisão</Badge>
              <Badge color="red">Bloqueado</Badge>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Campos de Formulário (Input)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              label="Nome Completo" 
              placeholder="Digite seu nome..." 
            />
            <Input 
              label="E-mail Institucional" 
              placeholder="exemplo@ceuma.br" 
              error="Formato de e-mail inválido."
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Cards Refatorados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
              categoria="Componentes"
              badgeColor="green"
              titulo="Estilização com Props"
              descricao="Permite variar cores, tamanhos e estados visuais sem duplicar código CSS."
              footer={<Button variant="primary">Explorar</Button>}
            />
            <Card 
              categoria="Arquitetura"
              badgeColor="yellow"
              titulo="Utility-First CSS"
              descricao="Classes utilitárias aplicadas diretamente no JSX aceleram o protótipo e mantêm o bundle enxuto."
              footer={
                <>
                  <Button variant="secondary">Detalhes</Button>
                  <Button variant="danger">Remover</Button>
                </>
              }
            />
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;