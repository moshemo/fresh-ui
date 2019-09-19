const testData = {
  name: 'Ploni',
  email: '',
  password: null,
}

export const initialValues = {
  name: testData.name || '',
  email: testData.email || '',
  password: testData.password || '',
  confirmPassword: '',
}
