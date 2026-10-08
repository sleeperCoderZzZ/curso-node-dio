import createApp from "./app/app";

const port = process.env.PORT || 3333;

const app = createApp();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;