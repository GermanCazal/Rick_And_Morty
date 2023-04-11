function validate(email, password) {
  let errors = {};

  // Validate email
  if (!email.trim()) {
    errors.email = 'Por favor, revisa tu email';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'El email no es valido';
  } else if (email.length > 35) {
    errors.email = 'El email es demasiado largo';
  }

  // Validate password
  if (!password.trim()) {
    errors.password = 'Se requiere contraseña';
  } else if (password.length < 6 || password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  } else if (!/\d/.test(password)) {
    errors.password = 'La contraseña debe contener al menos un número';
  }

  return errors;
}

export default validate;
