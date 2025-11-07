import { useEffect, useState, useRef } from 'react';
import { Heart, Play, Zap } from 'lucide-react';
import { allCommentsData } from '@/data/movies';

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

export default function NewCommentsSection() {
  const allComments = allCommentsData;
  const [displayedComments, setDisplayedComments] = useState<Comment[]>(() =>
    allComments.slice(0, 4)
  );
  const [availableComments, setAvailableComments] = useState<Comment[]>(() =>
    allComments.slice(4)
  );
  const [animatingIds, setAnimatingIds] = useState<Set<number>>(new Set());
  const commentIdCounter = useRef(allComments.length + 1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Tạo comment mới mỗi 5 giây
    intervalRef.current = setInterval(() => {
      setDisplayedComments((prev) => {
        let newComment: Comment;

        // Nếu đã có sẵn comment trong availableComments, lấy từ đó
        if (availableComments.length > 0) {
          newComment = availableComments[0];
          setAvailableComments((prev) => prev.slice(1));
        } else {
          // Nếu hết comment, tạo comment mới tự động
          newComment = {
            id: commentIdCounter.current++,
            name: `User ${commentIdCounter.current}`,
            avatar:
              'https://cafefcdn.com/203337114487263232/2025/5/21/471584752817336320-2024-6-3-doraemon-3-17173722166781704981911-30-9-657-1207-crop-1717372336444425413969-1747731331314975257991-1747812483041-17478124844651650953235.jpeg',
            text: `Phim hay quá`,
            replies: 'Phim mới',
            views: Math.floor(Math.random() * 10),
            likes: Math.floor(Math.random() * 5),
            comments: Math.floor(Math.random() * 3),
          };
        }

        // Đánh dấu comment mới để trigger animation
        setAnimatingIds((prev) => new Set([...prev, newComment.id]));

        // Xóa marker sau khi animation kết thúc
        setTimeout(() => {
          setAnimatingIds((prev) => {
            const next = new Set(prev);
            next.delete(newComment.id);
            return next;
          });
        }, 600);

        return [newComment, ...prev.slice(0, 2)];
      });
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [availableComments.length]);

  return (
    <section className="md:col-span-2 lg:col-span-2">
      <h2 className="flex items-center gap-2 text-base sm:text-lg font-bold mb-4 sm:mb-6">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        BÌNH LUẬN MỚI
      </h2>
      <div className="space-y-3 sm:space-y-4 px-2 sm:px-4 md:px-8 relative">
        {displayedComments.map((comment) => {
          const isNew = animatingIds.has(comment.id);
          return (
            <div
              key={comment.id}
              className={`
                flex gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-[#1f2937] rounded-xl sm:rounded-2xl hover:bg-[#2d3748] 
                transition-all duration-500 ease-in-out cursor-pointer group
                ${isNew ? 'animate-slide-in' : ''}
              `}
              style={{
                animation: isNew
                  ? 'slideInFromTop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  : undefined,
              }}
            >
              <img
                src={comment.avatar || '/placeholder.svg'}
                alt={comment.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0 border border-[#2d3748]"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-[#ff6b9d] transition truncate">
                  {comment.name}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#9ca3af] line-clamp-2">
                  {comment.text}
                </p>
                <div className="flex items-center gap-2 mt-1 sm:mt-2 text-xs text-[#6b7280]">
                  <Play className="w-3 h-3" />
                  <span className="truncate">{comment.replies}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs text-[#6b7280] flex-shrink-0">
                <span>{comment.views}</span>
                <Heart className="w-3 h-3" />
                <span>{comment.likes}</span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
