import prisma from "../lib/prisma.js";

async function create(departmentData) {
  return prisma.department.create({
    data: departmentData,
  });
}

async function findById(id) {
  return prisma.department.findUnique({
    where: {
      id,
    },
  });
}

async function getAll() {
  return prisma.department.findMany();
}

async function update(id, data) {
  return prisma.department.update({
    where: {
      id,
    },
    data,
  });
}

async function remove(id) {
  return prisma.department.delete({
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