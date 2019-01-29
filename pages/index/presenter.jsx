import Link from "next/link";

const Index = props => {
  const { title, linkTo, lastUpdate, light, count, addCount } = props;

  const add = () => {
    addCount();
  };

  const format = t =>
    `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
      t.getUTCSeconds()
    )}`;

  const pad = n => (n < 10 ? `0${n}` : n);

  return (
    <div>
      <h1>{title}</h1>

      <div className={light ? "light" : ""}>
        {format(new Date(lastUpdate))}
        <style jsx>{`
          div {
            padding: 15px;
            display: inline-block;
            color: #82fa58;
            font: 50px menlo, monaco, monospace;
            background-color: #000;
          }
          .light {
            background-color: #999;
          }
        `}</style>
      </div>

      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button onClick={add}>Add To Count</button>
      </div>

      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Index;
