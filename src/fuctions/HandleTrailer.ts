interface Props {
  id: number | undefined;
  setModelIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setKeyTrailer: React.Dispatch<React.SetStateAction<string>>;
}
export const handleTrailer = async ({
  id,
  setModelIsOpen,
  setKeyTrailer,
}: Props) => {
  try {
    setKeyTrailer('');
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const response = await fetch(url, options);
    const data = await response.json();
    setModelIsOpen(true);
    setKeyTrailer(data.results[0].key);
  } catch (error) {
    setModelIsOpen(false);
    console.log(error);
  }
};
