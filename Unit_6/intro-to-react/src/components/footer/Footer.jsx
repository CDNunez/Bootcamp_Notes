
function Footer() {

    const date = new Date().getFullYear();

    return(
        <h6>
            Copyright: {date} &copy;
        </h6>
    )
}

export default Footer;