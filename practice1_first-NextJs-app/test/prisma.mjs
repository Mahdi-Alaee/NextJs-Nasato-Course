import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// const comment = await db.comment.create({
//   data: {
//     slug: "forza",
//     body: "forza is the best racing game ever I seen",
//     user: "jack",
//   },
// });

 const comments = await db.comment.findMany({
    where: {slug : 'fortnite'}
 });

console.log(comments);