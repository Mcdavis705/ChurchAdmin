import prisma from "../lib/prisma.js";

async function create(memberData) {
  return prisma.member.create({
    data: memberData,
  });
}

async function findById(id) {
  return prisma.member.findUnique({
    where: {
      id,
    },
  });
}

async function getAll() {
  return prisma.member.findMany();
}

async function update(id, data) {
  return prisma.member.update({
    where: {
      id,
    },
    data,
  });
}

async function remove(id) {
  return prisma.member.delete({
    where: {
      id,
    },
  });
}

export default {
  create,
  findById,
  getAll,
  update,
  remove,
};