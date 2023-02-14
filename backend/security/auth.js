import bcrypt from 'bcrypt'

export const hashedPassword = async (text) => {
  const hashedPassword = await bcrypt.hash(text, 12)
  return hashedPassword
}

export const comparePass = async (plainPass, databasePassword) =>
  bcrypt.compare(plainPass, databasePassword)

// export default { hashedPassword, comparePass };
