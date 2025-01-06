const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function addUser(name, email, password, role) {
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      passwordHash: hashedPassword,
      role,
    },
    create: {
      name,
      email,
      passwordHash: hashedPassword,
      role,
    },
  });

  console.log('User added or updated:', user)

  if (role === 'PILOT') {
    const newPilot = await prisma.pilot.upsert({
      where: {
        userId: user.id
      },
      update: {
        availability: 'AVAILABLE'
      },
      create: {
        userId: user.id,
        availability: 'AVAILABLE',
      }
    });
    console.log('Pilot added or updated:', newPilot)
  }

  return user
}

async function main() {
  // Créer l'admin
  await addUser(
    process.env.ADMIN_NAME,
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_PASSWORD,
    'ADMIN'
  )

  // Créer les pilotes
  await addUser(
    process.env.PILOT1_NAME,
    process.env.PILOT1_EMAIL,
    process.env.PILOT1_PASSWORD,
    'PILOT'
  )

  await addUser(
    process.env.PILOT2_NAME,
    process.env.PILOT2_EMAIL,
    process.env.PILOT2_PASSWORD,
    'PILOT'
  )

  // Créer l'entreprise
  await addUser(
    process.env.COMPANY_NAME,
    process.env.COMPANY_EMAIL,
    process.env.COMPANY_PASSWORD,
    'COMPANY'
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })