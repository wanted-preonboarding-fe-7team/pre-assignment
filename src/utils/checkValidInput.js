const patterns = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};

const checkValidInput = {
  email(value) {
    return patterns.email.test(value);
  },
  password(value) {
    return patterns.password.test(value);
  },
};

export default checkValidInput;
