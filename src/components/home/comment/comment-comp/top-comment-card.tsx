import { Eye, MessageCircle, Share2 } from 'lucide-react';

interface TopCommentCardProps {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  views: number;
  replies: number;
  shares: number;
  coverImage: string;
}

export default function TopCommentCard({
  name,
  avatar,
  bio,
  views,
  replies,
  shares,
  coverImage,
}: TopCommentCardProps) {
  return (
    <div className="flex-shrink-0 w-56 sm:w-64 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#ff6b9d]/20 transition border border-[#2d3748] group cursor-pointer">
      {/* Cover Image */}
      <div className="relative h-24 sm:h-32 overflow-hidden">
        <img
          src={coverImage || '/placeholder.svg'}
          alt="cover"
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* User Info */}
        <div className="flex items-start gap-2 sm:gap-3">
          <img
            src={avatar || '/placeholder.svg'}
            alt={name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#ff6b9d] flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-xs sm:text-sm group-hover:text-[#ff6b9d] transition truncate">
              {name}
              {name === 'Hay cmt dao' && <span className="ml-1">∞</span>}
              {name === 'Mê phim' && <span className="ml-1">∞</span>}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-[#9ca3af] line-clamp-2 leading-relaxed">
          {bio}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs text-[#6b7280] border-t border-[#2d3748] pt-2 sm:pt-3">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            <span>{replies}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-3 h-3" />
            <span>{shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
