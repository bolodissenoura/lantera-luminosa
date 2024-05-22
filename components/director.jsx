import Image from 'next/image';

const Director = ({ director }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-lg">
      <p
        className={`font-medium px-4 py-2 text-lg  font-primary text-yellow w-full bg-zinc-900 rounded-t-lg select-none`}
      >
        {director.name}
      </p>
      <Image
        src={director.url}
        alt="Currículo"
        width={director.width}
        height={director.height}
      />
    </div>
  );
};

export default Director;
