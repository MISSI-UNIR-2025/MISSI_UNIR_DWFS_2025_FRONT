const BookCover = ({ image, title }) => (
  <div className="md:col-span-4 lg:col-span-3">
    <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
    </div>
  </div>
);

export default BookCover;
