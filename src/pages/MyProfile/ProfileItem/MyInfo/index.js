import UserProfile from '~/pages/UserProfile';

function MyInfo() {
    const user = {
        name: 'Nguy?n V?n A',
        username: 'nguyenvana',
        email: 'nguyenvana@gmail.com',
        avatar: 'https://tse3.mm.bing.net/th/id/OIP.B1YLdd0cJeufsXhh5Wws1gHaHa?rs=1&pid=ImgDetMain',
        bio: '料理作るのは好き',
        joinDate: '2024-01-01',
        postCount: 12,
        likes: 230,
        saved: 17,
    };
    return <UserProfile user={user} />;
}

export default MyInfo;
