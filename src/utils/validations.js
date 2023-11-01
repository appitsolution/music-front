export function formatPhoneNumber(input) {
  const cleaned = input.replace(/\D/g, "").slice(0, 11);
  let formatted = "+";
  for (let i = 0; i < cleaned.length; i++) {
    if (i === 1) {
      formatted += " " + cleaned[i];
    } else if (i === 4 || i === 7 || i === 9) {
      formatted += " " + cleaned[i];
    } else {
      formatted += cleaned[i];
    }
  }

  return formatted;
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+\d \d{3} \d{3} \d{2} \d{2}$/;

  return phoneRegex.test(phoneNumber);
}
