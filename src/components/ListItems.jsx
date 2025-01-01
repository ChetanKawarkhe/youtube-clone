import React from "react";

const ListItems = () => {
  const categories = [
    "All",
    "Music",
    "React router",
    "Computer Programming",
    "Reverbration",
    "Movie Musicals",
    "India National Crickt Team",
    "News",
    "Mixes",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
    "Live",
    "Dramedy",
    "1990s",
    "Romantic Drama",
    "Action Movies",
    "Gaming",
    "Stock market",
    "Bikes",
    "BMW",
    "Lamborghini",
    "Benneli 600i",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4">
      <div className="flex space-x-4 flex-nowrap">
      {categories.map((category) => {
        return (
          <div
            key={category}
            className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-2 py-2 font-medium text-gray-700 cursor-pointer"
          >
            {category}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ListItems;
