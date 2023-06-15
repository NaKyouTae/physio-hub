import Tables from "@/app/common/templates/tables/Tables";

function Board() {
    const generateRandomPosts = () => {
        const posts = [];
        for (let i = 1; i <= 150; i++) {
            const randomPost = {
                id: i.toString(),
                no: i,
                writer: 'tester',
                title: 'test',
                createdAt: '2023-06-10',
                views: Math.floor(Math.random() * 100),
            };
            posts.push(randomPost);
        }
        return posts;
    };

    const posts = generateRandomPosts()

    return (
        <div>
            <div className={"page_header"}>Table Board</div>
            <div>
                <Tables data={posts}/>
            </div>
        </div>
    )
}

export default Board