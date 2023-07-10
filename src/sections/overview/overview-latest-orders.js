import { format } from 'date-fns';
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

const [companies, setCompanies] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/companies")
    .then((response) => response.json())
    .then((data) => setCompanies(data));
}, []);


  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Name</TableCell>
                <TableCell sortDirection="desc">MarketCap</TableCell>
                <TableCell>Net Income</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((company) => {
                // const createdAt = format(company.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow>
                    <TableCell>{company.symbol}</TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.marketCap}</TableCell>
                    <TableCell>{company.netIncome}</TableCell>
                    <TableCell>
                      {/* <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
