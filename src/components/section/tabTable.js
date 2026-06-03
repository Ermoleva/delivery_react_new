export default function TabTable({ meals = [] }) {
  return (
    <div className="tab__content_table">
      {meals.map((meal) => (
        <div key={meal.title} className="tab__content_table-item">
          <div className="tab__content_table-name">
            <h2 className="tab__content_table-title">{meal.title}</h2>
            <p className="tab__content_table-subtitle">{meal.time}</p>
          </div>
          <div className="tab__content_table-info">
            {meal.info.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="tab__content_table-price">
            {meal.portions.map((portion) => (
              <p key={portion}>{portion}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
