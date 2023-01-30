import prisma from "../src/database.js"

async function main() {
    await prisma.users.createMany({
        data: [
            {
                "username": "Advogado Paloma"
            },
            {
                "username": "Paola Bracho"
            }
        ]
    })
}

main()
    .then(() => { console.log("Database seeding completed successfully!") })
    .catch(err => {
        console.error(err);
        process.exit
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
