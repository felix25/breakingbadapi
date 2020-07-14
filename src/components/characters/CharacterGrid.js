import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner/>) :
    (
        <section className={`cards ${items.length == 0 ? 'not-cards' : ''}`}>{items.length > 0 ? items.map(item=>(
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        )):<h2 className='no-result'>no result found</h2>}</section>
    )
}

export default CharacterGrid
