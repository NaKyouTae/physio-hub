import React from 'react';
import Cards from "@/app/common/templates/cards/Cards";

function Card() {
    const generateRandomCards = () => {
        const cards = [];
        for (let i = 1; i <= 150; i++) {
            const randomPost = {
                id: i.toString(),
                title: `Card ${i.toString()}`,
                content: `This is the content of card ${i.toString()}.`,
                writer: `tester ${i.toString()}`,
            };
            cards.push(randomPost);
        }
        return cards;
    };

    const cards = generateRandomCards()

    return (
        <div>
            <div className={"page_header"}>Card Board</div>
            <div>
                <Cards data={cards}/>
            </div>
        </div>
    );
};

export default Card;