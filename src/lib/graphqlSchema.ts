const query = `
{
    swaps (orderBy: timestamp, orderDirection: desc) {
      transaction {
        blockNumber
        timestamp
        id
        gasUsed
      }
      recipient
      sender
      origin
      amount0
      amount1
      amountUSD
      token0 {
        id
        symbol
      }
      token1 {
        symbol
        id
      }
    }
  }
`;

export default query;