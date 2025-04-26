/* eslint-disable no-console */
import { PrismaClient } from '../../src/lib/generated/prisma'

// Interface para sites de emprego
interface JobSiteData {
  id: string
  name: string
  url: string | null
  description: string | null
}

// Dados dos principais sites de emprego de tecnologia
const jobSites: JobSiteData[] = [
  {
    id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/jobs',
    description:
      'Rede social profissional com ofertas de emprego em diversas áreas, incluindo tecnologia.',
  },
  {
    id: '3c9d5f1a-7e23-4e1a-8745-fb8da92b62c5',
    name: 'GitHub Jobs',
    url: 'https://github.com/about/jobs',
    description:
      'Plataforma de vagas técnicas, especialmente para desenvolvedores e profissionais de TI.',
  },
  {
    id: '6a7f4d42-7ef5-45c9-bb93-f9bcd1d7d9d2',
    name: 'Stack Overflow Jobs',
    url: 'https://stackoverflow.com/jobs',
    description:
      'Fórum para desenvolvedores com seção dedicada a vagas de tecnologia.',
  },
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'GeekHunter',
    url: 'https://www.geekhunter.com.br',
    description:
      'Plataforma brasileira especializada em recrutamento para vagas de tecnologia.',
  },
  {
    id: '1a9f6760-2a3f-4d0d-b513-4dfe31d0b2b4',
    name: 'Glassdoor',
    url: 'https://www.glassdoor.com.br',
    description:
      'Plataforma com vagas e avaliações de empresas pelos próprios funcionários.',
  },
  {
    id: '0f8fad5b-d9cb-469f-a165-70867728950e',
    name: 'Indeed',
    url: 'https://www.indeed.com.br',
    description:
      'Agregador de vagas de emprego com ampla oferta em tecnologia.',
  },
  {
    id: 'a3bb189e-8bf9-3888-9912-ace4e6543002',
    name: 'Programathor',
    url: 'https://programathor.com.br',
    description:
      'Plataforma brasileira voltada exclusivamente para oportunidades em tecnologia.',
  },
  {
    id: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
    name: 'Catho',
    url: 'https://www.catho.com.br',
    description:
      'Site brasileiro de empregos com diversas categorias, incluindo TI.',
  },
  {
    id: '6fa459ea-ee8a-3ca4-894e-db77e160355e',
    name: 'Trampos',
    url: 'https://trampos.co',
    description:
      'Plataforma com foco em vagas para profissionais criativos e de tecnologia.',
  },
  {
    id: '16fd2706-8baf-433b-82eb-8c7fada847da',
    name: 'Revelo',
    url: 'https://www.revelo.com.br',
    description:
      'Plataforma que conecta profissionais de tecnologia a empresas por meio de matching.',
  },
  {
    id: '9c858901-8a57-4791-81fe-4c455b099bc9',
    name: 'InfoJobs',
    url: 'https://www.infojobs.com.br',
    description:
      'Site de vagas com ampla oferta em vários setores, incluindo tecnologia.',
  },
  {
    id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    name: 'Vulpi',
    url: 'https://vulpi.com.br',
    description:
      'Plataforma para conectar desenvolvedores a vagas de tecnologia.',
  },
  {
    id: 'e358467b-d575-4475-85a2-aa8d8dfa1ee5',
    name: 'Vagas.com',
    url: 'https://www.vagas.com.br',
    description:
      'Um dos maiores sites de recrutamento do Brasil com muitas vagas de tecnologia.',
  },
  {
    id: 'd9ad2884-f712-4c6d-977b-074aae2cc009',
    name: 'WeWork Remotely',
    url: 'https://weworkremotely.com',
    description:
      'Plataforma internacional com foco em trabalhos remotos, incluindo tecnologia.',
  },
  {
    id: '9788a18a-10d4-4478-9b18-54cfa087f453',
    name: 'Remote OK',
    url: 'https://remoteok.io',
    description:
      'Site internacional de vagas 100% remotas, com muitas oportunidades em tecnologia.',
  },
]

/**
 * Função para executar o seed de sites de emprego
 */
export async function seedJobSites(prisma: PrismaClient): Promise<void> {
  console.log('Iniciando seed dos sites de emprego...')

  // Upsert de cada site de emprego para garantir a criação/atualização com os IDs fixos
  for (const site of jobSites) {
    await prisma.$transaction(async (tx) => {
      // Verificar se o site existe
      const existingSite = await tx.jobSite.findUnique({
        where: { id: site.id },
      })

      if (existingSite) {
        // Atualizar se existir
        await tx.jobSite.update({
          where: { id: site.id },
          data: {
            name: site.name,
            url: site.url,
            description: site.description,
          },
        })
        //console.log(`Site atualizado: ${site.name}`)
      } else {
        // Criar se não existir
        await tx.jobSite.create({
          data: {
            id: site.id,
            name: site.name,
            url: site.url,
            description: site.description,
          },
        })
        //console.log(`Site criado: ${site.name}`)
      }
    })
  }

  console.log(
    `Seed concluído: ${jobSites.length} sites de emprego inseridos/atualizados!`,
  )
}
