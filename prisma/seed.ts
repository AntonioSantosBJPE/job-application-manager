import { PrismaClient } from '../src/lib/generated/prisma'

import { seedJobSites } from './seeds/job-site'

const prisma = new PrismaClient()

/**
 * Função principal que executa todos os seeds
 */
async function main() {
  console.log('Iniciando processo de seed do banco de dados...')

  // Executar seed de sites de emprego
  await seedJobSites(prisma)

  // Adicionar chamadas para outros seeds aqui
  // Exemplo: await seedStages(prisma)

  console.log('Todos os seeds foram executados com sucesso!')
}

// Executa o seed e trata possíveis erros
main()
  .catch((e) => {
    console.error('Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    // Encerra a conexão com o banco de dados
    await prisma.$disconnect()
  })
