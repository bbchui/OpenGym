const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)'
  },
  content : {
    position                   : 'fixed',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    // background                 : '#59C4C5',
    background                 : 'white',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    // borderRadius               : '25px',
    outline                    : 'none',
    padding                    : '22px 44px',
    opacity                    : "0",
    transition                 : 'opacity 0.75s',
    transform                  : 'translate(-50%, -50%)'
  }
}


export default ModalStyle;
