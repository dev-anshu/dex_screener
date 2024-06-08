"use client";
import { Table, TableHead, TableRow, TableCell, TableBody, TableHeader } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function TableList({ data }:any) {
  const formatTxns = (txns: string) => {
    return `${txns.slice(0, 2)}...${txns.slice(-3)}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>hash</TableHead>
              <TableHead>from token</TableHead>
              <TableHead>to token</TableHead>
              <TableHead>Gas</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>from</TableHead>
              <TableHead>to</TableHead>
              <TableHead>Block</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell><a href={`https://etherscan.io/tx/${row.transaction.id}`} target="_blank" rel="noopener noreferrer">{formatTxns(row.transaction.id)}</a></TableCell>
                <TableCell>{parseFloat(row.amount0) > 0 ? `${parseFloat(row.amount0).toFixed(3)} ${row.token0.symbol}`  :`${parseFloat(row.amount1).toFixed(3)} ${row.token1.symbol}`}</TableCell>
                <TableCell>{parseFloat(row.amount1) < 0 ? `${Math.abs(row.amount1).toFixed(3)} ${row.token1.symbol}` : `${Math.abs(row.amount0).toFixed(3)} ${row.token0.symbol}`}</TableCell>
                <TableCell>{row.transaction.gasUsed}</TableCell>
                <TableCell>{row.transaction.timestamp}</TableCell>
                <TableCell>{formatTxns(row.origin)}</TableCell>
                <TableCell>{formatTxns(row.recipient)}</TableCell>
                <TableCell>{row.transaction.blockNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
