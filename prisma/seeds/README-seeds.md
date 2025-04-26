# Seeds para o Banco de Dados

Este diretório contém arquivos de seed para preencher o banco de dados com dados iniciais necessários para a aplicação.

## Estrutura de Seeds

Os seeds seguem uma estrutura modular, onde:

- Cada entidade tem seu próprio arquivo de seed na pasta `prisma/seeds/`
- O arquivo central `prisma/seed.ts` coordena a execução de todos os seeds
- Cada seed é uma função exportada que recebe uma instância do PrismaClient

### Seeds Disponíveis

1. **job-site.ts** - Preenche a tabela `job_site` com sites de emprego de tecnologia

## Pré-requisitos

Para executar os seeds, você precisa ter as seguintes dependências instaladas:

```bash
# O ts-node já está instalado nas dependências do projeto
# Se precisar instalá-lo manualmente:
npm install -D ts-node
```

## Como Executar o Seed

### Executar todos os seeds

Para executar todos os seeds, use o seguinte comando:

```bash
# Usando o script NPM configurado
npm run seed
```

### Executar um seed específico (manualmente)

Se você precisar executar apenas um seed específico, pode criar um script personalizado:

```typescript
// script-personalizado.ts
import { PrismaClient } from '../src/lib/generated/prisma'
import { seedJobSites } from './seeds/job-site'

const prisma = new PrismaClient()

async function main() {
  // Executar apenas o seed dos sites de emprego
  await seedJobSites(prisma)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

## Comportamento dos Seeds

Cada seed funciona da seguinte maneira:

1. Para registros que já existem (com o mesmo ID), os dados serão atualizados
2. Para registros que ainda não existem, serão criados novos
3. Os IDs são fixos para garantir consistência entre ambientes

Isso permite executar os seeds múltiplas vezes sem duplicar dados e manter a consistência nos relacionamentos entre tabelas.

## Adicionando Novos Seeds

Para adicionar um novo seed:

1. Crie um novo arquivo na pasta `prisma/seeds/` (ex: `stages.ts`)
2. Implemente a função de seed seguindo o mesmo padrão:

```typescript
// prisma/seeds/novo-seed.ts
import { PrismaClient } from '../../src/lib/generated/prisma'

export async function seedNovaEntidade(prisma: PrismaClient): Promise<void> {
  // Implementação do seed
}
```

3. Adicione a chamada para o novo seed no arquivo central:

```typescript
// prisma/seed.ts
import { seedNovaEntidade } from './seeds/novo-seed'

// Na função main:
await seedNovaEntidade(prisma)
```

## Ordem de Execução

A ordem de execução dos seeds é definida no arquivo `prisma/seed.ts`. Recomenda-se seguir esta ordem:

1. Entidades sem dependências (ex: sites de emprego, configurações)
2. Entidades com dependências básicas (ex: etapas padrão)
3. Dados que dependem de múltiplas entidades

Desta forma, evitamos problemas de integridade referencial durante a execução dos seeds.
