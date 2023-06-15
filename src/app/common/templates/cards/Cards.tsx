'use client';

import React, {useState} from 'react';
import Paging from "@/app/common/templates/tables/Paging";

function Cards(props: { data: CardModel[] }) {
    const { data } = props

    const cardsPerPage = 10; // Number of posts to display per page
    const totalPages = Math.ceil(data.length / cardsPerPage); // Total number of pages
    const [currentPage, setCurrentPage] = useState(1); // Current page state

    const getCurrentPageCards = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const renderCardItems = () => {
        const currentPageCards = getCurrentPageCards();
        return currentPageCards.map((card) => (
            <div key={card.id} className={"card_body"}>
                <h3 className={"card_title"}>{card.title}</h3>
                <p className={"card_content"}>{card.content}</p>
                <span className={"card_writer"}>By {card.writer}</span>
            </div>
        ));
    };

    return (
        <div>
            <div className={"card_container"}>{renderCardItems()}</div>
            <Paging currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default Cards;