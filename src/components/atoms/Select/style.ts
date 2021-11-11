import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  formControl: {
    position: 'relative',
    width: '50%',
    border: 0,
  },
  select: {
    border: '1px solid #b3cdf8 !important',
    borderRadius: '8px !important',

    fontFamily: 'Montserrat !important',
    fontStyle: 'normal !important',
    fontWeight: 400,
    fontSize: '15px !important',
    lineHeight: 23,
    marginBottom: 32,

    color: '#333333 !important',

    '&:focus': {
      border: '1px solid #5c98f1 !important',
      outline: 'none',
    },
  },
})

export default useStyles
