export function emailValid(email) {
  const isValid = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return isValid.test(email);
}

export function passwordValid(password) {
  const isValid = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  return isValid.test(password);
}
