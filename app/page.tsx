'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './page.module.css'

// 型定義
type Post = {
  id: number
  title: string
}

// Homeコンポーネント
export default async function Home() {
  // サーバーサイドでのデータフェッチ
  const posts: Post[] = await fetchPosts()

  // クライアントサイドの状態管理
  const [likes, setLikes] = useState(0)

  // イベントハンドラ
  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js Blog</title>
        <meta name="description" content="A simple blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js Blog
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div className={styles.card}>
                <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.likeSection}>
          <button onClick={handleLike} className={styles.likeButton}>
            Like
          </button>
          <p>This page has been liked {likes} times</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// データフェッチ関数
async function fetchPosts(): Promise<Post[]> {
  // 実際のアプリケーションでは、ここで外部APIやデータベースからデータを取得します
  return [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ]
}