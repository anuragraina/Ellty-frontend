const ListItem = ({ identifier, label, checked, updatePages }) => {
    return (
        <div
            className='checkbox-label flex justify-between w-full cursor-pointer'
            onClick={() => updatePages(identifier)}
        >
            <label>{label}</label>
            <input type='checkbox' className='hidden-checkbox' checked={checked} onChange={() => {}} />
            <svg
                className='custom-checkbox'
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect width='25' height='25' rx='6' className='checkbox-bg' />
                <path
                    d='M4 12.6L10.0345 17.9672C10.055 17.9854 10.0863 17.9837 10.1047 17.9635L21 6'
                    strokeLinecap='round'
                    className='checkbox-tick'
                />
            </svg>
        </div>
    );
};

export default ListItem;
