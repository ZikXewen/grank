const Header = () => {
    return(
        <div className='right-0 fixed justify-between px-4 pt-4'>
            <h2>Welcome Back, Ray</h2>
            <a href="api/auth/signout" className="flex underline justify-center">
                Logout
            </a>
        </div>
    );
}

export default Header;
