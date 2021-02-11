import { Text, Box, Input, Container, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
// import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
// import { Container } from "../components/Container";

const Index = () => {
  const [TweetName, setTweetName] = useState("");

  return (
    <Container height="100vh">
      <Head>
        <title>かわいいハッシュタグツイート生成サイト</title>
      </Head>
      <Heading my="2">かわいいハッシュタグツイート生成サイト</Heading>
      <Input
        value={TweetName}
        onChange={(e) => setTweetName(e.target.value)}
        placeholder="ツイートする名前"
      />
      <Box m="4">
        <Text as="pre">
          {`#${TweetName}しか勝たん\n#${TweetName}すき\n#${TweetName}好き\n#${TweetName}とうとい\n#${TweetName}尊い\n#${TweetName}かわいい\n#${TweetName}可愛い\n#1日1回の${TweetName}ちゃんかわいい\n#1日n回の${TweetName}ちゃん可愛い\n#${TweetName}可愛すぎてキュン死\n`}
        </Text>
        <Button
          my="4"
          as="a"
          href={
            "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent(
              `#${TweetName}しか勝たん\n#${TweetName}すき\n#${TweetName}好き\n#${TweetName}とうとい\n#${TweetName}尊い\n#${TweetName}かわいい\n#${TweetName}可愛い\n#1日1回の${TweetName}ちゃんかわいい\n#1日n回の${TweetName}ちゃん可愛い\n#${TweetName}可愛すぎてキュン死\n`
            )
          }
        >
          ツイートする
        </Button>
      </Box>
    </Container>
  );
};
export default Index;
