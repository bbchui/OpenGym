const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'fixed',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#00A6FF',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '25px',
    outline                    : 'none',
    padding                    : '17px',
    opacity                    : "0",
    transition                 : 'opacity 1s',
    transform                  : 'translate(-50%, -50%)'
  }
}


export default ModalStyle;
