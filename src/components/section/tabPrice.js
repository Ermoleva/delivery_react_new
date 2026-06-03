export default function TabPrice({ items = [] }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.title} className="tab__content_price-item">
          <h2>{item.title}</h2>
          <p
            className={
              item.previousPrice && item.previousPrice !== "-15%"
                ? "tab__content_past-price lie__price"
                : "tab__content_past-price"
            }
          >
            {item.previousPrice}
          </p>
          <p className="tab__content_now-price">{item.currentPrice}</p>
        </div>
      ))}
    </>
  );
}
