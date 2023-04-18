const ContactLinks = ({ children }) => {
    return (
        <ul className='text-gray-400 text-center my-3 md:my-0 flex justify-center'>
            {children}
        </ul>
    );
};

export default ContactLinks;
