export const UpdateAlert = (severity, message) => ({type: 'updateAlert', severity: severity, message: message})

export const CloseAlert = () => ({type: 'closeAlert'})
