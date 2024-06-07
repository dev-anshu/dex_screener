"use client";
import { Table, TableHead, TableRow, TableCell, TableBody, TableHeader } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TableList({ data }:any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>TXNS</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Makers</TableHead>
              <TableHead>5M</TableHead>
              <TableHead>1H</TableHead>
              <TableHead>6H</TableHead>
              <TableHead>24H</TableHead>
              <TableHead>Liquidity</TableHead>
              <TableHead>FDV</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell>{row.token}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.txns}</TableCell>
                <TableCell>{row.volume}</TableCell>
                <TableCell>{row.makers}</TableCell>
                <TableCell>{row.fiveM}</TableCell>
                <TableCell>{row.oneH}</TableCell>
                <TableCell>{row.sixH}</TableCell>
                <TableCell>{row.twentyFourH}</TableCell>
                <TableCell>{row.liquidity}</TableCell>
                <TableCell>{row.fdv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
