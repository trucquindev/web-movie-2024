import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('');
  return (
    <div className="p-4 w-full bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1
          onClick={() => navigate('/')}
          className="text-3xl uppercase font-bold text-red-500 cursor-pointer"
        >
          Movie
        </h1>
        <div className="flex gap-2 text-white">
          <span
            className=" hover:text-red-500 cursor-pointer uppercase "
            onClick={() => navigate('/')}
          >
            Home
          </span>
          <span
            className=" hover:text-red-500 cursor-pointer uppercase"
            onClick={() => navigate('/dmca')}
          >
            Dmca
          </span>
          <span
            className=" hover:text-red-500 cursor-pointer uppercase"
            onClick={() => alert('Đang cập nhật!')}
          >
            Contact
          </span>
        </div>
      </div>
      <div className="flex w-full justify-end max-w-sm items-center space-x-2">
        <Input
          className="w-1/2 bg-white rounded-xl text-black"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
        <Button
          type="submit"
          className="bg-red-500 rounded-xl text-white hover:bg-red-300"
          onClick={() => {
            if (value === '') {
              toast.error('Please enter a search term');
              return;
            }

            navigate({
              pathname: '/search',
              search: createSearchParams({ value: value }).toString(),
            });
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Header;
