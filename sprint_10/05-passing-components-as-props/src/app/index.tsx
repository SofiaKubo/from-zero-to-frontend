type CardTitleProps = {
  title: string;
};

type CardBodyProps = {
  price: string;
};

type CardProps = {
  title: JSX.Element;
  body: JSX.Element;
};

function CardTitle(props: CardTitleProps) {
  return <h5 className="card-title">{props.title}</h5>;
}

function CardBody(props: CardBodyProps) {
  return (
    <div className="card-body">
      <p>
        Звезда созвездия Большого Пса. Звезда главной последовательности, спектрального класса A1. Ярчайшая звезда
        ночного неба; её светимость в 25 раз превышает светимость Солнца, при этом не является рекордной в мире звёзд —
        высокий видимый блеск Сириуса обусловлен его относительной близостью к Земле.
      </p>
      <div className="price">{props.price}</div>
    </div>
  );
}

function Card(props: CardProps) {
  return (
    <div className="card">
      {props.title}
      {props.body}
      <button type="button">В корзину</button>
    </div>
  );
}

export const App = () => {
  return <Card title={<CardTitle title="Звезда Сириус" />} body={<CardBody price="Цена: oоооочень много" />} />;
};
