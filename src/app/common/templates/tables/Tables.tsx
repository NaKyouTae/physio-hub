'use client';

import { useState } from "react";
import Paging from "@/app/common/templates/tables/Paging";

function Tables(props: { data: TableModel[] }) {
    const { data } = props

    const postsPerPage = 10; // Number of posts to display per page
    const totalPages = Math.ceil(data.length / postsPerPage); // Total number of pages
    const [currentPage, setCurrentPage] = useState(1); // Current page state


    const getCurrentPagePosts = () => {
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const renderTableRows = () => {
        const currentPagePosts = getCurrentPagePosts();
        return currentPagePosts.map((post) => (
            <tr key={post.id} className="table_body_row">
                <td className="table_column_no">{post.no}</td>
                <td className="table_column_writer">{post.writer}</td>
                <td className="table_column_title">{post.title}</td>
                <td className="table_column_created_at">{post.createdAt}</td>
                <td className="table_column_views">{post.views}</td>
            </tr>
        ));
    };

    return (
        <div>
            <table className={"table_container"}>
                <thead className={"table_header"}>
                    <tr className={"table_header_row"}>
                        <th className={"table_column_no"}>번호</th>
                        <th className={"table_column_writer"}>글쓴이</th>
                        <th className={"table_column_title"}>제목</th>
                        <th className={"table_column_created_at"}>등록일</th>
                        <th className={"table_column_views"}>조회</th>
                    </tr>
                </thead>
                <tbody className={"table_body"}>
                    {renderTableRows()}
                </tbody>
            </table>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Paging currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Tables