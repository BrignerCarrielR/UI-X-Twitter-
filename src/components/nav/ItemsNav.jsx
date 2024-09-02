import React from 'react'

export default function ItemsNav({ iconoItem, nameItem, displayDis }) {
    return (
        <div className={`p-2 ${displayDis}`}>
            <div className='flex items-center h-10 space-x-2'>
                <a>
                    {iconoItem}
                </a>
                <b className='text-2xl font-bold hidden xl:block'>{nameItem}</b>
            </div>
        </div>
    )
}
