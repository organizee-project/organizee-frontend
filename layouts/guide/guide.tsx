import { useState } from "react";

import { Options } from "components/options";
import { LayoutGuide } from "components/layouts";

import { Flex } from "styles";

import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
  BsThreeDots,
} from "react-icons/bs";
import { GuideComments } from "./guideComments";

export const Guide = () => {
  const guide = {
    title: "A arte europeia da perspectiva latina",
    author: "Anna Luiza",
    tags: [
      { id: "Arte", name: "Arte" },
      { id: "Latinos", name: "Latinos" },
      { id: "Sociologia", name: "Sociologia" },
    ],
    is_liked: true,
    is_saved: true,
    content: [
      {
        id: "ocqcoho20W",
        type: "header",
        data: {
          text: "Editor.js",
          level: 2,
        },
      },
      {
        id: "lQkv5CQPwe",
        type: "paragraph",
        data: {
          text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
        },
      },
      {
        id: "_3MjCTzc5A",
        type: "header",
        data: {
          text: "Key features",
          level: 3,
        },
      },
      {
        id: "y7ovRMyzOz",
        type: "list",
        data: {
          style: "unordered",
          items: [
            "It is a block-styled editor",
            "It returns clean data output in JSON",
            "Designed to be extendable and pluggable with a simple API",
          ],
        },
      },
      {
        id: "SPiMqhn8qt",
        type: "header",
        data: {
          text: "What does it mean «block-styled editor»",
          level: 3,
        },
      },
      {
        id: "EVEg4LEkr-",
        type: "paragraph",
        data: {
          text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
        },
      },
      {
        id: "0yob7aFPnE",
        type: "paragraph",
        data: {
          text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram guides, surveys and polls, CTA-buttons and even games.',
        },
      },
      {
        id: "XKKAwRUkHD",
        type: "header",
        data: {
          text: "What does it mean clean data output",
          level: 3,
        },
      },
      {
        id: "YY11wv3ms2",
        type: "paragraph",
        data: {
          text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
        },
      },
      {
        id: "Tb9LFh7AcH",
        type: "paragraph",
        data: {
          text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.',
        },
      },
      {
        id: "DQJ0b-YPpf",
        type: "paragraph",
        data: {
          text: "Clean data is useful to sanitize, validate and process on the backend.",
        },
      },
      {
        id: "ApaNwVHp-g",
        type: "quote",
        data: {
          text: "fsfdsfsd dhuas dsai dasudsa dsaudsa udsa dsaui sdausa dasudsa usa dsaudsasdsa dsaud saudbsa dsadsa dusadsa sadsa saudsa dsahdsadsa",
          caption: "fds",
          alignment: "left",
        },
      },
      {
        id: "se-sIiEjBu",
        type: "delimiter",
        data: {},
      },
      {
        id: "rM76lqXaLJ",
        type: "code",
        data: {
          code: "dsada",
        },
      },
      {
        id: "ivfIa0AFY1",
        type: "image",
        data: {
          file: {
            url: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
          },
          caption: "",
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
      {
        id: "lavGV3swSZ",
        type: "table",
        data: {
          withHeadings: true,
          content: [
            ["a", "b", "c", "d", ""],
            ["e", "f", "g", "h", "i"],
          ],
        },
      },
    ],
    comments: [
      {
        user: {
          username: "tatiferreira",
          image: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
        },
        content:
          "dhasu dsua dsaudasuda duas dasudasbdas dsaud saudsa dsabud sauid asudasudasdsaud sudsa dsaud sauidsa dus dsaudsa udsa dsauds audsa dsaud suds audsa d",
      },
      {
        user: {
          username: "tatiferreira",
          image: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
        },
        content:
          "dhasu dsua dsaudasuda duas dasudasbdas dsaud saudsa dsabud sauid asudasudasdsaud sudsa dsaud sauidsa dus dsaudsa udsa dsauds audsa dsaud suds audsa d",
      },
    ],
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [liked, setLiked] = useState(guide.is_saved);
  const [saved, setSaved] = useState(guide.is_liked);

  return (
    <>
      <LayoutGuide guide={guide}>
        <Flex width="136px">
          <div onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill size="26px" className="pointer" />
            ) : (
              <BsHeart size="26px" className="pointer" />
            )}
          </div>
          <div onClick={() => setSaved(!saved)}>
            {saved ? (
              <BsBookmarkFill size="26px" className="pointer" />
            ) : (
              <BsBookmark size="26px" className="pointer" />
            )}
          </div>
          <div style={{ position: "relative" }}>
            <BsThreeDots
              size="26px"
              className="pointer"
              onClick={() => setOpenOptions(!openOptions)}
            />
            <Options
              open={openOptions}
              itens={[
                { name: "Denunciar Trilha", onClick: () => {} },
                { name: "Denunciar Criador", onClick: () => {} },
              ]}
            />
          </div>
        </Flex>
      </LayoutGuide>
      <GuideComments comments={guide.comments} />
    </>
  );
};
