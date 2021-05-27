import { getAllPosts, getPostBySlug, toMarkdown } from "../../lib/markdown";
import type { Post } from "../../lib/markdown";
import { useMemo, useRef, useEffect, useState } from "react";
import { Format } from "../../lib/format";
import Head from "next/head";

type Params = {
  params: {
    slug: string;
  };
};

type Props = {
  post: Post;
};

type Content = {
  id: string;
  text: string;
  tag: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
};

const allPostInfo: (keyof Post)[] = [
  "title",
  "readingTime",
  "date",
  "slug",
  "description",
  "subjects",
  "content",
  "image",
];

export async function getStaticPaths() {
  const posts = getAllPosts(allPostInfo);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, allPostInfo);
  const content = await toMarkdown(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

const TableOfContent = (props: { items: Content[] }) => {
  return (
    <ul className="fixed top-6 right-5">
      {props.items.map((item) => (
        <li key={item.id} className="hover:text-primary my-2">
          <a href={`#${item.id}`}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export const Component = ({ post }: Props) => {
  const date = useMemo(() => Format.date(post.date), [post]);
  const ref = useRef<HTMLDivElement>(null);
  const [tableOfContent, setTableOfContent] = useState<Content[]>([]);

  useEffect(() => {
    if (ref.current === null) return;
    const updateTableOfContent = () => {
      const headers = Array.from(
        ref.current.querySelectorAll("h1,h2,h3,h4,h5,h6")
      );
      return headers.map((hx): Content => {
        const tag = hx.tagName as Content["tag"];
        const id = Format.slug(hx.textContent);
        hx.id = id;
        return {
          id,
          tag,
          text: hx.textContent,
        };
      });
    };
    setTableOfContent(updateTableOfContent);
    const observer = new MutationObserver(() =>
      setTableOfContent(updateTableOfContent)
    );
    observer.observe(ref.current, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="flex flex-col w-full">
        <Head>
          <meta name="description" content={post.description} />
          <meta name="keywords" content={post.subjects.join(",")} />
          <title>Brenoco's Blog | {post.title}</title>
        </Head>
        <header className="mb-8">
          <h1 className="font-bold text-5xl">{post.title}</h1>
          <p className="prose mt-4 mb-2">{post.description}</p>
          <time className="text-md prose">{date}</time>
        </header>
        <section
          ref={ref}
          className="markdown prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      {<TableOfContent items={tableOfContent} />}
    </>
  );
};

export default Component;
