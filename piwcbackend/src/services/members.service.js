import memberRepository from "../repositories/members.repository.js";

async function create(memberData) {
  return memberRepository.create(memberData);
}

async function getAll() {
  return memberRepository.getAll();
}

async function getById(id) {
  const member = await memberRepository.findById(id);

  if (!member) {
    throw new Error("Member not found.");
  }

  return member;
}

async function update(id, data) {
  const member = await memberRepository.findById(id);

  if (!member) {
    throw new Error("Member not found.");
  }

  return memberRepository.update(id, data);
}

async function remove(id) {
  const member = await memberRepository.findById(id);

  if (!member) {
    throw new Error("Member not found.");
  }

  return memberRepository.remove(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  remove,
};