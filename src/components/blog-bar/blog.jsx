import React from 'react'
import BasicExample from '../card/card'
import bot from '../pic/bot.jpg'
import book from '../pic/book.jpg'
import rec from '../pic/recomend.jpg'
import pos from '../pic/pos.jpg'

import './blog.css'
export default function Blog_(){
return (

    <div>
        <div className="card_view">
                <div className='card_1' >
                <BasicExample imgurl={book} title="e-book store"
                 intro="v4u e book store is online book store system."
                 link="https://github.com/SasithDuleepa/v4u"/>
                </div>
                <div id='card_2'>
                <BasicExample imgurl={rec} title="Reccomendation system"
                intro="this is a book reccomendation system build with python"
                link="https://github.com/SasithDuleepa/recommendation_system"/>
                </div>
                <div className='card_3'>
                <BasicExample imgurl={pos}
                 intro="this is a point of sale system desiged for shopping centers" 
                 title="pos system" link="https://github.com/SasithDuleepa/Blog"/>
                </div>
                <div id='card_4'>
                <BasicExample imgurl={bot}title="telegram bot" 
                intro="this is a telegrame bot developed using Python language"
                link="https://github.com/SasithDuleepa/telegram_bot"/>
                </div>
            </div>
    </div>
  )

}