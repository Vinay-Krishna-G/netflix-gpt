export const checkValidData = (email, password, firstName, lastName) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEmailValid) {
    return "Invalid email format";
  }

  if (!isPasswordValid) {
    return "Password must be 8-15 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  const isFirstNameValid = /^[a-zA-Z\s]+$/.test(firstName);
  const isLastNameValid = /^[a-zA-Z\s]+$/.test(lastName);

  if (!isFirstNameValid) {
    return "First name can only contain letters and spaces.";
  }
  if (!isLastNameValid) {
    return "Last name can only contain letters and spaces.";
  }

  return null; // No errors
};
