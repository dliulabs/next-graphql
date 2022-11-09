/* /components/Layout.js */

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Nav, NavItem } from 'reactstrap';

export default function Layout(props) {
  const title = 'Welcome to Nextjs';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href="/" className="navbar-brand">
              Home
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            <Link href="/login" className="nav-link">
              Sign In
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/register" className="nav-link">
              Sign Up
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}
