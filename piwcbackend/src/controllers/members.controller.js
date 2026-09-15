import memberService from "../services/members.service.js";

async function create(req, res, next) {
  try {
    const member = await memberService.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Member created successfully.",
      data: member,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const members = await memberService.getAll();

    return res.status(200).json({
      success: true,
      data: members,
    });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const member = await memberService.getById(req.params.id);

    return res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const member = await memberService.update(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Member updated successfully.",
      data: member,
    });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    await memberService.remove(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Member deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  getAll,
  getById,
  update,
  remove,
};