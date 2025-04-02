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
        <div className='h-screen bg-white w-full flex justify-center items-center font-montserrat'>
            <div className='card h-[326px] w-[370px] flex flex-col'>
                <div className='flex w-full justify-between items-center'>
                    <ListItem identifier={-1} label='All pages' checked={allChecked} updatePages={updatePages} />
                </div>

                <div className='py-[8px] my-[10px] border-t border-b border-[#CDCDCD]'>
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

                <div className='flex w-full justify-center py-[10px]'>
                    <button className='btn'>Done</button>
                </div>
            </div>
        </div>
    );
}

export default App;
