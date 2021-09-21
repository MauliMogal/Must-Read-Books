import React, { useState } from "react";
import "./styles.css";

//database
const AllBooks = {
  Nonfiction: [
    {
      Title: "Sapiens: A Brief History of Humankind",
      Description:
        "In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg",
      Rating: `8.9/10`
    },
    {
      Title:
        "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
      Description:
        "Through forceful storytelling and wry insight, Levitt and co-author Stephen J. Dubner show that economics is, at root, the study of incentives -- how people get what they want, or need, especially when other people want or need the same thing. In Freakonomics, they set out to explore the hidden side of ... well, everything. The inner workings of a crack gang. The truth about real-estate agents. The myths of campaign finance. The telltale marks of a cheating schoolteacher. The secrets of the Ku Klux Klan.",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550917827l/1202._SX318_.jpg",
      Rating: `8.1/10`
    },
    {
      Title: "Guns, Germs, and Steel: The Fates of Human Societies",
      Description:
        "In this book, Jared Diamond convincingly argues that geographical and environmental factors shaped the modern world. Societies that had a head start in food production advanced beyond the hunter-gatherer stage, and then developed writing, technology, government, and organized religion—as well as nasty germs and potent weapons of war—and adventured on sea and land to conquer and decimate preliterate cultures. A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history.",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453215833l/1842._SY475_.jpg",
      Rating: `7.4/10`
    }
  ],
  Finance: [
    {
      Title:
        "One Up On Wall Street: How to Use What You Already Know to Make Money in the Market",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444850522l/762462.jpg",
      Description:
        "America’s most successful money manager tells how average investors can beat the pros by using what they know. According to Lynch, investment opportunities are everywhere. From the supermarket to the workplace, we encounter products and services all day long. By paying attention to the best ones, we can find companies in which to invest before the professional analysts discover them. When investors get in early, they can find the “tenbaggers,” the stocks that appreciate tenfold from the initial investment. A few tenbaggers will turn an average stock portfolio into a star performer.",
      Rating: `9/10`
    },

    {
      Title:
        "The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns",
      Description:
        "Why business reality--dividend yields and earnings growth--is more important than market expectations How to overcome the powerful impact of investment costs, taxes, and inflation How the magic of compounding returns is overwhelmed by the tyranny of compounding costs What expert investors and brilliant academics--from Warren Buffett and Benjamin Graham to Paul Samuelson and Burton Malkiel--have to say about index investing And much more You'll also find warnings about investment fads and fashions, including the recent stampede into exchange traded funds and the rise of indexing gimmickry. The real formula for investment success is to own the entire market, while significantly minimizing the costs of financial intermediation. That's what index investing is all about. And that's what this book is all about.",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347673616l/171127.jpg",
      Rating: `8.7/10`
    },

    {
      Title: "The Psychology of Money",
      Description:
        "Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important matters.",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581527774l/41881472._SY475_.jpg",
      Rating: `8.6/10`
    }
  ],

  Entrepreneurship: [
    {
      Title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598011736l/54898389._SY475_.jpg",
      Description:
        "Naval Ravikant is an entrepreneur, philosopher, and investor who has captivated the world with his principles for building wealth and creating long-term happiness. The Almanack of Naval Ravikant is a collection of Naval's wisdom and experience from the last ten years, shared as a curation of his most insightful interviews and poignant reflections. This isn't a how-to book, or a step-by-step gimmick. Instead, through Naval's own words, you will learn how to walk your own unique path toward a happier, wealthier life.",
      Rating: `9.5/10`
    },
    {
      Title: "Zero to One: Notes on Startups, or How to Build the Future",
      Description:
        "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630663027l/18050143.jpg",
      Rating: `8.7/10`
    },
    {
      Title:
        "The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435673032l/81948._SY475_.jpg",
      Description:
        "Gerber walks you through the steps in the life of a business—from entrepreneurial infancy through adolescent growing pains to the mature entrepreneurial perspective: the guiding light of all businesses that succeed—and shows how to apply the lessons of franchising to any business, whether or not it is a franchise. Most importantly, Gerber draws the vital, often overlooked distinction between working on your business and working in your business.",
      Rating: `8.4/10`
    }
  ]
};

const genreNames = Object.keys(AllBooks);

export default function App() {
  const [booksList, setBooksList] = useState(AllBooks.Entrepreneurship);

  function genreClickHandler(genre) {
    const books = AllBooks[genre];
    setBooksList(books);
  }

  function getBooksPost(books) {
    const title = books.Title;
    const imageUrl = books.Image;
    const desc = books.Description;
    const rating = books.Rating;
    const htmlOfList = (
      <li>
        <img alt="book-cover" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          📚
        </span>{" "}
        Must Read Books
      </h1>
      <h4>
        Checkout my all time favourite books. Select a genre to get started.
      </h4>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {booksList.map((books) => {
          return getBooksPost(books);
        })}
      </ul>
    </div>
  );
}
