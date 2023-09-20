import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "phdbui",
  //       email: "congdoan6997@gmail.com",
  //     },
  //   });

  //get all users
  //   const users = await prisma.user.findMany({ include: { articles: true } });

  //create article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "prisma tutorial",
  //       body: "learn how to use prisma for database sqlite",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //create article other
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "nextjs tutorial",
  //       body: "learn how to use FE nextjs",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //get all articles
  //   const articles = await prisma.article.findMany();

  //create user and article adn relation them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "phd2",
  //       email: "congdoan@gmail.com",
  //       articles: {
  //         create: {
  //           title: "bun tutorial",
  //           body: "learn how to use bun with elysiajs",
  //         },
  //       },
  //     },
  //   });

  //update user
  const user = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "congdoan",
    },
  });
  console.log(user);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
