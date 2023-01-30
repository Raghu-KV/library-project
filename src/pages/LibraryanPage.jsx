import LibraryanNavBar from "../components/LibraryanNavBar";

function LibraryanPage() {
  const booksData = [
    {
      id: 1,
      bookName: "The good Surgeon",
      bookCover:
        "https://static-cse.canva.com/blob/921445/YellowSurgeonCreativeBookCover.jpg",
      totalPages: 651,
      author: "Richard Sanchez",
    },
    {
      id: 2,
      bookName: "Get in Trouble",
      bookCover:
        "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/getintrouble.jpg",
      totalPages: 754,
      author: "Kelly Link",
    },
    {
      id: 3,
      bookName: "All Out",
      bookCover:
        "https://s2982.pcdn.co/wp-content/uploads/2018/11/all-out-book-cover-677x1024.jpg.optimal.jpg",
      totalPages: 174,
      author: "Sundra Mitchell",
    },
    {
      id: 4,
      bookName: "All this Time",
      bookCover:
        "https://rivetedlit.com/wp-content/uploads/2020/01/all-this-time-9781534466340_xlg.jpg",
      totalPages: 174,
      author: "Mikki Daughtry",
    },
    {
      id: 5,
      bookName: "Don't call the Wolf",
      bookCover:
        "https://i.pinimg.com/originals/56/26/e7/5626e79bfc771263065ea07d08aeb69f.png",
      totalPages: 174,
      author: "Alexsandra Ross",
    },
  ];

  return (
    <>
      <div className="bg-slate-900 h-screen">
        {/* <LibraryanNavBar /> */}
        <div className="container mx-auto pt-32">
          {booksData.map((bookData) => (
            <h1>{bookData.bookName}</h1>
          ))}
        </div>
        <div className="h-screen"></div>
      </div>
    </>
  );
}

export default LibraryanPage;
