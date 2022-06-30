import React from 'react';
import ReactImageAppear from 'react-image-appear';

const NFTCard = ({data}) => {
    const onClick = () => {
        if (data.buy_link) window.open(data.buy_link);
    }

    return (
        <div onClick={onClick} className='flex flex-col justify-between px-3 py-2 rounded-md cursor-pointer bg-neutral-800'>
            <div className='flex items-center flex-1 w-full'>
                <ReactImageAppear src={'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/' + data.image} placeholderStyle={{ backgroundColor: '#262626' }} className='w-full min-h-[100px] rounded-md' />
            </div>
            <div className='pt-2'>
                <div className='text-lg'>{data.name}</div>
                <div className='flex items-end justify-between pt-2'>
                    <div><span className='text-green-400'>{data.price / 1000000000 || '---'}</span> SOL</div>
                    <div className='text-sm'>Rarity rank: <span className='text-sm text-green-400'>{data.rarity_rank}</span></div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard;