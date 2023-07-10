import PropTypes from "prop-types";
import { Card, CardContent, Stack, Typography } from "@mui/material";

export const StockCard = (props) => {
  const { stockSymbol, stockName, stockPrice, marketCap, PE, EVEBITDA } = props;

  // Format the stock price to 1 decimal place and prefix with a dollar sign
  const formattedStockPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 1,
  }).format(stockPrice);

  // Convert the market cap to billions and format to 1 decimal place with comma as thousand separator, prefix with a dollar sign
  const formattedMarketCap =
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 1,
    }).format(marketCap / 1_000_000_000) + "B";

  // Convert PE and EVEBITDA from string to number and format them to two decimal places
  const formattedPE = parseFloat(PE).toFixed(2);
  const formattedEVEBITDA = parseFloat(EVEBITDA).toFixed(2);

  return (
    <Card>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack direction="column" spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                Ticker
              </Typography>
              <Typography variant="h6">{stockSymbol}</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                Company
              </Typography>
              <Typography variant="h7">{stockName}</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                Price
              </Typography>
              <Typography variant="h6">{formattedStockPrice}</Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                Market Cap
              </Typography>
              <Typography variant="h7">{formattedMarketCap}</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                PE
              </Typography>
              <Typography variant="h7">{formattedPE}</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="caption">
                EV/EBITDA
              </Typography>
              <Typography variant="h7">{formattedEVEBITDA}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

StockCard.propTypes = {
  stockSymbol: PropTypes.string.isRequired,
  stockName: PropTypes.string.isRequired,
  stockPrice: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  PE: PropTypes.string.isRequired,
  EVEBITDA: PropTypes.string.isRequired,
};
