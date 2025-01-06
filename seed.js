const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();

async function addUser(name, email, role, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      role,
      passwordHash: hashedPassword,
    },
    create: {
      name,
      email,
      role,
      passwordHash: hashedPassword,
    },
  });

  if (role === 'PILOT') {
    const newPilot = await prisma.pilot.upsert({
      where: { userId: newUser.id },
      update: {
        // Update pilot fields if necessary
      },
      create: {
        userId: newUser.id,
        licenseNumber: process.env.PILOT_LICENSE_NUMBER, // Use environment variable or other source
        availability: 'AVAILABLE',
      },
    });
    console.log('Pilot added or updated:', newPilot);
  }

  console.log('User added or updated:', newUser);
}


async function main(){
  await addUser(process.env.ADMIN_NAME, process.env.ADMIN_EMAIL, "ADMIN", process.env.ADMIN_PASSWORD);
  await addUser(process.env.PILOT1_NAME, process.env.PILOT1_EMAIL, "PILOT", process.env.PILOT1_PASSWORD);
  await addUser(process.env.PILOT2_NAME, process.env.PILOT2_EMAIL, "PILOT", process.env.PILOT2_PASSWORD);
  await addUser(process.env.COMPANY_NAME, process.env.COMPANY_EMAIL, "COMPANY", process.env.COMPANY_PASSWORD);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
