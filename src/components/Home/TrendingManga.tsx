// Import css files
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



const TrendingManga = ({data}: any) => {

 
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
  };

  const mangaData: {
    id: string;
    title: string;
    chapter: Array<string>;
    imageUrl: string;
    trending: string;
  }[] = [
    {
      id: "1",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2"],
      imageUrl: "/assets/manga2.jpg",
      trending: "yes",
    },
    {
      id: "2",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 5", "chapter 2"],
      imageUrl: "/assets/manga3.jpg",
      trending: "yes",
    },
    {
      id: "3",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 8", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
    },
    {
      id: "4",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 20", "chapter 2"],
      imageUrl: "/assets/manga1.png",
      trending: "yes",
    },
    {
      id: "5",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 10", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
    },
    {
      id: "6",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 15", "chapter 2"],
      imageUrl: "/assets/manga1.png",
      trending: "yes",
    },
    {
      id: "7",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 16", "chapter 2"],
      imageUrl: "/assets/manga2.jpg",
      trending: "yes",
    },
    {
      id: "8",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2"],
      imageUrl: "/assets/manga3.jpg",
      trending: "yes",
    },
    {
      id: "9",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 19", "chapter 2"],
      imageUrl: "/assets/manga4.jpg",
      trending: "yes",
    },
    {
      id: "10",
      title: "Hanging Out With A Gamer Girl",
      chapter: ["chapter 1", "chapter 2"],
      imageUrl: "/assets/manga5.jpg",
      trending: "yes",
    },
  ];
  const getRandomChapterNumber = () => {
  return Math.floor(Math.random() * 4); 
};
  
  return (
    <Box
      component="div"
      className="tendingMangaMain"
      sx={{ marginBottom: "60px" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#903", marginBottom: "20px", fontWeight: "700" }}
      >
        Trending
      </Typography>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <Box
            component="div"
            className="trendingMangaSingle"
            sx={{
              background: `url(http://fictionteller.se/${item.thumbnail})`,
              height: "200px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              mr: "10px",
              display: "flex !important",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            key={index}
          >
            <Box
              component="div"
              className="trendingMangaSingleContent"
              sx={{ background: "rgba(0,0,0,0.7)", padding: "0px 5px" }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                <Typography
                  paragraph
                  sx={{ fontSize: "14px", marginBottom: "0px" }}
                >
                  {item.title}
                </Typography>
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                <Typography
                  paragraph
                  sx={{ fontSize: "14px", marginBottom: "0px" }}
                >
                  {item.chapters[0].title}
                </Typography>
              </Link>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrendingManga;
