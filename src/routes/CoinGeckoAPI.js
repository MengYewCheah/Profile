function CoinGeckoAPI () {
  return (
    <div style={{marginTop: "-20px"}}>
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
      <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
      <coingecko-coin-price-chart-widget  coin-id="bitcoin" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
    </div>
  )
}

export default CoinGeckoAPI;