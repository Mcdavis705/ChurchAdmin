import departmentsService from "../services/departments.service.js";

async function create(req, res, next) {
  try {
    const department = await departmentsService.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Department created successfully.",
      data: department,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const departments = await departmentsService.getAll();

    return res.status(200).json({
      success: true,
      data: departments,
    });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const department = await departmentsService.getById(req.params.id);

    return res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const department = await departmentsService.update(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Department updated successfully.",
      data: department,
    });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    await departmentsService.remove(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Department removed successfully.",
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