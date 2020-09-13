// https://ui.dev/validate-email-address-javascript/
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default isValidEmail;
