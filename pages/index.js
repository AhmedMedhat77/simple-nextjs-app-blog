import Title from "@/components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <div className="home container">
      <Title
        title="Hello From Home Page"
        desc="Qui esse enim occaecat occaecat ut occaecat deserunt reprehenderit culpa Lorem."
      />
      <p className="text">
        Reprehenderit magna sit do sunt et officia cillum sunt voluptate
        adipisicing nulla. Laborum dolor aliquip esse consectetur dolor labore
        minim proident minim veniam aute cupidatat voluptate. Ipsum veniam
        eiusmod adipisicing culpa commodo fugiat excepteur est proident id
        aliquip. Labore voluptate in commodo duis et reprehenderit elit veniam
        minim irure.
      </p>
      <p className="text">
        Reprehenderit magna sit do sunt et officia cillum sunt voluptate
        adipisicing nulla. Laborum dolor aliquip esse consectetur dolor labore
        minim proident minim veniam aute cupidatat voluptate. Ipsum veniam
        eiusmod adipisicing culpa commodo fugiat excepteur est proident id
        aliquip. Labore voluptate in commodo duis et reprehenderit elit veniam
        minim irure.
      </p>
    </div>
  );
}
