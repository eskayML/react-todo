

const footerStyling = {
    position:'fixed',
    bottom:'0',
    left:'0',
    textAlign:'center',
    borderTopRightRadius:'17%',
    borderTopLeftRadius:'17%',
    width:'100%',
    height:'15%',
    zIndex:'5',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}


function Footer() {
    return ( 
        <footer className='bg-dark text-white' style={footerStyling}>
            <h1 className='text-muted'><i className='fa fa-check'></i>Built By Eskay &copy; 2021.</h1>
        </footer>
     );
}

export default Footer;