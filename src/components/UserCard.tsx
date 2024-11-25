import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-ervinPurple even:bg-ervinYellow p-4 flex-1 min-w-[130px]">
      {/**TOP SECTION */}
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" width={20} height={20} alt="more" />
      </div>

      {/** BOTTOM SECTION */}
      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
      <div className=""></div>
    </div>
  );
};

export default UserCard;
