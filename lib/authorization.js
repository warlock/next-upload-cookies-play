import jwt from 'jsonwebtoken'

export const validate = token => {
  try {
    const user = jwt.verify(token, '123')
    return user
  } catch (error) {
    return null
  }
}

export const sign = user => {
  const userstring = JSON.stringify(user)
  const token = jwt.sign(userstring, '123')
  return { token, user: user.name, admin: user.admin }
}
