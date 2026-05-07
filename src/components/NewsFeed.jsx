import Typography from "@mui/material/Typography";
import LoadingArticle from "./LoadingArticle";
import NewsArticle from "./NewsArticle";
function NewsFeed({ articles, loading }) {
  // if (loading) {
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
  if (!loading && !articles?.length) {
    return (
      <Typography
        align="center"
        sx={{ mt: 4 }}
        variant="h6"
        color="textSecondary"
      >
        No articles found
      </Typography>
    );
  }

  return (
    <div>
      {loading &&
        [...Array(5)].map((_, index) => <LoadingArticle key={index} />)}
      {!loading &&
        articles.map((article) => (
          <NewsArticle key={JSON.stringify(article)} {...article} />
        ))}
    </div>
  );
}
export default NewsFeed;
