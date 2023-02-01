import Title from "@/components/Title";
import Loading from "../components/Loading";
import Link from "next/link";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { data },
  };
}

function NinjaList({ data }) {
  return (
    <div className="container">
      <Title title="All Ninjas" />
      {console.log(data)}
      {!data ? (
        <Loading />
      ) : (
        data?.map((ninja) => {
          return (
            <div className="ninja__item" key={ninja.id}>
              <Link href={`/ninjas/${ninja.id}`}>
                <h3>{ninja.name}</h3>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default NinjaList;
