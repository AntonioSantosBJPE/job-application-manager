# Job Application Manager

Um sistema completo para gerenciamento de candidaturas em vagas de emprego, desenvolvido com Next.js, React e TypeScript.

## 📋 Sobre o Projeto

O Job Application Manager é uma aplicação fullstack que ajuda candidatos a gerenciar seus processos seletivos de forma organizada e eficiente. O sistema permite que os usuários cadastrem as vagas para as quais se candidataram e acompanhem todo o ciclo de vida do processo seletivo, desde a aplicação inicial até o feedback final.

### 🔑 Principais Recursos

- **Autenticação segura** via email e senha
- **Dashboard personalizada** com visão geral das candidaturas
- **Gerenciamento detalhado** de cada processo seletivo
- **Acompanhamento de status** (Aplicado, Em análise, Entrevista agendada, Teste técnico, etc.)
- **Lembretes e notificações** para próximas etapas
- **Análise de desempenho** nos processos seletivos

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Next.js API Routes, PostgreSQL
- **ORM**: Prisma
- **Autenticação**: Better-auth
- **Validação**: Zod
- **Gerenciamento de Estado**: React Query, Context API
- **Estilização**: TailwindCSS, Shadcn UI, Origin UI
- **Testes**: Vitest, Playwright

## 🛠️ Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/job-application-manager.git

# Entrar no diretório
cd job-application-manager

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Executar migrações do banco de dados
npx prisma migrate dev

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📊 Ideias de Features Futuras

1. **Integração com plataformas de emprego** - Capturar automaticamente vagas do LinkedIn, Indeed, etc.
2. **Geração de currículos personalizados** - Adaptar o currículo para cada vaga com base em palavras-chave
3. **IA para análise de compatibilidade** - Analisar a descrição da vaga e o perfil do candidato
4. **Kanban de candidaturas** - Visualização em formato de quadro para gerenciar status
5. **Calendário integrado** - Marcar entrevistas e lembretes diretamente na plataforma
6. **Networking tracker** - Acompanhar contatos e networking relacionados a cada empresa
7. **Feedback e melhorias** - Registrar feedback recebido para melhorar em futuras candidaturas
8. **Métricas e analytics** - Dashboard com estatísticas de performance nas candidaturas
9. **Exportação de dados** - Permitir exportar histórico de candidaturas em diferentes formatos
10. **Modo colaborativo** - Compartilhar informações com mentores ou colegas para feedback

## 📝 Roadmap Inicial

### Fase 1: Fundação

- [x] Setup inicial do projeto Next.js
- [x] Configuração do Prisma com PostgreSQL
- [x] Implementação do sistema de autenticação
- [ ] Estrutura básica de layout e componentes
- [ ] Criação de modelos de dados para usuários e candidaturas

### Fase 2: Funcionalidades Essenciais

- [ ] CRUD completo para candidaturas
- [ ] Dashboard principal com visão geral
- [ ] Sistema de filtros e busca
- [ ] Página detalhada de cada candidatura
- [ ] Gerenciamento de status de candidatura

### Fase 3: Recursos Avançados

- [ ] Sistema de notificações e lembretes
- [ ] Visualização em Kanban
- [ ] Análise estatística de candidaturas
- [ ] Recursos de exportação e importação
- [ ] Otimização de performance e UX

### Fase 4: Expansão

- [ ] PWA para acesso mobile otimizado
- [ ] Integrações com APIs externas
- [ ] Recursos premium e monetização
- [ ] Expansão de recursos de networking
- [ ] Implementação de feedback da comunidade

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Para quaisquer dúvidas ou sugestões, entre em contato através das issues do GitHub ou pelo email: [seu-email@exemplo.com]
