import { useState } from 'react';

import ListItem from './components/ListItem';

function App() {
    const [pages, setPages] = useState([false, false, false, false]);
    const allChecked = pages.every((page) => page === true);

    const updateSinglePage = (i) => {
        setPages((prevPages) =>
            prevPages.map((checked, idx) => {
                if (idx === i) {
                    return !checked;
                }

                return checked;
            })
        );
    };

    const updateAllPages = () => {
        setPages((prevPages) => prevPages.map(() => !allChecked));
    };

    const updatePages = (identifier) => {
        if (identifier === -1) {
            updateAllPages();
        } else {
            updateSinglePage(identifier);
        }
    };

    return (
        <div className='h-screen bg-white w-full flex justify-center items-center font-Montserrat'>
            <div
                className='h-[326px] w-[370px] rounded-md p-5 grid gap-2'
                style={{ boxShadow: '0px 1px 10px -1px rgba(120,120,120,0.5)' }}
            >
                <div className='flex w-full justify-between items-center'>
                    <ListItem
                        className='pr-1'
                        identifier={-1}
                        label='All pages'
                        checked={allChecked}
                        updatePages={updatePages}
                    />
                </div>

                <div className='h-[170px] border-t border-b border-[#CDCDCD] grid py-2'>
                    {pages.map((page, i) => (
                        <ListItem
                            key={i}
                            className='pr-1'
                            identifier={i}
                            label={`Page ${i + 1}`}
                            checked={page}
                            updatePages={updatePages}
                        />
                    ))}
                </div>

                <div className='flex w-full justify-center'>
                    <button
                        type='primary'
                        size='large'
                        className={`bg-[#FFCE22] hover:!bg-[#FFD84D] border-none !text-[#1F2128] w-full`}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
