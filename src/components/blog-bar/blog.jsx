import React from 'react'
import BasicExample from '../card/card'
import bot from '../pic/bot.jpg'
import book from '../pic/book.jpg'
import rec from '../pic/recomend.jpg'

import './blog.css'
export default function Blog_(){
return (

    <div>
        <div id="card_view">
                <div id='card_1' >
                <BasicExample imgurl={book} title="e-book store" intro="v4u e book store store is a e commerce platform"/>
                </div>
                <div id='card_2'>
                <BasicExample imgurl={rec} title="Reccomendation system"/>
                </div>
                <div id='card_3'>
                <BasicExample imgurl="https://picsum.photos/200/300" title="my Blog"/>
                </div>
                <div id='card_4'>
                <BasicExample imgurl={bot}title="telegram bot"/>
                </div>
            </div>
    </div>
  )

}