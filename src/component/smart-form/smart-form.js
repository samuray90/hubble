import * as Yup from 'yup'

export const initalValues = {
  screenName: "",
}

export const validationSchema=Yup.object().shape({
  screenName: Yup.string().min(4, 'Minimum four characters required').required('test')
})
