import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;

// export async function createReview(
//   reviewer: string,
//   review: string,
//   rating: number
// ) {
//   try {
//     if (rating < 1 || rating > 5) {
//       throw new Error("Rating must be between 1 and 5");
//     }
//     return prisma.review.create({
//       data: { reviewer, review, rating },
//     });
//   } catch (error) {
//     throw new Error("Error occurred");
//   }
// }
// export async function getReviews() {
//   return prisma.review.findMany();
// }
