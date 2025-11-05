export interface Movie {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  imageUrl: string;
  imdbRating: number;
  year: number;
  duration: string;
  ageRating: string;
  genres: string[];
  actor: string;
}
interface Comment {
  id: number;
  name: string;
  avatar: string;
  text: string;
  replies: string;
  views: number;
  likes: number;
  comments: number;
}
interface Review {
  id: number;
  username: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
}
export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Ugly',
    titleVi: 'Nổi Ấn Diệu',
    description:
      'Im Dong-hwan, chàng trai chưa từng biết mặt mẹ mình, bằng hoàng khoảng cảnh sát thông báo đã tìm thấy hài cốt của bà - người mất tích suốt 40 năm. Với nghi ngờ bị sát hại, anh quyết tâm đi tìm sự thật cùng nữ đạo diễn Kim Soo-jin.',
    imageUrl: '/korean-drama-movie-poster-dark.jpg',
    imdbRating: 7.1,
    year: 2025,
    duration: '1h 42m',
    ageRating: 'T16',
    genres: ['Chính Kịch', 'Chiếu Rạp', 'Gay Cấn', 'Bí Ấn', 'Tâm Lý'],
    actor: 'Lim Ji-yeon, Park Sung-woong',
  },
  {
    id: '2',
    title: 'Love in Paradise',
    titleVi: 'Yêu Trong Thiên Đường',
    description:
      'Một câu chuyện tình yêu lãng mạn giữa hai tâm hồn lạc lối ở một hòn đảo xinh đẹp. Họ phải vượt qua những trở ngại để tìm được hạnh phúc thực sự bên nhau trong thiên đường này.',
    imageUrl: '/romantic-beach-sunset-movie-poster.jpg',
    imdbRating: 7.8,
    year: 2024,
    duration: '2h 15m',
    ageRating: '13+',
    genres: ['Tình Cảm', 'Phiêu Lưu', 'Drama'],
    actor: 'Minh Hằng, Cường Đô La',
  },
  {
    id: '3',
    title: 'Shadow of the Night',
    titleVi: 'Bóng Tối Của Đêm',
    description:
      'Một nhà điều tra bí mật phải đối mặt với quá khứ đen tối của mình để giải quyết vụ án mạng bí ẩn. Mỗi chứng cứ lại đưa anh đi sâu vào mê cung nguy hiểm của tội ác.',
    imageUrl: '/dark-thriller-noir-film-poster.jpg',
    imdbRating: 8.2,
    year: 2025,
    duration: '2h 05m',
    ageRating: '18+',
    genres: ['Trinh Thám', 'Hình Sự', 'Rạp Chiếu'],
    actor: 'Sơn Tùng MTP, Ái Phương',
  },
  {
    id: '4',
    title: 'Rise of the Heroes',
    titleVi: 'Sự Trỗi Dậy Của Anh Hùng',
    description:
      'Những anh hùng bình thường được trao quyền siêu nhiên phải cứu thế giới khỏi sự tàn phá. Một cuộc chiến kỳ vĩ giữa thiện và ác sẽ quyết định số phận của toàn nhân loại.',
    imageUrl: '/superhero-action-epic-movie-poster.jpg',
    imdbRating: 7.5,
    year: 2024,
    duration: '2h 30m',
    ageRating: 'T13',
    genres: ['Hành Động', 'Khoa Học Viễn Tưởng', 'Phiêu Lưu'],
    actor: 'Johnny Trần, Hương Giang',
  },
  {
    id: '5',
    title: 'Whispers of the Past',
    titleVi: 'Thì Thầm Của Quá Khứ',
    description:
      'Một nữ sinh viên phát hiện ra bí mật gia đình khi tìm kiếm sự thật về cái chết của người mẹ. Cô phải đối mặt với những người muốn giấu giếm sự thật này mãi mãi.',
    imageUrl: '/mystery-vintage-family-secret-movie.jpg',
    imdbRating: 7.4,
    year: 2025,
    duration: '1h 58m',
    ageRating: '16+',
    genres: ['Mystery', 'Drama', 'Tâm Lý'],
    actor: 'Hoàng Yến Chibi, Mạnh Quân',
  },
];

export const allCommentsData: Comment[] = [
  {
    id: 1,
    name: 'caborneticho2',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: '28:57 yooo cái kestis',
    replies: 'Trở Chơi Ảo Quốc Ares',
    views: 3,
    likes: 1,
    comments: 1,
  },
  {
    id: 2,
    name: 'Nhip dieu nhip cha cha cha',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: '🎵',
    replies: 'Âm Hà Truyện',
    views: 1,
    likes: 0,
    comments: 0,
  },
  {
    id: 3,
    name: 'Sigma Boyy',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: 'rất hay',
    replies: '"Lột Hổ" Gã Khó Lý',
    views: 1,
    likes: 0,
    comments: 0,
  },
  {
    id: 4,
    name: 'Oanh',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: 'Phim cô bth thui má sao t có 1 lão ỷ tr, lí phải hỏng lắp ms😂😂😂',
    replies: 'Sơn Hà Chẩm',
    views: 3,
    likes: 1,
    comments: 1,
  },
  {
    id: 5,
    name: 'Người dùng mới 1',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: 'Phim hay quá!',
    replies: 'Phim ABC',
    views: 2,
    likes: 2,
    comments: 0,
  },
  {
    id: 6,
    name: 'Người dùng mới 2',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    text: 'Tuyệt vời!',
    replies: 'Phim XYZ',
    views: 1,
    likes: 1,
    comments: 1,
  },
];
export const trendingItemData = [
  { rank: 1, title: 'Âm Hà Truyện', trend: 'up', emoji: '📚' },
  { rank: 2, title: 'Quỷ Cô Ân Danh', trend: 'up', emoji: '👻' },
  { rank: 3, title: 'Diễn Thoại Den 2', trend: 'up', emoji: '📺' },
  { rank: 4, title: 'Thiên Địa Kiếm Tâm', trend: 'down', emoji: '⚔️' },
  { rank: 5, title: 'Nhập Thanh Vân', trend: 'up', emoji: '☁️' },
];
export const topCommentsData = [
  {
    id: 1,
    name: 'Mê phim',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    bio: 'Xem tth toàn xem web lâu, thuộc top các quốc gia xem chưa có lâu vi pha...',
    views: 1,
    replies: 0,
    shares: 1,
    coverImage:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
  },
  {
    id: 2,
    name: 'Hay cmt dao',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    bio: 'Phim còn tối tập 11 này thầy tư nhiên phía cuộc đời :)) đã v còn phản...',
    views: 2,
    replies: 0,
    shares: 3,
    coverImage:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
  },
  {
    id: 3,
    name: 'Cát Nguyên',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    bio: 'Bực nhất thak nyc 😭',
    views: 3,
    replies: 0,
    shares: 0,
    coverImage:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
  },
  {
    id: 4,
    name: 'Phương',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    bio: 'Phim ko cuốn lắm. Ả nên thi năm: Nam nữ chính nhìn hơi phải...',
    views: 2,
    replies: 1,
    shares: 1,
    coverImage:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
  },
  {
    id: 5,
    name: 'Kiên',
    avatar:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
    bio: 'Ả thấy là công thái luôn kiên kkk',
    views: 2,
    replies: 0,
    shares: 3,
    coverImage:
      'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
  },
];
const newMovies = [
  {
    id: 1,
    title: 'Cô Máy Nghiễn',
    subtitle: 'The Smashing Machine',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4y26sjh1kjHeYK6lngcRXRug9uWDirSliw&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 2,
    title: 'Điên Thoại Đen 2',
    subtitle: 'Black Phone 2',
    image:
      'https://media-cdn-v2.laodong.vn/storage/newsportal/2024/11/4/1416996/Dark-Nuns-Poster-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 3,
    title: 'Động Chảy Thanh Âm',
    subtitle: 'The History of Sound',
    image:
      'https://image.voh.com.vn/voh/image/2024/04/03/phim-dien-anh-cua-duong-mich-sap-ra-mat-lieu-co-giup-nang-hoa-dan-chuyen-hinh-thanh-cong-1-005451.jpg?t=o',
    rating: 'P.04',
    label: '',
  },
  {
    id: 4,
    title: 'Trò Chơi Nghìn Tỷ',
    subtitle: 'Trillion Game the Movie',
    image:
      'https://special.nhandan.vn/cong-nghiep-dien-anh/assets/LZ1TX2JVg5/1-giao-lo-8675-oficial-poster-16927931143051241013584-86-0-1110-1638-crop-16927931206051962711305-700x438.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 5,
    title: 'Kỳ Ức Màu',
    subtitle: "Peg O' My Heart",
    image:
      'https://kenh14cdn.com/203336854389633024/2023/11/3/photo-6-1698986764445236436107.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 6,
    title: 'Bàng Chuột: Câu Chuyện Thú...',
    subtitle: 'The Rats: A Witcher Tale',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GfL4gyHYbt34fKJxucYwdAFK4pdZQ6w-dQ&s',
    rating: 'P.04',
    label: 'Lâu',
  },
  {
    id: 7,
    title: 'Phóng Văn Sát Nhân',
    subtitle: 'Murderer Report',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3ncN-p5hZadIWkw3M6s9E4C31nbGy1FwUA&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 8,
    title: 'Kèo Tây Ba',
    subtitle: 'The Threesome',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3ncN-p5hZadIWkw3M6s9E4C31nbGy1FwUA&s',
    rating: 'P.04',
    label: '',
  },
];

const topMovies = [
  {
    id: 9,
    title: 'Quỷ Cô Ân Danh',
    subtitle: 'Ghost of a Tale',
    image:
      'https://afamilycdn.com/150157425591193600/2021/10/4/phim-kingdom-vuong-trieu-xac-song-phan-1-2-full-hd-vietsub-1-16333243807721978567362.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 10,
    title: 'Ám Hút',
    subtitle: 'The Haunting',
    image:
      'https://i.ytimg.com/vi/YBHnXygZjc4/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBY4B0rDqb5frZonpA68KhW8CP3JQ',
    rating: 'P.04',
    label: '',
  },
  {
    id: 11,
    title: 'Thiên Địa Kiếm Tâm',
    subtitle: 'Heaven Sword',
    image:
      'https://ss-images.saostar.vn/wp700/2023/12/5/pc/1701746741210/hvnqsd4rx91-5en5ngt7gc2-9dkk33ij9o3.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 12,
    title: 'Nhập Thành',
    subtitle: 'Enter the City',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw3F-OSLm2LGWef82jUGZBPbPMyE_EdXF9w&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 13,
    title: 'Huy Lục Um Di',
    subtitle: 'The Golden Path',
    image:
      'https://statics.vincom.com.vn/xu-huong/anh_thumbnail/phim-kinh-dien-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 14,
    title: 'Tích Đôi Kỳ',
    subtitle: 'Double Wonder',
    image:
      'https://statics.vincom.com.vn/xu-huong/anh_thumbnail/phim-kinh-dien-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 15,
    title: 'Bóng Tối Đêm',
    subtitle: 'Shadow of Night',
    image:
      'https://statics.vincom.com.vn/xu-huong/anh_thumbnail/phim-kinh-dien-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 16,
    title: 'Cuộc Chiến Cuối',
    subtitle: 'Final Battle',
    image:
      'https://statics.vincom.com.vn/xu-huong/anh_thumbnail/phim-kinh-dien-1.jpg',
    rating: 'P.04',
    label: '',
  },
];

const actionMovies = [
  {
    id: 17,
    title: 'Chiến Binh Bất Tử',
    subtitle: 'Immortal Warrior',
    image:
      'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_9_22_638310129453623127_phim-hanh-dong-my-0.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 18,
    title: 'Tốc Độ Tử Thần',
    subtitle: 'Death Speed',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/thumb_phim_hanh_dong_chieu_rap_6444878a93.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 19,
    title: 'Sát Thủ Vô Hình',
    subtitle: 'Invisible Killer',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga5eZuShsdR-NbUPL2j2kLEpkp2VgFk-4vQ&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 20,
    title: 'Trận Chiến Cuối Cùng',
    subtitle: 'The Last Fight',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJDk31DsXAd4zK2JL2fK9u7UuskTex_4nCw&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 21,
    title: 'Người Hùng Thép',
    subtitle: 'Steel Hero',
    image: 'https://i.ytimg.com/vi/xcbERdf9yxM/maxresdefault.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 22,
    title: 'Cuộc Truy Đuổi',
    subtitle: 'The Chase',
    image:
      'https://cdn.tgdd.vn/Files/2021/11/08/1396630/10-phim-hanh-dong-chieu-rap-hay-nhat-2021-co-nhip-do-nhanh-va-cam-xuc-cao-trao-202111082041266427.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 23,
    title: 'Vũ Khí Bí Mật',
    subtitle: 'Secret Weapon',
    image:
      'https://cdn.nguyenkimmall.com/images/companies/_1/top-phim-hanh-dong-han-quoc-gay-can-dang-xem-nhat-41.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 24,
    title: 'Đội Đặc Nhiệm',
    subtitle: 'Special Forces',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmx0GL7o2p5qksEqfkVgpiSkk-t9hzfv5IA&s',
    rating: 'P.04',
    label: '',
  },
];

const horrorMovies = [
  {
    id: 25,
    title: 'Căn Nhà Ma Ám',
    subtitle: 'Haunted House',
    image:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/3/20/792128/Thenun.png',
    rating: 'P.04',
    label: '',
  },
  {
    id: 26,
    title: 'Bóng Ma Đêm',
    subtitle: 'Night Ghost',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-kinh-di-han-quoc-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 27,
    title: 'Lời Nguyền',
    subtitle: 'The Curse',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-kinh-di-my-8.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 28,
    title: 'Đêm Kinh Hoàng',
    subtitle: 'Horror Night',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_ma_kinh_di_my_6_08438b5b06.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 29,
    title: 'Quỷ Dữ',
    subtitle: 'The Demon',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ir1uuXtAIp6mmcbfzdFw79O-9ax_4WVhcw&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 30,
    title: 'Bí Mật Đen Tối',
    subtitle: 'Dark Secret',
    image:
      'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_2_4_638426806449319430_phim-kinh-di-my-24.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 31,
    title: 'Những Tiếng Hét',
    subtitle: 'The Screams',
    image: '/horror-thriller-movie-poster.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 32,
    title: 'Căn Phòng Bí Ẩn',
    subtitle: 'Mystery Room',
    image:
      'https://homepage.momocdn.net/blogscontents/momo-upload-api-200504094820-637241825008757133.jpg',
    rating: 'P.04',
    label: '',
  },
];

const romanceMovies = [
  {
    id: 33,
    title: 'Tình Yêu Bất Tử',
    subtitle: 'Immortal Love',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-tinh-cam-my-19.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 34,
    title: 'Trái Tim Vàng',
    subtitle: 'Golden Heart',
    image: 'https://www.elle.vn/app/uploads/2015/10/10/pjimage-8.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 35,
    title: 'Ngày Tình Nhân',
    subtitle: 'Valentine Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/Tyrone_power_alice_faye_ragtime6.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 36,
    title: 'Hẹn Hò Đầu Tiên',
    subtitle: 'First Date',
    image:
      'https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/2/13/untitled-2-990-16762606679751023109532.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 37,
    title: 'Tình Yêu Thầm Lặng',
    subtitle: 'Silent Love',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh547kqTcnFZvbW8DTl-BkeJHpKQpJeLAjpw&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 38,
    title: 'Người Tình Hoàn Hảo',
    subtitle: 'Perfect Lover',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS0jxc322i_5cvMqeV-5sEy0DMF_TR6-YpQ&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 39,
    title: 'Cuộc Tình Đẹp',
    subtitle: 'Beautiful Love',
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/6/6/atimecalledyou-1686043290199429555123.jpeg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 40,
    title: 'Hạnh Phúc Muộn',
    subtitle: 'Late Happiness',
    image:
      'https://images2.thanhnien.vn/528068263637045248/2023/6/6/atimecalledyou-1686043290199429555123.jpeg',
    rating: 'P.04',
    label: '',
  },
];

const comedyMovies = [
  {
    id: 41,
    title: 'Những Kẻ Ngốc',
    subtitle: 'The Fools',
    image:
      'https://cellphones.com.vn/sforum/wp-content/uploads/2023/02/phim-hai-hay-14.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 42,
    title: 'Cuộc Sống Hài Hước',
    subtitle: 'Funny Life',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_hai_chieu_rap_han_quoc_40_1_1b76431e9a.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 43,
    title: 'Tiếng Cười',
    subtitle: 'The Laugh',
    image:
      'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/02/phim-hai-hay-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 44,
    title: 'Nhóm Hài',
    subtitle: 'Comedy Group',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-hai-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 45,
    title: 'Vui Vẻ Mỗi Ngày',
    subtitle: 'Happy Everyday',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-hai-han-quoc-5.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 46,
    title: 'Gia Đình Hài Hước',
    subtitle: 'Funny Family',
    image:
      'https://cellphones.com.vn/sforum/wp-content/uploads/2023/02/phim-hai-hay-4.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 47,
    title: 'Cuộc Phiêu Lưu Hài',
    subtitle: 'Comedy Adventure',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_chieu_rap_viet_nam_hai_huoc_13_f0ecada03f.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 48,
    title: 'Niềm Vui Vô Tận',
    subtitle: 'Endless Joy',
    image:
      'https://www.homepaylater.vn/static/a1204e354a9f2614e323484097c0c502/89314/1_nhung_bo_phim_phieu_luu_vien_tuong_hap_dan_nhat_3988ca7748.webp',
    rating: 'P.04',
    label: '',
  },
];

const adventureMovies = [
  {
    id: 49,
    title: 'Cuộc Phiêu Lưu',
    subtitle: 'The Adventure',
    image:
      'https://www.homepaylater.vn/static/a1204e354a9f2614e323484097c0c502/89314/1_nhung_bo_phim_phieu_luu_vien_tuong_hap_dan_nhat_3988ca7748.webp',
    rating: 'P.04',
    label: '',
  },
  {
    id: 50,
    title: 'Hành Trình Vĩ Đại',
    subtitle: 'Great Journey',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_phieu_luu_avatar_516af146f1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 51,
    title: 'Khám Phá Thế Giới',
    subtitle: 'Explore World',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_phieu_luu_jungle_cruise_548457ff6b.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 52,
    title: 'Thám Hiểm',
    subtitle: 'Exploration',
    image:
      'https://static1.dienanh.net/upload/202109/cae6f72a-1412-4d17-99ac-e2daab3b90ba.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 53,
    title: 'Hành Trình Xa',
    subtitle: 'Far Journey',
    image:
      'https://gcs.tripi.vn/public-tripi/tripi-feed/img/473662Oci/indiana-jones-111730.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 54,
    title: 'Khám Phá Mới',
    subtitle: 'New Discovery',
    image:
      'https://image.voh.com.vn/voh/Image/2022/09/12/phim-phieu-luu-mao-hiem-4.jpg?t=o&w=1600&q=85',
    rating: 'P.04',
    label: '',
  },
  {
    id: 55,
    title: 'Cuộc Đua',
    subtitle: 'The Race',
    image:
      'https://image.voh.com.vn/voh/Image/2022/09/12/phim-phieu-luu-mao-hiem-4.jpg?t=o&w=1600&q=85',
    rating: 'P.04',
    label: '',
  },
  {
    id: 56,
    title: 'Hành Trình Cuối',
    subtitle: 'Final Journey',
    image:
      'https://image.voh.com.vn/voh/Image/2022/09/12/phim-phieu-luu-mao-hiem-4.jpg?t=o&w=1600&q=85',
    rating: 'P.04',
    label: '',
  },
];

const dramaMovies = [
  {
    id: 57,
    title: 'Cuộc Đời',
    subtitle: 'The Life',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-tam-ly-thai-lan-2.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 58,
    title: 'Số Phận',
    subtitle: 'Destiny',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_tam_ly_9_9ef4306ed7.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 59,
    title: 'Gia Đình',
    subtitle: 'Family',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/Tiec_trang_mau_dce37639b8.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 60,
    title: 'Tình Yêu Và Hy Vọng',
    subtitle: 'Love and Hope',
    image:
      'https://statics.vincom.com.vn/xu-huong/0-phim/phim-kinh-di-tam-ly/phim-cuoc-goi-han-quoc.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 61,
    title: 'Cuộc Chiến Nội Tâm',
    subtitle: 'Inner Battle',
    image:
      'https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/phim-tam-ly-han-quoc-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 62,
    title: 'Lựa Chọn',
    subtitle: 'The Choice',
    image:
      'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474072IKZ/top-15-phim-tam-ly-toi-pham-han-quoc-hay-nhat_032553810.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 63,
    title: 'Hồi Ức',
    subtitle: 'Memories',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_tam_ly_tinh_cam_my_5_7f37bbec8e.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 64,
    title: 'Tương Lai',
    subtitle: 'Future',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_tam_ly_tinh_cam_my_5_7f37bbec8e.jpg',
    rating: 'P.04',
    label: '',
  },
];

const sciFiMovies = [
  {
    id: 65,
    title: 'Vũ Trụ Xa',
    subtitle: 'Far Universe',
    image:
      'https://cinema.momocdn.net/img/19823532580186290-3gsRQEqvMzkUdirHrZ10MdqamCR.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 66,
    title: 'Tương Lai',
    subtitle: 'The Future',
    image:
      'https://cinema.momocdn.net/img/9031046777181035-p6dtCtsVWCVzfpAliA9x7jmk1V4.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 67,
    title: 'Robot',
    subtitle: 'The Robot',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk59QiFs0z1iLTnOWfn1qY6iootKrcWVPDaQ&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 68,
    title: 'Hành Tinh Mới',
    subtitle: 'New Planet',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToBfxv4JEjnJ4EYXbjpd1YeqjzuVFPp1moA&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 69,
    title: 'Du Hành Thời Gian',
    subtitle: 'Time Travel',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneULDKqrKMBRS1IgQ_Zf89YUsBJZRTb8JaA&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 70,
    title: 'Thế Giới Ảo',
    subtitle: 'Virtual World',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcfjuCBnRO_PXMNqC3Ano-38zw49d3yaYQg&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 71,
    title: 'Trí Tuệ Nhân Tạo',
    subtitle: 'AI Intelligence',
    image:
      'https://img-zlr1.tv360.vn/image1/2022/10/12/18/1665574351677/abb57db4d5c7_360_540.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 72,
    title: 'Không Gian',
    subtitle: 'Space',
    image:
      'https://cdn.tgdd.vn/Files/2021/03/10/1334139/top-10-phim-khoa-hoc-vien-tuong-hay-va-hap-dan-nhat-moi-thoi-dai-202103101646223417.jpg',
    rating: 'P.04',
    label: '',
  },
];

const mysteryMovies = [
  {
    id: 73,
    title: 'Bí Ẩn',
    subtitle: 'The Mystery',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-c10_DsxL4Ix2YjbWUzsQuvCfek85b8RT1Q&s',
    rating: 'P.04',
    label: '',
  },
  {
    id: 74,
    title: 'Vụ Án',
    subtitle: 'The Case',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_trinh_tham_hay_Toi_ac_luc_nua_dem_afa01f8232.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 75,
    title: 'Manh Mối',
    subtitle: 'The Clue',
    image: '/mystery-thriller-forest-dark.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 76,
    title: 'Điều Tra',
    subtitle: 'Investigation',
    image:
      'https://cungdocsach.vn/wp-content/uploads/2020/05/Phim-trinh-th%C3%A1m-hay-nh%E1%BA%A5t-1.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 77,
    title: 'Bí Mật',
    subtitle: 'The Secret',
    image:
      'https://kenh14cdn.com/2019/10/18/photo-1-15714013836301962470367.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 78,
    title: 'Thám Tử',
    subtitle: 'Detective',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_trinh_tham_hay_10_cbd754784b.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 79,
    title: 'Sự Thật',
    subtitle: 'The Truth',
    image:
      'https://simg.zalopay.com.vn/zlp-website/assets/phim_trinh_tham_hay_10_cbd754784b.jpg',
    rating: 'P.04',
    label: '',
  },
  {
    id: 80,
    title: 'Giải Mã',
    subtitle: 'Decode',
    image: '/crime-thriller-movie-poster.jpg',
    rating: 'P.04',
    label: '',
  },
];
export const carouselDataFake = [
  {
    title: 'Phim Điện Ảnh Mới Cóng',
    subtitle: 'New Movies',
    movies: newMovies,
  },
  {
    title: 'Phim Phổ Biến Nhất',
    subtitle: 'Top Rated',
    movies: topMovies,
  },
  {
    title: 'Phim Hành Động',
    subtitle: 'Action Movies',
    movies: actionMovies,
  },
  {
    title: 'Phim Kinh Dị',
    subtitle: 'Horror Movies',
    movies: horrorMovies,
  },
  {
    title: 'Phim Lãng Mạn',
    subtitle: 'Romance Movies',
    movies: romanceMovies,
  },
  {
    title: 'Phim Hài',
    subtitle: 'Comedy Movies',
    movies: comedyMovies,
  },
  {
    title: 'Phim Phiêu Lưu',
    subtitle: 'Adventure Movies',
    movies: adventureMovies,
  },
  {
    title: 'Phim Tâm Lý',
    subtitle: 'Drama Movies',
    movies: dramaMovies,
  },
  {
    title: 'Phim Khoa Học Viễn Tưởng',
    subtitle: 'Sci-Fi Movies',
    movies: sciFiMovies,
  },
  {
    title: 'Phim Trinh Thám',
    subtitle: 'Mystery Movies',
    movies: mysteryMovies,
  },
];
export const reviewsData: Review[] = [
  {
    id: 1,
    username: 'cat882_02',
    avatar: '👤',
    rating: 5,
    date: '2 tuần trước',
    content:
      'Phim hay, diễn xuất tốt, âm nhạc hợp, cốt truyện cuốn hút. Mình khá thích những bộ phim có nội dung sâu sắc...',
    likes: 126,
  },
  {
    id: 2,
    username: 'hoatuoidep_8689',
    avatar: '👤',
    rating: 5,
    date: '3 tuần',
    content: 'Phim hay và cảm động...',
    likes: 89,
  },
  {
    id: 3,
    username: 'Bé',
    avatar: '👤',
    rating: 5,
    date: '1 tuần trước',
    content: 'Thương đứa nhỏ quá rồi mà làm gì được giờ này...',
    likes: 67,
  },
  {
    id: 4,
    username: 'nhuuphup',
    avatar: '👤',
    rating: 5,
    date: '3 tuần',
    content: 'Chỉ có phim của nước ngoài mới hay, trong nước toàn rác...',
    likes: 45,
  },
];

export const castData = [
  { name: 'Chu Nha Văn', role: 'Vai chính' },
  { name: 'Jung Sung A', role: 'Vai phụ' },
  { name: 'Vĩnh Tam Kim', role: 'Vai phụ' },
];
