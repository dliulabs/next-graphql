import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ClientSideOnly from '../components/ClientSideOnly';
import RestaurantList from '../components/RestaurantList';
import { useState } from 'react';
import { Col, Input, InputGroup, InputGroupText, Row } from 'reactstrap';

export default function RestaurantListPage() {
  const [query, updateQuery] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurants</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          <Link href="/" aria-hidden="true" className="aal_anchor" id="welcome-to-next-js">
            <svg
              aria-hidden="true"
              className="aal_svg"
              height="16"
              version="1.1"
              viewBox="0 0 16 16"
              width="16">
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
            </svg>
          </Link>
          Welcome to <a href="https://www.npmjs.com/package/next-apollo">Next-Apollo Strapi</a>
        </h2>
        <div className="container-fluid">
          <Row>
            <Col>
              <div className="search">
                <InputGroup>
                  <InputGroupText>Search</InputGroupText>
                  <Input
                    placeholder="Query"
                    onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
                    value={query}
                  />
                </InputGroup>
              </div>
              <ClientSideOnly>
                <RestaurantList search={query} />
              </ClientSideOnly>
            </Col>
          </Row>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </Link>
      </footer>
    </div>
  );
}
