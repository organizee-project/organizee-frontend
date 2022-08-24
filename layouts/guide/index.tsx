import { Header } from "./guideHeader";
import { Content } from "./guideContent";

import { Container } from "styles/styles";

const Guide = () => {
  const guide = {
    title: "A arte europeia da perspectiva latina",
    author: "Anna Luiza",
    categories: ["Arte", "Latinos", "Sociologia"],
    is_liked: true,
    is_saved: true,
    content: {
      blocks: [
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
          id: "se-sIiEjBu",
          type: "delimiter",
          data: {},
        },
        {
          id: "iPWG0B9ICo",
          type: "paragraph",
          data: {
            text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
          },
        },
        {
          id: "ivfIa0AFY1",
          type: "image",
          data: {
            file: {
              url: "https://codex.so/public/app/img/external/codex2x.png",
            },
            caption: "",
            withBorder: false,
            stretched: false,
            withBackground: false,
          },
        },
      ],
      version: "2.24.3",
    },
  };

  return (
    <Container paddingTop="55px">
      <Header guide={guide} />
      <Content content={guide.content.blocks} />
    </Container>
  );
};

export default Guide;
