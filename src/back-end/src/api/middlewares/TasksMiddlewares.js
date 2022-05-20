const INVALID_INFO = 401;
const INVALID_NAME = 'Nome da tarefa fornecido é inválido';
const INVALID_DESCRIPTION = 'Descrição da tarefa fornecida é inválida';
const INVALID_STATUS = 'Status da tarefa fornecido é inválido';
const TASK_NAME_MIN_LENGTH = 6;
const DESCRIPTION_MIN_LENGTH = 8;

const nameInvalid = (name) => {
  if (name === undefined) return true;
  if (typeof name !== 'string') return true;
  if (name.length < TASK_NAME_MIN_LENGTH) return true;
  return false;
};

const descriptionInvalid = (description) => {
  if (description === undefined) return true;
  if (typeof description !== 'string') return true;
  if (description.length < DESCRIPTION_MIN_LENGTH) return true;
  return false;
};

const statusInvalid = (status) => {
  if (typeof status !== 'string') return true;
  if (
    status === 'pendente' ||
    status === 'em andamento' ||
    status === 'pronto') {
    return false;
  }
  return true;
};

const taskValidation = (req, res, next) => {
  const { name, description, status } = req.body;
  console.log(req.body);
  if (nameInvalid(name)) {
    return res.status(INVALID_INFO).json({ message: INVALID_NAME });
  }
  if (descriptionInvalid(description)) {
    return res.status(INVALID_INFO).json({ message: INVALID_DESCRIPTION });
  }
  if (statusInvalid(status)) {
    return res.status(INVALID_INFO).json({ message: INVALID_STATUS });
  }
  return next();
};

module.exports = {
  taskValidation,
};
