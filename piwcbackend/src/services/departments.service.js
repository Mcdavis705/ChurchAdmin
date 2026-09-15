import departmentsRepository from '../repositories/department.repository.js';

async function create(departmentData) {
  return departmentsRepository.create(departmentData);
}

async function getAll() {
  return departmentsRepository.getAll();
}

async function getById(id) {
  const department = await departmentsRepository.findById(id);

  if (!department) {
    throw new Error('Department not found.');
  }

  return department;
}

async function update(id, data) {
  const department = await departmentsRepository.findById(id);

  if (!department) {
    throw new Error('Department not found.');
  }

  return departmentsRepository.update(id, data);
}

async function remove(id) {
  const department = await departmentsRepository.findById(id);

  if (!department) {
    throw new Error('Department not found.');
  }

  return departmentsRepository.remove(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  remove,
};  