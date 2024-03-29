import Head from "next/head";
import React, { Suspense } from "react";
import { BlitzLayout, Routes } from "@blitzjs/next";
import { AppShell, Footer, Header, Text } from "@mantine/core";
import { Horizontal, Vertical } from "mantine-layout-components";
import Link from "next/link";

type Props = {
  title?: string;
  children: React.ReactNode;
  maxWidth?: number;
};
const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={
          <Header height={45} p="xs">
            <Horizontal fullH>
              <Link color="gray.3" href={Routes.Home()}>
                Eventio
              </Link>
            </Horizontal>
          </Header>
        }
        footer={
          <Footer height={35}>
            <Horizontal fullH fullW center>
              <Text fz="xs" color="dimmed">
                copyright {thisYear}
              </Text>
            </Horizontal>
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Vertical fullW fullH>
          <Suspense fallback="Loading...">{children}</Suspense>
        </Vertical>
      </AppShell>
    </>
  );
};

export default Layout;
