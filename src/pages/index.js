import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { StockCard } from "src/sections/overview/StockCard";

const Page = () => {
  const [stockInfo, setStockInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((response) => response.json())
      .then((data) => {
        const newStockInfo = data.map((company) => ({
          stockSymbol: company.symbol,
          stockName: company.name,
          stockPrice: company.sharePrice,
          marketCap: company.marketCap,
          PE: company.PE,
          EVEBITDA: company.EVEBITDA,
        }));

        setStockInfo(newStockInfo);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {stockInfo.map((stock, index) => (
              <Grid key={index} xs={12} sm={6} lg={3}>
                <StockCard {...stock} sx={{ height: "100%" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
